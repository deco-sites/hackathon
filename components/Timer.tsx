import { Head } from "$fresh/runtime.ts";
import { computed, signal } from "@preact/signals";

const INTIIAL = 5 * 60;

const reset = signal(INTIIAL);
const total = signal(INTIIAL);

const seconds = computed(() => (total.value % 60).toFixed(0).padStart(2, "0"));
const minutes = computed(() =>
  Math.floor(total.value / 60).toFixed(0).padStart(2, "0")
);

const focus = signal<"minutes" | "seconds" | undefined>(undefined);

let id: number | undefined = undefined;

const start = () => {
  const decrement = () => {
    const newValue = Math.max(total.peek() - 1, 0);

    total.value = newValue;

    if (newValue <= 0) {
      stop();
    }
  };

  id = setInterval(decrement, 1e3);
  decrement();
};

const stop = () => {
  clearInterval(id);
  id = undefined;
};

const getStatus = () => id ? "active" : "idle";

if (typeof document !== "undefined") {
  document.addEventListener("keydown", (event) => {
    const status = getStatus();

    if (event.key === " " || event.key === "Enter") {
      if (status === "idle") {
        start();
      } else {
        stop();
      }
    } else if (event.key === "r" || event.key === "R") {
      stop();
      total.value = reset.peek();
    } else if (event.key === "ArrowLeft") {
      focus.value = focus.value === "minutes" ? undefined : "minutes";
    } else if (event.key === "ArrowRight") {
      focus.value = focus.value === "seconds" ? undefined : "seconds";
    } else if (event.key === "ArrowUp") {
      if (focus.value === "minutes") {
        total.value += 60;
      }
      if (focus.value === "seconds") {
        total.value += 1;
      }
      reset.value = total.value;
    } else if (event.key === "ArrowDown") {
      if (focus.value === "minutes") {
        total.value = Math.max(0, total.value - 60);
      }
      if (focus.value === "seconds") {
        total.value = Math.max(0, total.value - 1);
      }
      reset.value = total.value;
    }
  });
}

const percentage = computed(() => (100 * total.value / reset.value).toFixed(2));

function Timer() {
  return (
    <>
      <Head>
        <title>deco.cx timer</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');
        </style>
      </Head>
      <div class="relative bg-primary font-bold" style="font-family: 'Roboto Mono'">
        <div
          class="flex items-center justify-center text-[#02F67C] h-screen w-screen text-[25.5vw] bg-primary"
        >
          <span class={focus.value === "minutes" ? "text-[#70FAB5] duration-100" : ""}>
            {minutes}
          </span>:<span
            class={focus.value === "seconds" ? "text-[#70FAB5] duration-100" : ""}
          >
            {seconds}
          </span>
          <div class={`absolute bottom-0 bg-[rgba(2,246,124,.1)] h-[${percentage.value}%] w-screen duration-200 ease-in-out`}>

          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;

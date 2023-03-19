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
  id = setInterval(() => {
    const newValue = Math.max(total.peek() - 1, 0);

    total.value = newValue;

    if (newValue <= 0) {
      stop();
    }
  }, 1e3);
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

const percentage = computed(() => (100 * total.value / reset.value).toFixed(0));

function Timer() {
  return (
    <>
      <Head>
        <title>Deco Timer</title>
      </Head>
      <div class="bg-[1F261F]">
        <div
          class="flex items-center justify-center text-white h-screen w-screen"
          style={{
            fontSize: "25.5vw",
            // background: `linear-gradient(to right, rgba(255, 255, 255, 0.1) ${
            //   (total.value / reset.value) * 100
            // }%, rgba(255, 255, 255, 0.1) ${(total.value / reset.value) * 100}%)`,
            background:
              `linear-gradient(to top, green ${percentage.value}%, transparent ${percentage.value}%)`,
          }}
        >
          <span class={focus.value === "minutes" ? "text-gray-400" : ""}>
            {minutes}
          </span>:<span
            class={focus.value === "seconds" ? "text-gray-400" : ""}
          >
            {seconds}
          </span>
        </div>
      </div>
    </>
  );
}

export default Timer;

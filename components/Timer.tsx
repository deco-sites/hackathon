import { Head } from "$fresh/runtime.ts";
import { computed, signal } from "@preact/signals";

const INTIIAL = 5 * 60;

const reset = signal(INTIIAL);
const total = signal(INTIIAL);

const seconds = computed(() => (total.value % 60).toFixed(0).padStart(2, "0"));
const minutes = computed(() =>
  Math.floor(total.value / 60).toFixed(0).padStart(2, "0")
);

let id: number | undefined = undefined;

const start = () => {
  id = setInterval(() => {
    total.value = Math.max(total.peek() - 1, 0);
  }, 1e3);
};

const stop = () => {
  clearInterval(id);
  id = undefined;
};

const getStatus = () => id ? "active" : "idle";

if (typeof document !== "undefined") {
  document.addEventListener("keydown", (event) => {
    console.log(event);
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
    }
  });
}

function Timer() {
  return (
    <>
      <Head>
        <title>Deco Timer</title>
      </Head>
      <div class="flex items-center justify-center text-white h-screen w-screen text-9xl">
        {minutes}:{seconds}
      </div>
    </>
  );
}

export default Timer;

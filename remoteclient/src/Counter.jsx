import { createSignal } from "solid-js";
export default () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="bg-red-300 text-white p-5">
      <div>Count = {count()}</div>
      <button
        onClick={() => setCount(count() + 1)}
        class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-full p-3 drop-shadow-lg text-sm"
      >
        Add count
      </button>
    </div>
  );
};

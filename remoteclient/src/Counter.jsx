import { createSignal } from "solid-js";
export default () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="bg-red-300 text-white p-5">
      <div>Count = {count()}</div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://picsum.photos/seed/picsum/200/200" alt="Sunset in the mountains"></img>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
        <button
          onClick={() => setCount(count() + 1)}
          class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-full p-1 drop-shadow-lg text-sm"
        >
          Add to card
        </button>
      </div>
    </div>
  );
};

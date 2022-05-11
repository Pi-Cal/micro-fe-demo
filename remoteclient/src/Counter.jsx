import { createSignal } from "solid-js";
export default () => {
  return (
    <div class="bg-red-300 text-white p-5">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://picsum.photos/seed/picsum/400/200" alt="Sunset in the mountains"></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Mountain</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
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
          class=" w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-full p-2 m-2 drop-shadow-lg text-sm"
        >
          View
        </button>
      </div>
    </div>
  );
};

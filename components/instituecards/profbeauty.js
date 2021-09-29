import React from "react";

export default function ProffBeauty({item}) {
  return (
    <div>
      <div class="container px-6 py-10 mx-auto md:py-16">
        <div class="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
          <div class="flex items-center justify-center w-full md:w-1/2">
            <img
              src={item.image}
              alt="car photo"
              class="w-full h-1/2 max-w-2xl rounded"
            />
          </div>
          <div class="w-full md:w-1/2">
            <div class="max-w-md mx-auto">
              <h1 class="text-2xl font-medium tracking-wide text-red-500 md:text-4xl">
               {item.title}
              </h1>
              <p class="mt-5 leading-7 text-gray-600">
                {item.description}
                   </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <p class="mt-5 leading-7 text-gray-600">
            Don't Hesitate, Feel Free to Check Frequently Asked Questions :
          </p>
          <a
          href="/faq"
           class="mt-4 flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:bg-red-500">
            Read More {'>>'} FAQ's
          </a>
        </div>
      </div>
    </div>
  );
}

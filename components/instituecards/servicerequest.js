import React from 'react';

export default function Request(){

    return (
        <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
  <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
    <div class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
      <div class="my-3 text-4xl font-bold tracking-wider text-center">
        <a href="#">BEING BEAUTIFUL</a>
      </div>
      <p class="mt-6 font-normal text-center text-gray-300 md:mt-0"></p>
      <p class="flex flex-col items-center justify-center mt-10 text-center">
        <span>Fill below details.</span>
        <a href="#" class="underline">We will contact you back</a>
      </p>
      <p class="mt-6 text-sm text-center text-gray-300">After confirmation of services, we will give exact details of services</p>
    </div>
    <div class="p-5 bg-white md:flex-1">
      <h3 class="my-4 text-2xl font-semibold text-gray-700">Service Request</h3>
      <form action="#" class="flex flex-col space-y-5">
        <div class="flex flex-col space-y-1">
          <label for="email" class="text-sm font-semibold text-gray-500">Name</label>
          <input type="text" id="email" autofocus class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
        </div>
        <div class="flex flex-col space-y-1">
          <div class="flex items-center justify-between">
            <label for="password" class="text-sm font-semibold text-gray-500">Phone</label>
            <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800"></a>
          </div>
          <input type="text" id="password" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
        </div>
         <div class="flex flex-col space-y-1">
          <div class="flex items-center justify-between">
            <label for="password" class="text-sm font-semibold text-gray-500">Message</label>
            <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800"></a>
          </div>
          <input type="text" id="message" class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200" />
        </div>

        <div>
          <button type="submit" class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">Submit Request</button>
        </div>
        <div class="flex flex-col space-y-5">
          <span class="flex items-center justify-center space-x-2">
            <span class="h-px bg-gray-400 w-14"></span>

            <span class="h-px bg-gray-400 w-14"></span>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>
    )
}
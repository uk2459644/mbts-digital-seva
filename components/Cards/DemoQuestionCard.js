
export default function DemoQuestionCard(){

    return(
      <div class="flex flex-col flex-wrap h-screen justify-between">
      <header class="p-2">
        <div class="flex flex-row flex-wrap pt-3 justify-around">
          <div>
            <button class="bg-white  border-gray-400 border-2 h-5 w-5 rounded-full ring-cyan-400">
          </button>
          <a class="text-light   text-sm uppercase pl-2 font-semibold">comprehension</a>
          </div>
          <a class="text-light flex-wrap text-sm uppercase pl-12 font-semibold">time</a>
           <div>
            <button class="bg-white  border-gray-400 border-2 h-5 w-5 rounded-full ring-cyan-400">
          </button>
          <a class="text-light   text-sm uppercase pl-2 font-semibold">Info</a>
          </div>
          <button class="no-underline text-white py-1 px-2 font-medium mx-2 bg-cyan-600 hover:bg-cyan-900 rounded">Submit </button>
        </div>
      </header>
      <hr class="border-gray-400 mt-2" />
      <main class="mb-auto">
        <div class="flex flex-row  pt-3 ">
        <div class="flex flex-col md:flex-row md:w-3/4 ">
          <div class="flex-1 flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6">comprehensiont text here seet the max length where it goes</div>
          <div class="flex-1 hidden flex-wrap text-md text-justify md:text-md text-gray-700 font-md font-serif pl-12 pr-12 pt-6">Question Text text here</div>
        </div>
        <div class="w-full border-l-2 md:w-1/3" >
               vvvinfo here
        </div>
        </div>
      
      </main>
      <hr class="border-gray-400 mt-2 mb-2" />
      <footer class="flex flex-row flex-wrap p-4 justify-around ">
        <button class="no-underline text-white py-2 px-2 font-medium mx-2 bg-gray-900 hover:bg-gray-600 rounded">Previous </button>
         <button class="no-underline text-white py-2 px-2 font-medium mx-2 bg-indigo-900 hover:bg-indigo-600 rounded">Mark for view later</button>
         <button class="no-underline text-gray-900 border-2 py-2 px-2 font-medium mx-2  hover:bg-gray-400 rounded">Clear option</button>
          
           <button class="no-underline text-white py-2 px-2 font-medium mx-2 bg-cyan-600 hover:bg-cyan-900 rounded">Save & next </button>
      </footer>
    </div>
    )
}
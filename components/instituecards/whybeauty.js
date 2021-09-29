export default function WhyBeauty({items}) {
  return (
    <div>
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            {/* <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Being Beautiful
            </h2> */}
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Some Excellent Features
            </p>
          </div>
          <div class="flex items-center justify-center">
    <div class="grid grid-cols-1 gap-6 m-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      
      {
        items.map((item,index)=> {
        return (
          <div key={index} class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
          </div>
          <div class="mt-8">
              <p class="text-xl font-semibold my-2">{item.title} </p>
               <div class="border-t-2"></div>
              <div class="flex space-x-2 text-lg  text-gray-400 text-sm">
                   <p>{item.description}</p> 
             
              </div>
          </div>
      </div>
        )
      })
      }
       
     
    </div>
</div>

         
        </div>
      </div>
    </div>
  );
}

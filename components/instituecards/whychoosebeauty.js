export default function WhyChooseBeauty({items}) {
  return (
    <div>
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-3xl text-indigo-600 font-semibold tracking-wide uppercase">
              Why choose us
            </h2>
            {/* <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Beauty Parlour Home Service
            </p> */}
          </div>

          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              
              {
                items.map((item,index)=>{
                  return (
                    <div key={index} class=" relative py-2 px-4 mt-10 rounded-xl my-4 shadow">
                <div class="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                    />
                  </svg>
                </div>
                <div class="mt-8">
                  <p class="text-xl  font-semibold my-2">
                   {item.title}
                  </p>
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


export default function SearchNav(){

    return(
        <div>

<div className="relative bg-light-blue-700 pb-32 overflow-hidden">

<nav className="relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none bg-transparent">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-light-blue-800">
        <div className="px-2 flex items-center lg:px-0">
          <div className="flex-shrink-0">
            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-teal-400.svg" alt="Workflow" />
          </div>
          <div className="hidden lg:block lg:ml-6 lg:space-x-4">
            <div className="flex">
              <a href="#" className="rounded-md py-2 px-3 bg-black bg-opacity-25 text-sm font-medium text-white" aria-current="page">Dashboard</a>

              <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-800">Jobs</a>

              <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-800">Applicants</a>

              <a href="#" className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-800">Company</a>
            </div>
          </div>
        </div>
        <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
          <div className="max-w-lg w-full lg:max-w-xs">
            <label for="search" className="sr-only">Search</label>
            <div className="relative text-light-blue-100 focus-within:text-gray-400">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="flex-shrink-0 h-5 w-5" x-description="Heroicon name: search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input id="search" className="block w-full bg-light-blue-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-light-blue-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm" placeholder="Search" type="search" />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          {/* <!-- Mobile menu button --> */}
          <button className="p-2 rounded-md inline-flex items-center justify-center text-light-blue-200 hover:text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="open">
            <span className="sr-only">Open main menu</span>
            {/* <!-- Icon when menu is closed. --> */}
            <svg className="block flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            {/* <!-- Icon when menu is open. --> */}
            <svg className="hidden flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div className="bg-light-blue-900 hidden lg:hidden">
      <div className="pt-2 pb-3 px-2 space-y-1">
        <a href="#" className="block rounded-md py-2 px-3 bg-black bg-opacity-25 text-base font-medium text-white">Dashboard</a>

        <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-800">Jobs</a>

        <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-800">Applicants</a>

        <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-800">Company</a>
      </div>
    </div>
  </nav>
  <div className="absolute flex justify-center inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0 inset-y-0" aria-hidden="true">
    <div className="flex-grow bg-light-blue-900 bg-opacity-75"></div>
    <svg className="flex-shrink-0" width="1750" height="308" viewBox="0 0 1750 308" xmlns="http://www.w3.org/2000/svg">
      <path opacity=".75" d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#075985"></path>
      <path opacity=".75" d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0c4a6e"></path>
    </svg>
    <div className="flex-grow bg-light-blue-800 bg-opacity-75"></div>
  </div>
  <header class="relative py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-white">
             
            </h1>
          </div>
        </header>
        
        </div>
        <main class="relative -mt-32">
        <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside class="py-6 lg:col-span-3">
                <nav>

                  <a href="#" class="group bg-teal-50 border-l-4 border-teal-500 px-3 py-2 flex items-center text-sm font-medium text-teal-700 hover:bg-teal-50 hover:text-teal-700" aria-current="page">
                    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-teal-500 group-hover:text-teal-500" x-description="Heroicon name: user-circle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="truncate">
                      Blog-Profile
                    </span>
                  </a>

                  <a href="#" class="group mt-1 border-l-4 border-transparent px-3 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900">
                    <svg class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" x-description="Heroicon name: cog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span class="truncate">
                      Account
                    </span>
                  </a>

                
                </nav>
              </aside>

             
            </div>

           

          </div>
        </div>
      </main>
      </div>
    )
}
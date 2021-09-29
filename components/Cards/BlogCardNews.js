

export default function BlogCardNews(){

    return(
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    <div className="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center" 
   // style="background-image:url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=);"
    style={{
        backgroundImage:`url(https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=)`
    }}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
        <a href="#" className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">Politics</a>
        <div className="text-white font-regular flex flex-col justify-start">
          <span className="text-3xl leading-0 font-semibold">25</span>
          <span className="-mt-3">May</span>
        </div>
      </div>
      <main className="p-5 z-10">
        <a href="#" className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Dr. Abdullah Abdullah's Presidential Election Campaign </a>
      </main>
    </div>
  </div>
</div>
    )
}
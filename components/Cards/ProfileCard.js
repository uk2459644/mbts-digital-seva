
export default function ProfileCard(){

    return(
        <div className="max-w-sm m-auto mt-6 rounded shadow-lg overflow-hidden">
  <img src="https://tailwindcss.com/img/card-top.jpg" alt="" className="w-full h-48"/>
  <div className="flex items-center px-6 py-2">
     <img className="absolute -mt-8 block h-28 rounded-full overflow-hidden border-white border-4 border-solid" src="https://avatars2.githubusercontent.com/u/2674850?v=3&s=100" alt="" />
    <div className="text-left flex-grow ml-24 pl-8">
      <div className="mb-4">
        <p className="text-2xl font-bold leading-tight">Dang Van Thanh</p>
        <p className="text-sm leading-tight text-grey-dark"><svg className="align-bottom h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Hue, Vietnam</p>
      </div>
    </div>
  </div>
  <div className="flex px-6 mb-6">
    <button className="w-1/2 mr-1 rounded-full px-2 py-1 leading-normal bg-blue-600 border border-grey text-white cursor-default pointer-events-none">Follow</button>
    <button className="w-1/2 ml-1 rounded-full px-2 py-1 leading-normal bg-white border border-grey text-grey-600 hover:bg-blue-600 hover:text-white">Message</button>
  </div>
  <div className="px-6 py-2">
    <div className="mb-4">
        <svg className="align-middle w-5 h-5 text-grey-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
            </svg> <strong className="align-middle">12</strong>
             <span className="text-grey-darker align-middle">Followers you know</span></div>
    <div className="flex">
      <img className="inline-block h-12 rounded-full overflow-hidden border-white border-4 border-solid" src="https://avatars2.githubusercontent.com/u/1317046?v=3&s=100" alt=""/>
      <img className="inline-block h-12 -ml-3 rounded-full overflow-hidden border-white border-4 border-solid" src="https://avatars2.githubusercontent.com/u/2674858?v=3&s=100" alt=""/>
      <img className="inline-block h-12 -ml-3 rounded-full overflow-hidden border-white border-4 border-solid" src="https://avatars2.githubusercontent.com/u/2674859?v=3&s=100" alt=""/>
      <span className="flex items-center justify-center h-10 w-10 m-1 rounded-full overflow-hidden border-grey border border-solid text-sm text-grey">
        +2
      </span>
    </div>
  </div>
</div>
    )
}
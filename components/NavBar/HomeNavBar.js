import { useState } from "react"
import Link from 'next/link'

export default function HomeNav() {

  const [isOn,setIsOn]=useState(false)

    return (
       
  
<nav className="bg-black bg-transparent">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button onClick={()=>setIsOn(!isOn)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="true">
          <span className="sr-only">Open main menu</span>
          {/* <!-- IcNclassNameon when menu is closed. -->
          <!--
 NclassName           Heroicon NclassNamename: menu

 NclassName           Menu openNclassName: "hidden", Menu closed: "block"
          --> */}
        <svg className={`${isOn ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg className={`${isOn ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
          {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Mock-Test" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Mock-Test" />
        */}
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link href="/">
            <a  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
            <Link href="/dynamic/dynamic-test-cate-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mock-Tests</a>
            </Link>
            <Link href="/testbysubject/subject-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Subject-Tests</a>
            </Link>
            <Link href="/jobs/info-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Job Info</a>
            </Link>
            {/* <Link href="/article/article-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Articles</a>
            </Link> */}
            <Link href="/ourteam/team">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
            </Link>
            <Link href="/aboutus/About">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            </Link>
            <Link href="/contactus/contactus">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
            </Link>
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          this was bell icon
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button> */}

        {/* <!-- Profile dropdown --> */}
        <div className="ml-3 relative">
          {/* <div>
            <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div> */}
          {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
          <div className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* 
  <!--
    Mobile menu, toggle classes based on menu state.

    "block sm:hidden"
    Menu open: "block", Menu closed: "hidden"
  --> */}
  <div className={`${isOn ? 'block' : 'hidden'} sm:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <Link href="/">
            <a  className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-sm font-medium">Home</a>
            </Link>
            <Link href="/dynamic/dynamic-test-cate-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mock-Tests</a>
            </Link>
            <Link href="/testbysubject/subject-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Subject-Tests</a>
            </Link>
            <Link href="/jobs/info-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Jobs Info</a>
            </Link>
            {/* <Link href="/article/article-index">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Articles</a>
            </Link> */}
            <Link href="/ourteam/team">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Team</a>
            </Link>
            <Link href="/aboutus/About">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            </Link>
            <Link href="/contactus/contactus">
            <a  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
       </Link>
    </div>
  </div>
 

</nav>

    )
}
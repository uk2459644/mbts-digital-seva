import React from  'react'
import {useState} from 'react'

export default function InstituteNav () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
  
    return (
      <div class=" ">
        <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
            <ul class="flex items-center hidden space-x-8 lg:flex">
              {/*
               <li>
                <a
                  href="/institute/coaching-testlist/coaching-testlist-index"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Test-List
                </a>
              </li>
              <li>
                <a
                  href="/institute/videos/play-list-index"
                  aria-label="Video List"
                  title="Video List"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Video-List
                </a>
              </li>
              <li>
                <a
                  href="/institute/coaching-notes/coaching-notes-index"
                  aria-label="Notes"
                  title="Notes"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Notes
                </a>
              </li>
               */}
               <li>
                <a
                  href="/"
                  aria-label="Home"
                  title="Home"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                 Home
                </a>
              </li>
               <li>
                <a
                  href="/book-services"
                  aria-label="Book services"
                  title="Book services"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                 Book Test Series
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  aria-label="Product Results"
                  title="Product Results"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/whyus"
                  aria-label="Product Results"
                  title="Product Results"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Why Us
                </a>
              </li>
            </ul>
            <a
              href="/"
              aria-label="Coaching Name"
              title="Coaching Name"
              class="inline-flex items-center"
            >
              <svg
                class="w-8 text-yellow-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span class="ml-2 text-xl font-bold tracking-wide text-red-400 uppercase">
             MBTS Digital Seva
              </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
                <a
                  href="/faq"
                  aria-label="faq"
                  title="faq"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  FAQ's
                </a>
                </li>
              <li>
                <a
                  href="/aboutus"
                  aria-label="About us"
                  title="About us"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  aria-label="Contact Us"
                  title="Contact Us"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Contact Us
                </a>
              </li>
              {/* 
              <li>
                <a
                  href="/institute/coaching-signin/coaching-signin-index"
                  aria-label="Sign In"
                  title="Sign In"
                  class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-yellow-400"
                >
                  Sign In
                </a>
              </li> 
              */}
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute z-10 top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Coaching Name"
                          title="Coaching Name"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-red-400 uppercase">
                          MBTS Digital Seva
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4 z-6">
                        {/* 
                        <li>
                          <a
                            href="/institute/coaching-testlist/coaching-testlist-index"
                            aria-label="Test-List"
                            title="Test-List"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Test-List
                          </a>
                        </li>
                        <li>
                          <a
                            href="/institute/videos/play-list-index"
                            aria-label="Video-List"
                            title="Video-List"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Video-List
                          </a>
                        </li>
                        <li>
                          <a
                            href="/institute/coaching-notes/coaching-notes-index"
                            aria-label="Notes"
                            title="Notes"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Notes
                          </a>
                        </li> 
                        */}
                        <li>
                          <a
                            href="/"
                            aria-label="Home"
                            title="Home"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                          Home
                          </a>
                          </li>
                        <li>
                          <a
                            href="/book-services"
                            aria-label="Book services"
                            title="Book services"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                           Book Test Series
                          </a>
                        </li>
                        <li>
                          <a
                            href="/services"
                            aria-label="Results"
                            title="Results"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/whyus"
                            aria-label="Why us"
                            title="Why Us"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Why Us
                          </a>
                          </li>
                          <li>
                          <a
                            href="/faq"
                            aria-label="faq"
                            title="faq"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            FAQ's
                          </a>
                        </li>
                        <li>
                          <a
                            href="/aboutus"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/contactus"
                            aria-label="Contact Us"
                            title="Contact Us"
                            class="font-medium tracking-wide text-red-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Contact Us
                          </a>
                        </li>
                        {/* 
                        <li>
                          <a
                            href="/institute/coaching-signin/coaching-signin-index"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-white-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign In"
                            title="Sign In"
                          >
                            Sign In
                          </a>
                        </li> 
                        */}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
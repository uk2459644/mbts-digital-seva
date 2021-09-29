import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 16000, min: 8000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
export default function ServiceCarousel ({items}){

    return (
        <div>
             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-red-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block text-red-600 font-medium font-serif mb-2">
              Some Awesome Services By Us
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
      </div>
      
      <div >
      <Carousel 
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      
      transitionDuration={500}
      responsive={responsive}>
     
         
        {items.map((item, index) => {
          return (
            <div key={index} >
                <div className="flex flex-col w-full items-center m-4 p-4">

               
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src={item.image}
                alt=""
              />
              <h1 className="mb-2 text-center text-xl font-semibold font-sans leading-none sm:text-2xl">
                {item.title}
              </h1>
              <p className="mb-2 text-center text-xl font-medium font-sans leading-none sm:text-2xl">
               Rs. {item.price}
              </p>
              {/* <p className="text-gray-700">
                {item.description}
              </p> */}
              <div class="pt-6 p-4 m-4 md:pt-0">
                    <a href={`/preview/${item.keyword}/${item.id}/`} class="bg-blue-500 text-white justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Book Services</a>
                </div>
                </div>
            </div>
          );
        })}
         </Carousel>
     
      </div>
     
      <div className="text-center">
        <a
          href="/services"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
        </div>
    )
}
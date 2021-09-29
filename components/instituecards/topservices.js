import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 16000, min: 8000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function TopServices({ items }) {
  return (
    <div className="">
         <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        transitionDuration={1000}
        responsive={responsive}
      >
          {items.map((item, index) => {
          return (
            <div key={index}>
                 <div className="flex  w-screen items-center ">

              <div
                class="bg-gray-100  w-screen h-96 "
                style={{backgroundImage:`url(${item.image})`,
                 backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                 width:'100%',
                  backgroundSize: 'contain',}}
              >
                <div class="flex flex-row items-end h-full w-full">
                  <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 class="text-base text-center font-bold leading-5 uppercase">
                     {item.title} 
                    </h3>
                    <div class="inline-flex items-center">
                      <span class="capitalize  text-center font-base text-xs my-1 mr-1">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        })}
        </Carousel>
          {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        responsive={responsive}
      >
        {items.map((item, index) => {
          return (
            <div key={index}>
              <div
                class="bg-gray-100 m-auto w-full h-64 "
                style="background-image:url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350'); background-position: center; background-repeat: no-repeat; background-size: cover;"
              >
                <div class="flex flex-row items-end h-full w-full">
                  <div class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                    <h3 class="text-base font-bold leading-5 uppercase">
                     {item.title}
                    </h3>
                    <div class="inline-flex items-center">
                      <span class="capitalize font-base text-xs my-1 mr-1">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      </div> */}
      </div>
    
  );
}

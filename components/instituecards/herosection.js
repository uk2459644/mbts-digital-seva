import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeroComponent from "./herocomponent";

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

export default function HeroSection({ items }){

    return (
        <div>
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
        {
          items.map((item,index)=>{
            return (
              <div key={index}>
                 <HeroComponent item={item} />
                </div>
            )
          })
        }
         
      
      </Carousel>

        </div>
    )
}
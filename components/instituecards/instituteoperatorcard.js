import { useEffect } from "react";


export const InstituteOperator = ({items}) => {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
              {items[0].name}
              <br className="hidden md:block" />
              
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
             {items[0].qualification}
            </p>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            {items[0].speciality}
            </p>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            Contact : {items[0].phone}, {items[0].email}
            </p>
            
      
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={items[0].image}
            alt=""
          />
        </div>
      </div>
    );
  };

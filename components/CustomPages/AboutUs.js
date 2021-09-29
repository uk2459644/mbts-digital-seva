import Image from 'next/image'

export default function AboutUs(){

    return(
        <section id="about" className="relative py-20 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full  md:w-1/2  ml-auto mr-auto px-4" data-aos="fade-right">
            
         <Image 
         src="/pexels-kulik-stepan-2.jpg"
         alt="study image"
         width={400}
         height={500}
         />
         
         {/* <img alt="study image" className=" w-72 h-96 rounded-lg shadow-lg"
         //  src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
           
           src="/pexels-kulik-stepan-2.jpg"
           /> */}
        </div>
        <div className=" md:w-1/2 ml-auto mr-auto  px-4" data-aos="fade-left">
          <div className="md:pr-12">
            <small><span className="text-yellow-500 uppercase">About US</span></small>
            <h3 className="text-3xl uppercase font-bold">
              We Believe in <br />
              <span className="text-yellow-500">“People Goals”.</span> <br />
              Yours and Ours.
            </h3>
            <p className="mt-4 text-lg leading-relaxed">
              Are you passionate about <span className="text-yellow-500">“Your Goals ?”.</span>
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Have you a dream of <span className="text-yellow-500">“Govt Jobs ?”</span>
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Why are you waiting for ?</p>
              <p className="mt-4 text-lg leading-relaxed">
              Join our awesome community of <span className="text-yellow-500">“Govt Jobs aspirants”</span>  
              and begin your journey in a more confident way .
            </p>
            <ul className="list-none mt-6">
              {/* <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="font-semibold inline-block py-3 mr-3 text-yellow-500"><i className="fas fa-dumbbell fa-2x"> </i></span>
                  </div>
                  <div>
                    <h4 className="text-xl">A Customized Mock Test Program</h4>
                  </div>
                </div>
              </li> */}
              {/* <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="font-semibold inline-block py-3 mr-3 text-yellow-500"><i className="fas fa-hard-hat fa-2x"> </i></span>
                  </div>
                  <div>
                    <h4 className="text-xl">Personal Training Anywhere</h4>
                  </div>
                </div>
              </li> */}
              {/* <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="font-semibold inline-block py-3 mr-3 text-yellow-500"><i className="fas fa-users fa-2x"> </i></span>
                  </div>
                  <div>
                    <h4 className="text-xl">Team Training Group Sessions</h4>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
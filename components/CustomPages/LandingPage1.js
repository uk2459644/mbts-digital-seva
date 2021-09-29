import Link from "next/link";

export default function LandingPage1() {

    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center" 
        style={{
            minHeight:`90vh`
        }}
        // style="min-height: 95vh"
        >
            <div
                className="absolute top-0 w-full h-full bg-top bg-cover"
                style={{
                    backgroundImage:`url('/study-1.jpg')`
                }}
        //         style="
        //     background-image: url('https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        //   "
            >
                <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-black"></span>
            </div>
            <div className="container relative mx-auto" data-aos="fade-in">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div>
                            <h1 className="text-white font-semibold text-4xl">GET PREPARED, CONFIDENT & <span className="text-yellow-500">MOTIVATED</span></h1>
                            <p className="mt-4 text-lg text-gray-300">An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.</p>
                           <Link href="/dynamic/dynamic-test-cate-index">
                           <a  className="bg-transparent hover:bg-yellow-500 text-yellow-600 font-semibold hover:text-white p-3 border border-yellow-600 hover:border-trasparent rounded inline-block mt-5 cursor-pointer"> Let's Start </a>
                           </Link> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" 
            style={{
                height:`70px`,
                transform:`translateZ(0px)`
            }}
         //   style="height: 70px; transform: translateZ(0px)"
            >
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
    )
}
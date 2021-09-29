import Head from 'next/head'

export default function COntactUs() {

    return (
        <div>

<Head>
                <title>CONTACT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS.</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="keywords" content="An exercise system that keeps you safe, makes things simple, and gives you support so you feel capable and confident.
        Free Mock Test: Get Online Test Series for Bank PO, Clerk, IBPS, SBI, SSC, LIC, RBI, RRB, JEE, CTET, GATE &amp; other 2020 Exams. Attempt Mock Test, Practice Set, Analyse your preparation and practice question answers in Hindi and English" />
                <meta name="description" content="
       Are you passionate about “Your Goals ?”.

       Have you a dream of “Govt Jobs ?”
       
       Why are you waiting for ?
       
       Join our awesome community of “Govt Jobs aspirants”and begin your journey in a more confident way ."/>
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="OUR TEAM : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS." />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Are you passionate about “Your Goals ?”.

Have you a dream of “Govt Jobs ?”

Why are you waiting for ?

Join our awesome community of “Govt Jobs aspirants”and begin your journey in a more confident way . "/>
                <meta property="og:image" alt="about us image" content="https://mocktest.vercel.app/pexels-kulik-stepan-2.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Are you passionate about “Your Goals ?”.

Have you a dream of “Govt Jobs ?”

Why are you waiting for ?

Join our awesome community of “Govt Jobs aspirants”and begin your journey in a more confident way ." />
                <meta name="twitter:title" content="ABOUT US : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS." />
                <meta name="twitter:site" content="https://mocktest.site/contactus/contactus" />
                <meta name="twitter:image" alt="about us image" content="https://mocktest.site/pexels-kulik-stepan-2.jpg" />
                <link rel="icon" href="https://mocktest.vercel.app/contactus/contactus" />
                <link rel="canonical" href="https://mocktest.site/contactus/contactus" />
               
            </Head>


            <section className="pb-20 relative block bg-black text-white">
                <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" 
            // style="height: 80px; transform: translateZ(0px)"
                
            style={{
                height:`80px`,
                transform:`translateZ(0px)`,
            }}
                >
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-white uppercase">Contact Us</h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">Contact us using the form below.Ask any questions. We're here to make your life just a little easier.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact_form" className="relative block py-24 lg:pt-0 bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300" data-aos="fade-up-right">
                                <div className="flex-auto p-5 lg:p-10 bg-yellow-600 text-black">
                                    <h4 className="text-2xl font-semibold text-black">Want to work with us?</h4>
                                    <p className="leading-relaxed mt-1 mb-4">Complete this form and we will get back to you in 24 hours.</p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label className="block uppercase text-xs font-bold mb-2" for="full-name">Full Name</label><input type="text" className="px-3 py-3 placeholder-gray-400 bg-gray-700 rounded text-sm text-white shadow focus:outline-none focus:shadow-outline w-full" placeholder="Full Name"
                                                 // style="transition: all 0.15s ease 0s"
                                                 style={{
                                                     transition:`all 0.15s ease 0s`
                                                 }}
                                                     />
                                     </div>
                                    <div className="relative w-full mb-3"><label className="block uppercase text-xs font-bold mb-2" for="email">Email</label><input type="email" className="px-3 py-3 placeholder-gray-800 bg-gray-700 rounded text-sm text-white shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email" 
                                    // style="transition: all 0.15s ease 0s"
                                    style={{
                                        transition:`all 0.15s ease 0s`
                                    }}
                                     /></div>
                                    <div className="relative w-full mb-3"><label className="block uppercase text text-xs font-bold mb-2" for="message">Message</label><textarea rows="4" cols="80" className="px-3 py-3 placeholder-white-400 bg-gray-700 rounded text-sm text-white shadow focus:outline-none focus:shadow-outline w-full" placeholder="Type a message..."></textarea></div>
                                    <div className="text-center mt-6">
                                        <button className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
                                         // style="transition: all 0.15s ease 0s"
                                         style={{
                                            transition:`all 0.15s ease 0s`
                                        }}
                                        >Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
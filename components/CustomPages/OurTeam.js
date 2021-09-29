import Head from 'next/head'
import Image from 'next/image'

export default function OurTeam(){

    return(
      <div>
        <Head>
                <title>OUR TEAM : WE BELIEVE IN “PEOPLE GOALS” YOURS AND OURS.</title>
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
                <meta name="twitter:site" content="https://mocktest.site/ourteam/team" />
                <meta name="twitter:image" alt="about us image" content="https://mocktest.site/pexels-kulik-stepan-2.jpg" />
                <link rel="icon" href="https://mocktest.vercel.app/ourteam/team" />
               
                <link rel="canonical" href="https://mocktest.site/ourteam/team" />
               
            </Head>


     
        <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold uppercase">Meet Our Team</h2>
          {/* <p className="text-lg leading-relaxed m-4">
            Get the latest training tips and performance 
            information from the Guardian Gym team.
            </p> */}
        </div>
      </div>
      {/* <!-- Trainer Card Wrapper --> */}
      <div className="flex flex-wrap">
        {/* <!-- Card 1 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16" data-aos="flip-right">
          <div className="px-6">
            <Image 
            src="/up_mock_img1.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto"
            width={250}
            height={350}
            />
            {/* <img alt="..." 
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
            className="shadow-lg rounded max-w-full mx-auto" 
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Upendra Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">B. Tech. (expected-2022) / ceo , founder</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                ><button className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/amit_mock_img2.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto"
            width={250}
            height={350}
            />
            {/* <img alt="..." 
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
             className="shadow-lg rounded max-w-full mx-auto" 
             style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px" 
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Amit Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">B. Tech. / M.D.</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                ><button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/shashi_img_mock1.jpg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto"
            width={250}
            height={350}
            />
            {/* <img alt="..." 
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
             className="shadow-lg rounded max-w-full mx-auto" 
             style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px" 
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Shashi Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">B. Tech. / B.D.E.</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                ><button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16 md:px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/prem_mock_image1.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto "
            width={250}
            height={350}
            />
            {/* <img alt="..." src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="shadow-lg rounded max-w-full mx-auto"
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Prem Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Graduation (Account Honourss.) / H.R. & Sales</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                >
                <button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-16 md:px-16" data-aos="flip-right">
          <div className="px-6">
          <Image 
            src="/vikash_mock1.jpeg" 
            alt="team photo 1"
            className="shadow-lg rounded max-w-full mx-auto "
            width={250}
            height={350}
            />
            {/* <img alt="..." src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            className="shadow-lg rounded max-w-full mx-auto"
            style={{
                maxWidth:`250px`,
            }}
        // style="max-width: 250px"
             /> */}
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold">Vikash Kumar</h5>
              <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">Graduation  / H.R. & Sales</p>
              <div className="mt-6">
                <button className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                  <i className="fab fa-twitter"></i></button
                >
                <button className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1" type="button">
                <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact header section --> */}
  </section>
  </div>
    )
}
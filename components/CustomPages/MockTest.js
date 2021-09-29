import MockCatCard from "../Cards/MockCatCard";
import OverLapingCard from "../Cards/OverlaingCard";
import OverLapTestCatCard from "../Cards/OverLapingTestCatCard";
import QuintArticleCard from "../Cards/QuintArticleCard";

export default function MockTest() {

  return (
    <div>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold uppercase">Mock Test Categories</h2>
              <p className="text-lg leading-relaxed m-4">
                Choose a category and do as many tests as you can .
            </p>
            </div>
          </div>
          {/* <!-- Trainer Card Wrapper --> */}
          <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
              
              <OverLapTestCatCard
                 cat="RRB GROUP D"
                 link="/rrb-group-d/rrb-group-d-index"
              />
              <OverLapTestCatCard 
                 cat="RRB NTPC"
                 link="/rrb-ntpc/rrb-ntpc-index"
              />

              <OverLapTestCatCard 
                  cat="SSC CGL"
                  link="/ssc-cgl/ssc-cgl-index"
              />
              <OverLapTestCatCard 
                 cat="SSC CHSL"
                 link="/ssc-chsl/ssc-chsl-index"
              />
              <OverLapTestCatCard 
                  cat="SSC JE CE"
                  link="/ssc-je-ce/ssc-je-ce-index"
              
              />
              <OverLapTestCatCard 
                  
                  cat="SSC JE EE"
                  link="/ssc-je-ee/ssc-je-ee-index"
              />

              </div>
           
          </div>
        </div>

        {/* <!-- Contact header section --> */}
      </section>
    </div>
  )
}

//  {/* <!-- Card 1 --> */}
//  <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
//  </div>
//  {/* <!-- Card 2 --> */}
//  <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
//  </div>
//  {/* <!-- Card 3 --> */}
//  <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-right">
//  </div>
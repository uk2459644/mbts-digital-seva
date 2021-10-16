import InstituteNav from "../components/instituecards/institutenav";
import axios from "axios";

const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchAboutdata = async () =>
  await axios
    .get(`${dataurl}aboutus/4/`)
    .then((res) => ({
      error: null,
      aboutdata: res.data,
    }))
    .catch(() => ({
      error: true,
      aboutdata: null,
    }));

export async function getServerSideProps(context) {
  const aboutdata = await fetchAboutdata();

  return {
    props: {
      aboutdata,
    },
    //   revalidate:3600,
  };
}

export default function AboutUs({ aboutdata }) {
  // console.log(`${aboutdata.aboutdata[0].image}`)
  return (
    <div>
      <InstituteNav />
      <div class="min-h-screen flex items-center">
        <div class="container mx-auto p-4 flex flex-wrap items-center">
          {aboutdata.aboutdata != null ? (
            <div>
              <div class="w-full md:w-5/12 text-center p-4">
                <img src={aboutdata.aboutdata[0].image} alt="Not Found" />
              </div>
              <div class="w-full md:w-7/12 text-center md:text-left p-4">
                <div class="text-xl text-red-400  md:text-3xl font-medium mb-4">
                  {aboutdata.aboutdata[0].title}
                </div>
                <div class="text-lg font-normal font-serif mb-8">
                  {aboutdata.aboutdata[0].description}
                </div>
                <div class="text-lg font-semibold mb-8">
                  {aboutdata.aboutdata[0].description2}
                </div>
                <div class="text-lg font-normal mb-8">
                  {aboutdata.aboutdata[0].description3}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2>About Us data not available.</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

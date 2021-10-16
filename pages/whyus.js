import Head from "next/head";
import InstituteNav from "../components/instituecards/institutenav";
import WhyBeauty from "../components/instituecards/whybeauty";
import WhyChooseBeauty from "../components/instituecards/whychoosebeauty";
import axios from "axios";

const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchWhyUsdata = async () =>
  await axios
    .get(`${dataurl}whyus/4/`)
    .then((res) => ({
      error: null,
      whyusdata: res.data,
    }))
    .catch(() => ({
      error: true,
      whyusdata: null,
    }));

const fetchWhyChoosedata = async () =>
  await axios
    .get(`${dataurl}why-choose/4/`)
    .then((res) => ({
      error: null,
      whychoosedata: res.data,
    }))
    .catch(() => ({
      error: true,
      whychoosedata: null,
    }));
export async function getServerSideProps(context) {
  const whyusdata = await fetchWhyUsdata();
  const whychoosedata = await fetchWhyChoosedata();

  return {
    props: {
      whyusdata,
      whychoosedata,
    },
    //   revalidate:3600,
  };
}

export default function WhyUs({ whyusdata, whychoosedata }) {
  return (
    <div>
      <InstituteNav />
      {whyusdata.whyusdata != null ? (
        <div>
          <WhyBeauty items={whyusdata.whyusdata} />
        </div>
      ) : (
        <div>
          <h2>Why us data is not loaded.</h2>
        </div>
      )}
      {whychoosedata.whychoosedata != null ? (
        <div>
          <WhyChooseBeauty items={whychoosedata.whychoosedata} />
        </div>
      ) : (
        <div>
          <h2>Why Choose data not loaded.</h2>
        </div>
      )}
    </div>
  );
}

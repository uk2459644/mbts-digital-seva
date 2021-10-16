import axios from "axios";
import InstitueFooter from '../components/instituecards/instituefooter'
import InstituteFaq from '../components/instituecards/institutefaq';
import InstituteHero from '../components/instituecards/institutehero';
import InstituteNav from '../components/instituecards/institutenav'
import InstituteResult from '../components/instituecards/instituteresult';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import ServiceCarousel from "../components/instituecards/servicecarousel";
import TopServices from "../components/instituecards/topservices";
import WhyBeauty from "../components/instituecards/whybeauty";
import WhyChooseBeauty from "../components/instituecards/whychoosebeauty";
import ProffBeauty from "../components/instituecards/profbeauty";
import { InstituteReview } from "../components/instituecards/institutereview";
import HeroSection from "../components/instituecards/herosection";
const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;


const fetchSitedata = async () =>
  await axios
    .get(`${dataurl}site-by-owner/4/`)
    .then((res) => ({
      error: null,
      sitedata: res.data,
    }))
    .catch(() => ({
      error: true,
      sitedata: null,
    }));

    const fetchReview = async () =>
    await axios
      .get(`${dataurl}review/4/`)
      .then((res) => ({
        error: null,
        reviewdata: res.data,
      }))
      .catch(() => ({
        error: true,
        reviewdata: null,
      }));
  
const fetchProfdata = async () =>
await axios
  .get(`${dataurl}site-prof/4/`)
  .then((res) => ({
    error: null,
    profdata: res.data,
  }))
  .catch(() => ({
    error: true,
    profdata: null,
  }));

const fetchSiteFeature = async () =>
  await axios
    .get(`${dataurl}feature-by/4/`)
    .then((res) => ({
      error: null,
      featuredata: res.data,
    }))
    .catch(() => ({
      error: true,
      featuredata: null,
    }));

const fetchSiteContacts = async () =>
  await axios
    .get(`${dataurl}contact/4/`)
    .then((res) => ({
      error: null,
      contactsdata: res.data,
    }))
    .catch(() => ({
      error: true,
      contactsdata: null,
    }));

const fetchSiteFaq = async () =>
  await axios
    .get(`${dataurl}faq/4/`)
    .then((res) => ({
      error: null,
      faqdata: res.data,
    }))
    .catch(() => ({
      error: true,
      faqdata: null,
    }));

  const fetchTopService = async () =>
  await axios
    .get(`${dataurl}top-services/4/`)
    .then((res) => ({
      error: null,
      topdata: res.data,
    }))
    .catch(() => ({
      error: true,
      topdata: null,
    }));

    
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
  const sitedata = await fetchSitedata();
  const featuredata = await fetchSiteFeature();
  const faqdata = await fetchSiteFaq();
  const contactsdata = await fetchSiteContacts();
  const topdata = await fetchTopService();
  const profdata = await fetchProfdata();
  const whyusdata = await fetchWhyUsdata();
  const whychoosedata = await fetchWhyChoosedata();
  const reviewdata =await fetchReview();


  return {
    props: {
      sitedata,
      featuredata,
      faqdata,
      contactsdata,
      topdata,
      profdata,
      whyusdata,
      whychoosedata,
      reviewdata
    },
  //  revalidate: 3600,
  };
}

export default function Home({whyusdata,reviewdata, whychoosedata, sitedata, featuredata, faqdata, contactsdata,topdata,profdata }) {
  console.log(`${contactsdata.contactsdata}`);
  console.log(`${featuredata.featuredata}`);
  console.log(`${sitedata.sitedata}`);
  console.log(`${faqdata.faqdata}`);

  return (
    <div>
      <InstituteNav />
      {
        topdata.topdata != null ? (
          <div>
             {/* <TopServices items={topdata.topdata} /> */}
             <HeroSection items={topdata.topdata} />
            </div>
        ):(
          <div>
            <h2>Data for top services is  not loading</h2>
            </div>
        )
      }
     {
         sitedata.sitedata != null ? (
          <div>
              <InstituteHero item={sitedata.sitedata[0]} />
            </div>
        ):(
          <div>
            <h2>Data for hero component is  not loading</h2>
            </div>
        )

     }
     {
        featuredata.featuredata != null ? (
          <div>
              <ServiceCarousel items={featuredata.featuredata.slice(0,8)} />
            </div>
        ):(
          <div>
            <h2>Data for features are  not loading</h2>
            </div>
        )

     }
     
     {whyusdata.whyusdata != null ? (
        <div>
          <WhyBeauty items={whyusdata.whyusdata} />
        </div>
      ) : (
        <div>
          <h2>Why us data is not loaded.</h2>
        </div>
      )}
        {/* {reviewdata.reviewdata != null ? (
        <div>
          <InstituteReview items={reviewdata.reviewdata} />
        </div>
      ) : (
        <div>
          <h2>Review data is not loaded.</h2>
        </div>
      )} */}

      {/* <InstituteResult items={featuredata.featuredata.slice(0,8)} /> */}
      {
        profdata.profdata != null ? (
          <div>
             <ProffBeauty item={profdata.profdata[0]} />
            </div>

        ):(
          <div>
            <h2>Prof Data is not available.</h2>
            </div>
        )
      }
      {whychoosedata.whychoosedata != null ? (
        <div>
          <WhyChooseBeauty items={whychoosedata.whychoosedata} />
        </div>
      ) : (
        <div>
          <h2>Why Choose data not loaded.</h2>
        </div>
      )}

      {/* <InstituteFaq items={faqdata.faqdata} /> */}
      <InstitueFooter />
    </div>
  );
}

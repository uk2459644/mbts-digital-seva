import axios from 'axios';
import React from 'react'
import InstitueFooter from '../components/instituecards/instituefooter'
import InstituteFaq from '../components/instituecards/institutefaq';
import InstituteHero from '../components/instituecards/institutehero';
import InstituteNav from '../components/instituecards/institutenav'
import InstituteResult from '../components/instituecards/instituteresult';


const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`

const fetchSitedata = async ()=> await axios.get(`${dataurl}preview/`)
.then((res)=>({
  error : null,
  sitedata : res.data

}))
.catch(()=>({
  error : true,
  sitedata:null,
}));

const fetchSiteFeature = async () => await axios.get(`${dataurl}preview-feature/`)
.then(res =>({
  error: null,
  featuredata: res.data,

}))
.catch(()=>({
  error : true,
  featuredata:null

}));

const fetchSiteContacts = async () => await axios.get(`${dataurl}preview-contact/`)
.then(res => ({
  error : null,
  contactsdata:res.data,
}))
.catch(()=>({
error:true,
contactsdata:null
}));

const fetchSiteFaq = async () => await axios.get(`${dataurl}preview-faq/`)
.then(res =>({
  error:null,
  faqdata:res.data,
}))
.catch(()=>({
  error: true,
  faqdata:null
}));


export async function getServerSideProps(context) {

  const sitedata = await fetchSitedata();
  const featuredata = await fetchSiteFeature();
  const faqdata = await fetchSiteFaq();
  const contactsdata = await fetchSiteContacts();

  return {
    props : {
      sitedata,
      featuredata,
      faqdata,
      contactsdata

    },
  //  revalidate: 3600,
  }


}

export default function PreviewHome({sitedata,featuredata,faqdata,contactsdata}){
  console.log(`contactsdata  ${contactsdata.contactsdata[0].name}`);
  console.log(`${featuredata}`);
  console.log(`${sitedata}`);
  console.log(`${faqdata}`);

    return (
        <div>
            <InstituteNav />
            <InstituteHero item={sitedata.sitedata[0]}/>
            <InstituteResult items={featuredata.featuredata.slice(0,8)} />
            <InstituteFaq items={faqdata.faqdata} />
            <InstitueFooter />
        </div>
    )
}
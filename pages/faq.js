import React from 'react'
import axios from "axios";
import InstitueFooter from '../components/instituecards/instituefooter'
import InstituteFaq from '../components/instituecards/institutefaq';
import InstituteNav from '../components/instituecards/institutenav'
const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

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


    export async function getServerSideProps(context){

        const faqdata=await fetchSiteFaq();

        return{
            props:{
                faqdata
            },
         //   revalidate:3600,
        }
    }

export default function Faq({faqdata}){

    return(
        <div>
            <InstituteNav/>
            {
              faqdata.faqdata != null ? 
              (
                <div>
                   <InstituteFaq items={faqdata.faqdata} />
                  </div>
              ):
              (
                <div>
                  <h2>FAQ's data not loaded.</h2>
                  </div>
              )
            }
           
            <InstitueFooter />

        </div>
    )
}
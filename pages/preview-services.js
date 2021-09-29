import React from 'react'
import InstituteNav from '../components/instituecards/institutenav'
import axios from 'axios'
import InstituteResult from '../components/instituecards/instituteresult';
import InstitueFooter from '../components/instituecards/instituefooter';


const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchSiteFeature = async () =>
  await axios
    .get(`${dataurl}preview-feature/`)
    .then((res) => ({
      error: null,
      featuredata: res.data,
    }))
    .catch(() => ({
      error: true,
      featuredata: null,
    }));

export async function getServerSideProps(context){
    const featuredata = await fetchSiteFeature();

    return {
        props: {
            featuredata,

        },
      //  revalidate:3600,
    }
}

export default function PreviewServices ({featuredata}){

    return (
        <div>
            <InstituteNav />
            <InstituteResult items={featuredata.featuredata} />
            <InstitueFooter />

        </div>
    )
}
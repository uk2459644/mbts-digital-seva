import React from 'react'
import axios from 'axios'
import InstituteNav from '../components/instituecards/institutenav'
import InstituteContactUsForm from '../components/instituecards/institutecontactusform';


const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchSiteContacts = async () =>
  await axios
    .get(`${dataurl}contact/3/`)
    .then((res) => ({
      error: null,
      contactsdata: res.data,
    }))
    .catch(() => ({
      error: true,
      contactsdata: null,
    }));


    export async function getServerSideProps(context) {
        const contactsdata= await fetchSiteContacts();

        return {
            props : {
             contactsdata
            },
         //   revalidate: 3600,
        }
    }
export default function ContactUs({contactsdata}){

    return (
        <div>
            <InstituteNav />
            {
              contactsdata.contactsdata != null ? 
              (
                  <div>
                     <InstituteContactUsForm items={contactsdata.contactsdata} />
           
                    </div>
              ):
              (
                <div>
                  <h2>Data for contact us not loaded.</h2>
                  </div>

              )
            }
            
        </div>
    )
}
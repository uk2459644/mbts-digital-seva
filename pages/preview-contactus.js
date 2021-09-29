import React from 'react'
import InstituteNav from '../components/instituecards/institutenav'
import axios from 'axios'
import InstituteContactUsForm from '../components/instituecards/institutecontactusform';

const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchSiteContacts = async () =>
  await axios
    .get(`${dataurl}preview-contact/`)
    .then((res) => ({
      error: null,
      contactsdata: res.data,
    }))
    .catch(() => ({
      error: true,
      contactsdata: null,
    }));

    export async function getServerSideProps(context){

        const contactsdata = await fetchSiteContacts();

        return {
            props : {
                contactsdata

            }
        }
    }

export default function PreviewContactus ({contactsdata}){

    return (
        <div>
            <InstituteNav />
            <InstituteContactUsForm items={contactsdata.contactsdata} />

        </div>
    )
}
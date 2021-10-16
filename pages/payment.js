import React from "react";
import axios from "axios";
import InstituteNav from "../components/instituecards/institutenav";

const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/`;

const fetchQrcode = async () =>
  await axios
    .get(`${dataurl}qrcode/4/`)
    .then((res) => ({
      error: null,
      qrcode: res.data,
    }))
    .catch(() => ({
      error: true,
      qrcode: null,
    }));

export async function getServerSideProps(context) {
  const qrcode = await fetchQrcode();

  return {
    props: {
      qrcode,
    },
    //   revalidate:3600,
  };
}

export default function PaymentPage({qrcode}) {

    console.log(qrcode.qrcode)
  return (
    <div>
        <InstituteNav />
        {
            qrcode.qrcode != null ? (
                <section class="relative p-4 bg-blueGray-50">
                <div class="items-center flex flex-wrap">
                  <div class="w-full md:w-8/12 ml-auto mr-auto px-4">
                    <img
                      alt="..."
                      class="max-w-full rounded-lg shadow-lg"
                      src={`${qrcode.qrcode[0].image}`}
                    />
                  </div>
                  <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div class="md:pr-12">
                      <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                      <i class="bi bi-phone"></i>
                      </div>
                      <h3 class="text-3xl font-semibold">{qrcode.qrcode[0].title}</h3>
                    </div>
                  </div>
                </div>
              </section>

            ) :
            (
                <div>
                    Please wait .. or something has gone wrong.
                    </div>
            )
        }
    
    </div>
  );
}

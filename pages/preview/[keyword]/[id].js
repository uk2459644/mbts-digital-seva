import React from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import InstituteNav from "../../../components/instituecards/institutenav";

const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/service-request/`;

const fetchPost = async (params) =>
  await axios
    .get(
      `https://pretty-parlour.herokuapp.com/beautiful/service-item/${params.id}/`
    )
    .then((res) => ({
      error: false,
      posts: res.data,
    }))
    .catch(() => ({
      error: true,
      posts: null,
    }));

    
const fetchServiceItem = async (params) =>
await axios
  .get(
    `https://pretty-parlour.herokuapp.com/beautiful/feature/${params.id}/`
  )
  .then((res) => ({
    error: false,
    servicedata: res.data,
  }))
  .catch(() => ({
    error: true,
    servicedata: null,
  }));

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     "https://pretty-parlour.herokuapp.com/beautiful/feature-by/1/"
//   );
//   const posts = await res.json();

//   console.log(res);
//   console.log(posts);

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: {
     
//       id: post.id.toString(),
//       keyword: post.keyword,
//     },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: true };
// }

// This also gets called at build time
export async function getServerSideProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(context.params.id);
  const posts = await fetchPost(context.params);
  const servicedata = await fetchServiceItem(context.params);
  // const post = await res.json()

  // Pass post data to the page via props
  return { props: { posts, servicedata
   
   },
};
}

export default function SeviceItem({ posts,servicedata}) {

  const router = useRouter();

  if (router.isFallback) {
      return <h1>Loading...</h1>
  }

  if (!servicedata) {

      return <h1>No data</h1>;
  }

 
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail]=useState("");


  const [visibility, setVisibility] = useState(false);
  const [submitrequest, setSubmitrequest] = useState(false);

  const [points, setPoints] = useState(servicedata.servicedata)
  console.log(servicedata);

  return (<div>
   <div class="bg-white">
     <InstituteNav />
     {
       submitrequest ? (
         <div>
            <div
          class={
            "fixed z-10 inset-0 overflow-y-auto" +
            (visibility ? "visible" : "invisible")
          }
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

          
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                    Please wait
                    </h3>
                    <div class="mt-2">
                      <p class="text-lg text-gray-500">
                       your request is submitting  ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
               
              </div>
            </div>
          </div>
        </div>

           </div>

       ) : (
         <div>
        <div class="container px-6 py-10 mx-auto md:py-16">
        <div class="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div class="w-full md:w-1/2">
                <div class="max-w-lg">
                    <h1 class="text-2xl font-medium tracking-wide text-pink-500 md:text-4xl">
                        {points[0].title}
                    </h1>
                    <h2 class="text-xl font-sm tracking-wide text-gray-400 md:text-3xl">
                     Rs.  {points[0].price}
                    </h2>
                    <p class="mt-2 text-gray-600">
                     {points[0].description}
                    </p>
                 
                </div>
            </div>
            <div class="flex items-center justify-center w-full md:w-1/2">
                <img src={points[0].image}
                    alt="car photo" class="w-full h-full max-w-2xl rounded" />
            </div>
        </div>
    </div>
    
  <div class="p-4 sm:p-12">
    <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
      <h1 class="text-2xl text-blue-600 font-medium mb-8">Service Request for {`" ${points[0].title} "`}</h1>
      <div id="form" noValidate>
        <div class="relative z-0 w-full mb-5">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={name}
            onChange={(e)=>
  
              setName(e.target.value)
            }
            required
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter name</label>
          <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
        </div>
  
        <div class="relative z-0 w-full mb-5">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
          <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
        </div>
  
        <div class="relative z-0 w-full mb-5">
          <input
            type="tel"
            name="phone"
            placeholder=" "
            value={phone}
            onChange={(e)=>
              setPhone(e.target.value)
            }
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter phone</label>
          <span class="text-sm text-red-600 hidden" id="error">Phone is required</span>
        </div>
  
      
        <button
          id="button"
          type="button"
          class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
          onClick={() => {
            setSubmitrequest(true);
            let date = new Date();
            let post_data = {
              name: name,
              phone: phone,
              message: message,
              email:email,
              date: date.getDate(),
              month: date.getMonth(),
              year: date.getFullYear(),
            };
            axios
              .post(dataurl, post_data)
              .then((response) => {
                if (response.status == 201) {
                  setVisibility(true);
                  setSubmitrequest(false);
                }else if(response.status == 400){
                  setVisibility(false);
                  setSubmitrequest(false);

                }
              })
              .catch((error) => {
                console.log(error);
              });
          }}
      >
          Submit Request 
        </button>
      </div>
    </div>
  </div>
  </div>

       )
     }
      {visibility ? (
        <div
          class={
            "fixed z-10 inset-0 overflow-y-auto" +
            (visibility ? "visible" : "invisible")
          }
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Thank You for Service Request.
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        We will contact you back shortly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {
                    setVisibility(false);
                    router.push('/');
                  }}
                 
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Ok, Fine
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
 
    </div>
     </div>);
}

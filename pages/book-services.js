import React, { useState } from "react";
import axios from "axios";
import InstituteNav from "../components/instituecards/institutenav";
import { useRouter } from 'next/router'

const dataurl = `https://pretty-parlour.herokuapp.com/beautiful/service-request/`;

export default function BookServices() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail]=useState("");
  const router=useRouter();

  const [visibility, setVisibility] = useState(false);
  const [submitrequest, setSubmitrequest] = useState(false);

  return (
    <div>
      <InstituteNav />
      {submitrequest ? (
        <button type="button" class="bg-blue-600 ..." disabled>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
          Please wait .... submitting request.
        </button>
      ) : (
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
          <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
              <div class="my-3 text-4xl font-bold tracking-wider text-center">
                <a href="#">Suman competitive class</a>
              </div>
              <p class="mt-6 font-normal text-center text-gray-300 md:mt-0"></p>
              <p class="flex flex-col items-center justify-center mt-10 text-center">
                <span>Fill below details.</span>
                <a href="#" class="underline">
                  We will contact you back
                </a>
              </p>
              <p class="mt-6 text-sm text-center text-gray-300">
                After confirmation of services, we will give exact details of
                services
              </p>
            </div>
            <div class="p-5 bg-white md:flex-1">
              <h3 class="my-4 text-2xl font-semibold text-gray-700">
               Request
              </h3>
              <div action="#" class="flex flex-col space-y-5">
                <div class="flex flex-col space-y-1">
                  <label
                    for="email"
                    class="text-sm font-semibold text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autofocus
                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="text-sm font-semibold text-gray-500"
                    >
                      Phone
                    </label>
                    <a
                      href="#"
                      class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                    ></a>
                  </div>
                  <input
                    type="text"
                    id="password"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="text-sm font-semibold text-gray-500"
                    >
                     Email
                    </label>
                    <a
                      href="#"
                      class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                    ></a>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div class="flex flex-col space-y-1">
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="text-sm font-semibold text-gray-500"
                    >
                      Message
                    </label>
                    <a
                      href="#"
                      class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                    ></a>
                  </div>
                  <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <button
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
                          }
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                    type="submit"
                    class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Submit Request
                  </button>
                </div>
                <div class="flex flex-col space-y-5">
                  <span class="flex items-center justify-center space-x-2">
                    <span class="h-px bg-gray-400 w-14"></span>

                    <span class="h-px bg-gray-400 w-14"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
  );
}

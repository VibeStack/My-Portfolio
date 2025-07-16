import React from "react";

export default function Contact() {
  return (
    <section className="max-w-screen mx-auto px-10 bg-[#111] text-center py-10">
      <h2 className="text-[24px] sm:text-6xl relative z-10 font-extrabold px-4 py-4 mx-auto inline-block text-center text-[#5a189a] sm:border-b-2 sm:border-[rgb(157,78,221)] border-2 border-[#9d4edd] rounded-md shadow-2xl shadow-[#e0aaff] p-6 font-['Nunito'] transition-all opacity-100 sm:scale-100 sm:hover:scale-110 duration-500 ease-in-out">
        Let's Connect
      </h2>
      <div className="mt-[50px]">
        <form name="contactUS" netlify className="w-19/20 sm:w-3/4 md:w-1/2 inset-0 m-auto">
          <div className="my-9">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2xl font-['Nonito'] font-medium text-left text-gray-900 dark:text-[#e0aaff]"
            >
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-[#364152] dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                className="hover:rounded-md rounded-e-md transition-all duration-300 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-[#5a189a] hover:border-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-gray-400"
                placeholder="Bonnie Green"
                name="name"
              />
            </div>
          </div>
          <div className="my-9">
            <label
              htmlFor="website-email"
              className="block mb-2 text-2xl font-['Nonito'] font-medium text-left text-gray-900 dark:text-[#e0aaff]"
            >
              E-Mail
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-email"
                className="hover:rounded-md rounded-e-md transition-all duration-300 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-[#5a189a] hover:border-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-gray-400"
                placeholder="bonniegreen@gmail.com"
                name="name"
              />
            </div>
          </div>
          <div className="my-9">
            <label
              htmlFor="message"
              className="block mb-2 text-2xl font-['Nonito'] font-medium text-left text-gray-900 dark:text-[#e0aaff]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="8"
              className="hover:rounded-md rounded-md transition-all duration-300 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-[#5a189a] hover:border-white block flex-1 min-w-0 w-full text-sm p-2.5 placeholder-gray-400"
              placeholder="Leave a comment..."
              name="name"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center border-0 border-gray-300 rounded-s-md text-white text-[16px] sm:text-xl font-bold bg-[#7b2cbf] hover:bg-[#7b2cbf] focus:ring-4 focus:ring-[#7b2cbf] rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 512 512"
              className="mr-4 "
            >
              <path
                fill="#fff"
                d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
              />
            </svg>
            <p>Send Message</p>
          </button>
        </form>
      </div>
    </section>
  );
}

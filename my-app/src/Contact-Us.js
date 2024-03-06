import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./Header";

export default function App() {
  return (
    <div>
        <Header/>
      <section className="text-gray-700 body-font relative">
        <div className="flex justify-center flex-col px-5 py-24 mx-auto bg-white">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              ติดต่อสอบถามเพิ่มเติมกเกี่ยวกับสินค้าหรือบริการของเรา.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-black-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-black border-500 border-0 py-2 px-8 focus:outline-none hover:bg-white-600 rounded text-lg">
                  ส่งข้อความ
                </button>
              </div>
              
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <div className="map-container flex justify-center mb-5">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3058900954848!2d100.60019567509151!3d13.820661736578462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d9dd627a413%3A0x9f1c76abedaab774!2sValor%20Strategic%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sth!4v1709700831978!5m2!1sen!2sth"
        width="600"
        height="450"
        style={{ border: '0', }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
                <a className="text-black--500">admin@valorstrategic.com</a><br/>
                <a className="text-black--500">Sale@valorstrategic.com</a>
                <p className="leading-normal my-5">
                  284
                  <br />
                  Satri Witthaya 2 Soi 23,<br/> 
                  Lat Phrao, Bangkok 10230
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

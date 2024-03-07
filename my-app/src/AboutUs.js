import React from 'react'
import Header from './Header'

function AboutUs() {
  return (
    <div>
        <Header/>
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
  <div className="mx-w-7xl mx-auto">
  <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Valor Custom Service
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
      </p>
    </div>
    <div
      className="relative z-20 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      style={{
        backgroundImage:
          "linear-gradient(to left bottom, #f87171, #f55979, #ee4085, #e12896, #cb18a9, #bd12b5, #aa16c1, #921fce, #881ed5, #7d1fdc, #6e21e3, #5c24eb)"
      }}
    >
      
      <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
        <div className="lg:self-center">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
            <span className="block">
              This is a title for your call to action card
            </span>
          </h2>
          <p className="mt-4 text-base leading-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 text-base leading-6 text-dark-blue-800"></p>
          <a
            href="#"
            target="_blank"
            style={{ backgroundColor: "#000" }}
            className="mt-8 border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium  text-white transition duration-150 ease-in-out"
          >
            Get started
          </a>
          <a
            href="#"
            target="_blank"
            className="ml-4 mt-8 text-white font-bold text-sm underline"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="relative pb-3/5 -mt-6 md:pb-1/2">
        <img
          className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-10 lg:translate-y-20"
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxsYXB0b3B8ZW58MHwwfHx8MTY5NzQ0ODQ4M3ww&ixlib=rb-4.0.3&q=80&w=1080"
        />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutUs
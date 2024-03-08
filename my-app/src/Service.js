import React from 'react'
import Header from './Header'

function Service() {
  return (
    <div>
      <Header/>
        <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
  <div className="absolute inset-0">
    <div className="h-1/3 bg-white sm:h-2/3" />
  </div>
  <div className="relative mx-auto max-w-7xl">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Valor Custom Service
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
      </p>
    </div>
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="/Picture/2.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">
                Valor Custom
              </a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                  รับออกแบบเสื้อผ้า
              </p>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium praesentium eius, ut atque fuga culpa,
                similique sequi cum eos quis dolorum.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="/Picture/3.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">
              Valor Custom
              </a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                รับซ่อมแซมเสื้อผ้า
              </p>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis asperiores porro quaerat doloribus, eveniet dolore.
                Adipisci tempora aut inventore optio animi., tempore temporibus
                quo laudantium.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="/Picture/1.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">
              Valor Custom
              </a>
            </p>
            <a href="#" className="mt-2 block">
              <p className="text-xl font-semibold text-gray-900">
                รับพัฒนาผลิตภัณฑ์
              </p>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                harum rerum voluptatem quo recusandae magni placeat saepe
                molestiae, sed excepturi cumque corporis perferendis hic.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Service
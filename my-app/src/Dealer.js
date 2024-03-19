import React from 'react'
import Header from './Header'

function Dealer() {
  return (
        <>
        <Header/>
        <div className="flex justify-center flex-col px-5 py-24 mx-auto bg-white max-w-[1600px]">
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl  text-2xl font-medium title-font mb-4 text-gray-900">
              Dealer
            </h1>
          </div>
  {/* Container */}
  <div className="container mt-8 mx-auto p-4 md:p-0">
    {/* Card wrapper */}
    <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
      {/* Card image */}
      <div
        className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0317/4134/5851/files/banner_botton.png?v=1692619967")'
        }}
      >
        <div className="absolute text-xl">
          <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
        </div>
      </div>
      {/* ./Card image */}
      {/* Card body */}
      <div className="bg-white w-full md:w-2/3">
        {/* Card body - outer wrapper */}
        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
          {/* Card body - inner wrapper */}
          <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
            {/* Card title and subtitle */}
            <div className="w-full lg:w-2/5 lg:border-right lg:border-solid text-center md:text-left">
              <h3>Valor Tactical Store</h3>
              <p className="mb-0 mt-3 text-grey-dark text-sm italic">
              284 Satreewittaya 2, Soi 23, Lat Phrao, Bangkok 10230
              </p>
              <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
            </div>
            {/* ./Card title and subtitle */}
            {/* Card description */}
            <div className="w-full lg:w-3/5 lg:px-3">
              <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
              Valor Tactical เป็นร้านค้าที่นำเสนออุปกรณ์และเครื่องมือทางทหารระดับโลกที่ทันสมัยและได้รับการทดสอบและอนุมัติจากผู้ปฏิบัติการด่วนและพิเศษทั่วโลก ด้วยรายการสินค้ากว่า 2000 รายการต่าง ๆ และประสบการณ์ของผู้เชี่ยวชาญของเรา เราสามารถให้การยืนยันว่าคุณจะได้รับสิ่งที่เหมาะสมกับความต้องการของคุณ
              </p>
            </div>
            {/* ./Card description */}
            {/* Call to action button */}
            <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
              <button className="bg-white hover:bg-grey-darker hover:text-black border border-solid border-grey w-1/3 lg:w-full py-2"
              onClick={() => window.location.href = "https://www.google.com/maps/place/Valor+Tactical+Store+Bangkok/@13.8206637,100.6001909,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29dc343852e65:0x7d2deabd1d65b484!8m2!3d13.8206637!4d100.6027658!16s%2Fg%2F11j64y48sb?entry=ttu"}>
                Map
              </button>
            </div>
            {/* ./Call to action button */}
          </div>
          {/* ./Card body - inner wrapper */}
        </div>
        {/* ./Card body - outer wrapper */}
      </div>
      {/* ./Card body */}
    </div>
    {/* ./Card wrapper */}
  </div>
  {/* ./Container */}

  {/* Container */}
  <div className="container mt-32 mx-auto p-4 md:p-0">
    {/* Card wrapper */}
    <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
      {/* Card image */}
      <div
        className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0317/4134/5851/files/Footer.png?v=1693210215")'
        }}
      >
        <div className="absolute text-xl">
          <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer" />
        </div>
      </div>
      {/* ./Card image */}
      {/* Card body */}
      <div className="bg-white w-full md:w-2/3">
        {/* Card body - outer wrapper */}
        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
          {/* Card body - inner wrapper */}
          <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
            {/* Card title and subtitle */}
            <div className="w-full lg:w-2/5 lg:border-right lg:border-solid text-center md:text-left">
              <h3>SWCOM STORE by valor tactical</h3>
              <p className="mb-0 mt-3 text-grey-dark text-sm italic">
            Thale Chup Son, Mueang Lop Buri District, Lopburi 15000
              </p>
              <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
            </div>
            {/* ./Card title and subtitle */}
            {/* Card description */}
            <div className="w-full lg:w-3/5 lg:px-3">
              <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
              Valor Tactical เป็นร้านค้าที่นำเสนออุปกรณ์และเครื่องมือทางทหารระดับโลกที่ทันสมัยและได้รับการทดสอบและอนุมัติจากผู้ปฏิบัติการด่วนและพิเศษทั่วโลก ด้วยรายการสินค้ากว่า 2000 รายการต่าง ๆ และประสบการณ์ของผู้เชี่ยวชาญของเรา เราสามารถให้การยืนยันว่าคุณจะได้รับสิ่งที่เหมาะสมกับความต้องการของคุณ
              </p>
            </div>
            {/* ./Card description */}
            {/* Call to action button */}
            <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
              <button className="bg-white hover:bg-grey-darker hover:text-black border border-solid border-grey w-1/3 lg:w-full py-2"
              onClick={() => window.location.href = "https://www.google.com/maps/place/SWCOM+STORE+by+valor+tactical/@14.8016952,100.6181361,17z/data=!3m1!4b1!4m6!3m5!1s0x311e01d930ffa68d:0xa485893a2095534f!8m2!3d14.80169!4d100.620711!16s%2Fg%2F11s7w9p55n?entry=ttu"}>
                Map
              </button>
            </div>
            {/* ./Call to action button */}
          </div>
          {/* ./Card body - inner wrapper */}
        </div>
        {/* ./Card body - outer wrapper */}
      </div>
      {/* ./Card body */}
    </div>
    {/* ./Card wrapper */}
  </div>
  {/* ./Container */}
  </div>
</>
  )
}

export default Dealer
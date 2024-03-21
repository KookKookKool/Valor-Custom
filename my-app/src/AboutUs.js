import React from 'react'
import Header from './Header'

function AboutUs() {
  return (
    <div>
        <Header/>
        <div className="flex justify-center flex-col px-5 py-24 mx-auto bg-white max-w-[1600px]">
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl  text-2xl font-medium title-font mb-4 text-gray-900">
              About Us
            </h1>
          </div>
        <div className="relative  px-6 pt-4 pb-20 lg:px-8 lg:pt-4 lg:pb-28">
        <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    <div className="max-w-lg">
      <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
        Valor Custom
      </h2>
      <p className="mt-4 text-black text-xl">
      จากผลตอบรับของลูกค้า ควบคู่กับประสบการณ์ที่คลุกคลีอยู่กับสินค้าทางยุทธวิธีระดับ High-End ของ ทีมงาน Valor Tactical ตลอดมาทำให้เรามีโครงการริเริ่มที่จะพัฒนาสินค้า ที่ยังคงไว้ซึ่งคุณภาพ และ Feature การใช้งานเทียบเท่ากับสินค้า ชั้นนำระดับโลก ในราคาที่เข้าถึงได้ง่ายต่อทุกคน
รวมไปถึงการให้บริการในด้านการออกแบบสินค้า และบริการสั่งผลิต หรือรับผลิตสินค้าตามความต้องการของผู้ใช้, หน่วยงาน, บริษัทที่สนใจไปจนถึง Influencer หรือผู้ที่มีแนวคิดริเริ่มอยากพัฒนาสินค้าของตนเอง สามารถ เข้ามาใช้บริการทั้งใน การออกแบบ ผลิต จนเกิดสินค้าที่ตรงกับความต้องการของคุณได้ทันที
      </p>
      <div className="mt-8">
        <a href="/main" className="text-blue-500 hover:text-black font-medium">
          Start to Custon Design
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
    <div className="mt-12 md:mt-0">
      <img
        src="/Picture/Print.png"
        alt="About Us Image"
        className="object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</div>

        </div>

    </div>
    </div>
  )
}

export default AboutUs
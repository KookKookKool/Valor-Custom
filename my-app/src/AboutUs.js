import React from 'react'
import Header from './Header'

function AboutUs() {
  return (
    <div>
        <Header/>
        <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        About Us
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
      </p>
    </div>
        <div className="relative  px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhyKinetic() {
  return (
    <>
      {/* 첫 번째 섹션 - 글로벌 브랜드가 왜? (기존 코드 유지) */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top,rgb(12, 12, 12) 100%, #000000 0%)' }}
        />
         <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[343px] text-center z-10">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-[var(--font-cafe24)] text-[14px] leading-relaxed text-white ">
          "그리고 국내뿐만 아니라 현재 해외 다양한분야에서도<br />
            <span className="text-[#ff6262] text-[17px]">'키네틱아트'</span>로 활용하고 있습니다."
          </p>
                  
        <div className="absolute top-[130px] left-1/2 -translate-x-1/2 text-white text-[81px] font-medium leading-none">.</div>
        <div className="absolute top-[210px] left-1/2 -translate-x-1/2 text-white text-[46px] font-medium leading-none">.</div>
        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 text-white text-[30px] font-medium leading-none">.</div>
        
        </motion.div>
        </div>
      </section>
      
      
    </>
  )
}
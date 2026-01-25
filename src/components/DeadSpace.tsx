'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DeadSpace() {
  // 공통 애니메이션 설정 (viewport once를 false로 변경)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" }, // 화면에 보일 때마다 반복
    transition: { duration: 0.8, ease: "easeOut" }
  }

  return (
    <>
      {/* 첫 번째 섹션 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #000000 78.846%, #656565 100%)' }}
        />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div className="text-center mb-8" {...fadeInUp}>
            <p className="font-serif text-[18px] text-white italic">
              "A stagnant space is a <span className="text-[#ff6262] not-italic font-bold">dead</span> space."
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <p className="font-[var(--font-cafe24)] text-[13px] text-white leading-relaxed">
              "멈춰있는 공간은 <span className="text-[#ff6262]">죽은</span> 공간입니다."
            </p>
          </motion.div>
          
          {/* 중앙 이미지: 나갈 때도 위로 스르륵 사라짐 */}
          <motion.div 
            className="w-full h-[200px] relative mt-20"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: false }} // 무한 반복
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/images/dead-space.png"
              alt="정적인 공간"
              fill
              className="object-contain"
              sizes="(max-width: 390px) 100vw, 390px"
            />
          </motion.div>
        </div>
      </section>
      
      {/* 두 번째 섹션 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #656565 25.481%, #000000 67.788%)' }}
        />
        
        {/* 첫 번째 경험 이미지: 나갈 때 다시 왼쪽으로 숨음 */}
        <motion.div 
          className="absolute top-[104px] left-1/2 -translate-x-1/2 w-full max-w-[427px] h-[159px]"
          initial={{ opacity: 0, x: -100 }} // 좀 더 멀리서 들어오게 수정
          whileInView={{ opacity: 0.9, x: "-50%" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/experience-1.png"
            alt="경험 이미지 1"
            fill
            className="object-cover rounded-lg"
            sizes="427px"
          />
        </motion.div>
        
        {/* 두 번째 경험 이미지: 나갈 때 다시 오른쪽으로 숨음 */}
        <motion.div 
          className="absolute top-[344px] left-1/2 -translate-x-1/2 w-full max-w-[412px] h-[157px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.8, x: "-50%" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/experience-2.png"
            alt="경험 이미지 2"
            fill
            className="object-cover rounded-lg"
            sizes="412px"
          />
        </motion.div>
        
        <motion.div 
          className="relative z-10 h-full flex items-end justify-center pb-40 px-6"
          {...fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-[var(--font-cafe24)] text-[17px] text-white text-center leading-relaxed">
            방문자에게 단순 인테리어가 아닌
            <br />
            <span className="text-[#ff6262] text-[20px] font-bold">"경험"</span>을 판매합니다.
          </p>
        </motion.div>
      </section>
    </>
  )
}
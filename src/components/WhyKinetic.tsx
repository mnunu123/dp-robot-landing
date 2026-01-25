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
          style={{ background: 'linear-gradient(to top, #666666 0%, #000000 100%)' }}
        />
        
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[343px] text-center z-10">
          <p className="font-[var(--font-cafe24)] text-[15px] text-white">
            "글로벌 리딩브랜드가 <span className="text-[#ff6262] text-[17px]">'움직이는 조형물'</span>에 집착할까요?"
          </p>
        </div>
        
        <div className="absolute top-[130px] left-1/2 -translate-x-1/2 text-white text-[81px] font-medium leading-none">.</div>
        <div className="absolute top-[210px] left-1/2 -translate-x-1/2 text-white text-[46px] font-medium leading-none">.</div>
        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 text-white text-[30px] font-medium leading-none">.</div>
        
        <motion.div 
          className="absolute top-[250px] left-[-55px] -translate-x-1/2 w-[500px] h-[500px] z-20"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0.8, 1.05, 0.8]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/Shape-9-t 2.png" 
            alt="동적 조형물 오브제"
            fill
            className="object-contain"
            sizes="500px"
          />
        </motion.div>
        
        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[343px] text-center z-10">
          <p className="font-[var(--font-cafe24)] text-[15px] text-white leading-relaxed">
            동적인 조형물 설치 후 고객 체류 시간 <span className="text-[#ff6262] text-[16px] font-bold">3배</span> 증가
          </p>
          <p className="font-[var(--font-cafe24)] text-[15px] text-white mt-2">
            SNS 자발적 공유 증가
          </p>
        </div>
      </section>
      
      {/* 두 번째 섹션 - 연구 결과 및 통계 차트 이미지 추가 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #666666 0%, #000000 100%)' }}
        />
        
        {/* 중앙 통계 차트 이미지 - 텍스트 위쪽에 배치 */}
        <motion.div 
          className="absolute top-[60px] left-5 -translate-x-1/2 w-[350px] h-[220px] z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/Code_Generated_Image.png" // 이미지 파일명 확인
            alt="키네틱 아트 설치 전후 비교 차트"
            fill
            className="object-contain rounded-xl"
            sizes="350px"
          />
        </motion.div>

        {/* 하단 텍스트 영역 */}
        <motion.div 
          className="absolute bottom-[400px] left-9 -translate-x-1/2 w-[313px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }} // 이미지보다 살짝 늦게 등장
        >
          <p className="font-[var(--font-cafe24)] text-[13px] text-white leading-relaxed">
            "2023년 해외 리테일 <span className="text-[#eb2fde] font-bold">저명 저널 연구</span>에 따르면,
            동적인 오브제를 활용한 매장 디자인은 고객 경험과 브랜드 경험을 동시에 최적화하는 핵심 요소로 확인되었습니다."
          </p>
        </motion.div>
      </section>
    </>
  )
}
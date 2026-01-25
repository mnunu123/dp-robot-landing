'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function KineticTrend() {
  return (
    <>
      {/* 첫 번째 섹션 - 키네틱 트렌드 검색 데이터 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.98) 53%, rgba(102,102,102,0.98) 100%)' }}
        />
        
        {/* 상단 차트 이미지 */}
        <motion.div 
          className="absolute top-[96px] left-[16px] w-[151px] h-[122px] z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/kinetic-chart.png"
            alt="키네틱 조형물 검색 트렌드 차트"
            fill
            className="object-contain"
            sizes="151px"
          />
        </motion.div>

        {/* 중앙 상단 텍스트 */}
        <motion.div 
          className="absolute top-[260px] left-1/2 -translate-x-1/2 w-[343px] text-center z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
            현재 "해외 검색 데이터에서도 <span className="text-[#eb2fde]">'kinetic sculpture'</span> 같은 키워드는

            <span className="text-[20px]">2025년 말에 눈에 띄게 튀어 오르고,</span>"
          </p>
        </motion.div>

        {/* 3D 오브제 이미지 */}
        <motion.div 
          className="absolute top-[350px] right-[-30px] w-[180px] h-[180px] z-10"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/kinetic-object.png"
            alt="키네틱 오브제"
            fill
            className="object-contain"
            sizes="180px"
          />
        </motion.div>

        {/* 중앙 하단 텍스트 */}
        <motion.div 
          className="absolute top-[520px] left-1/2 -translate-x-1/2 w-[343px] text-center z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="mb-8 font-cafe24 text-[16px] leading-relaxed text-white">
            리테일공간에서 키네틱 설치물이 브랜드 경험을 책임지는

            <span className="text-[#eb2fde] text-[20px]">사례가 계속 늘고 있습니다.</span>"
          </p>
        </motion.div>

        {/* 하단 뉴스 헤드라인 */}
        <motion.div 
          className="absolute bottom-[80px] left-[55px] -translate-x-1/2 w-[283px] h-[23px] z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/images/daelim-news.png"
            alt="대림창고 오픈 6일 만에 거래액 6억 돌파"
            fill
            className="object-contain"
            sizes="600px"
          />
        </motion.div>
      </section>

      {/* 두 번째 섹션 - 대형 카페 인테리어 사례 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #636363 4%, #252525 37%, #000000 67%)' }}
        />
        
        {/* 상단 텍스트 */}
        <motion.div 
          className="absolute top-[45px] left-[27px] -translate-x-1/2 w-[342px] text-center z-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
            키네틱 아트는 성수동 대림창고나 천안 모나무르 카페처럼
            <br />
            <span className="text-[#eb2fde] text-[20px]">대형 카페 인테리어</span>
            
            <span className="text-[14px]">로 활용되어 화제가 되기도 했습니다.</span>
          </p>
        </motion.div>

        {/* 대림창고 이미지 */}
        <motion.div 
          className="absolute top-[149px] left-[15px] -translate-x-1/2 w-[358px] h-[303px] z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/daelim-interior.png"
            alt="성수동 대림창고 키네틱 아트 인테리어"
            fill
            className="object-cover"
            sizes="358px"
          />
        </motion.div>

        {/* 모나무르 카페 이미지 */}
        <motion.div 
          className="absolute top-[500px] left-[15px] -translate-x-1/2 w-[358px] h-[235px] z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/images/monamur-cafe.png"
            alt="천안 모나무르 카페 키네틱 아트"
            fill
            className="object-cover"
            sizes="358px"
          />
        </motion.div>
      </section>

      {/* 세 번째 섹션 - 연구 논문 인용 */}
      <section className="section-mobile min-h-screen relative overflow-hidden bg-black">
        {/* 연구 논문 이미지 */}
        <motion.div 
          className="absolute top-[58px] left-[25px] -translate-x-1/2 w-[340px] h-[444px] z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/research-paper.png"
            alt="리테일 디자인 인터랙티브 기술 연구 논문"
            fill
            className="object-cover rounded-[34px]"
            sizes="340px"
          />
        </motion.div>

        {/* 하단 텍스트 */}
        <motion.div 
          className="absolute top-[550px] left-[25px] -translate-x-1/2 w-[343px] text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-8 font-cafe24 text-[16px] leading-relaxed text-white">
            다시 말해 움직이고 상호작용하는 오브제가 있을 때,
            <br/>
            매장 이미지는 더 강하게 각인되고 구매의도 역시 
            <br/>
            통계적으로 <span className="text-[#eb2fde]">유의미하게 상승합니다.</span>"
          </p>
        </motion.div>

        {/* 점 애니메이션 */}
        <motion.div 
          className="absolute top-[680px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white text-[39px] font-medium leading-none">.</span>
          <span className="text-white text-[23px] font-medium leading-none">.</span>
          <span className="text-white text-[18px] font-medium leading-none">.</span>
          <span className="text-white text-[13px] leading-none">.</span>
          <span className="text-white text-[13px] leading-none">.</span>
        </motion.div>
      </section>
    </>
  )
}

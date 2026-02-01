  'use client'

  import Image from 'next/image'
  import { motion } from 'framer-motion'




  export default function KineticTrend() {
    // SVG 화살표 경로 애니메이션 설정
    const arrowPathVariants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: { 
        pathLength: 1, 
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut", delay: 0.5 }
      }
    }
    return (
      <>
      {/* 두 번째 섹션 - 연구 결과 및 통계 차트 이미지 추가 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{  background: 'linear-gradient(to top, rgba(59, 26, 26, 0.98) 0%, rgba(0,0,0,0.98) 100%)' }}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* 하단 텍스트 영역 */}
        <motion.div 
            className="absolute bottom-[500px] left-0.8 -translate-x-1/2 w-[390px] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }} // 이미지보다 살짝 늦게 등장
          >
            <p className="font-serif text-[14px] text-white font-normal text-center mt-20">
              "2023년 해외 리테일 <span className="text-[#eb2fde] font-cafe24 text-center">저명 저널 연구</span>에 따르면, <br />
              키네틱아트를 활용한 매장 디자인은 고객 경험과 브랜드 경험을<br /> 동시에 최적화하는 핵심 요소로 발표되었습니다."
            </p>
          </motion.div>

          <motion.div 
            className="absolute bottom-[200px] left-0.8 -translate-x-1/2 w-[390px] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }} // 이미지보다 살짝 늦게 등장
          >
            <p className="font-serif text-[14px] text-white font-normal text-center mt-20">
              "2023년 해외 리테일 <span className="text-[#eb2fde] font-cafe24 text-center">저명 저널 연구</span>에 따르면, <br />
              키네틱아트를 활용한 매장 디자인은 고객 경험과 브랜드 경험을<br /> 동시에 최적화하는 핵심 요소로 발표되었습니다."
            </p>
          </motion.div>
      
        </section>
        {/* 첫 번째 섹션 - 키네틱 트렌드 검색 데이터 */}
        <section className="section-mobile min-h-screen relative overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(59, 26, 26, 0.98) 0%, rgba(0,0,0,0.98) 100%)' }}
          />
  <div className="absolute inset-0 bg-black/30" />

  <motion.div 
            className="absolute top-[0px] left-0 -translate-x-1/2 w-[390px] h-[220px] z-10"
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
            {/* 화살표 및 텍스트 레이어 (SVG 기반) */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 350 220">
            {/* 1번째 화살표 (Customer Dwell Time) */}
            <motion.path
              d="M 50 170 Q 70 110 110 115" // 곡선 경로 (회색 막대 -> 파란 막대)
              fill="transparent"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              variants={arrowPathVariants}
              initial="hidden"
              whileInView="visible"
            />
            {/* 화살표 촉 */}
            <motion.path
              d="M 102 110 L 110 115 L 102 120"
              fill="transparent"
              stroke="#000000"
              strokeWidth="3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />

            {/* 2번째 화살표 (SNS Shares) */}
            <motion.path
              d="M 215 170 Q 235 50 270 55" // 곡선 경로
              fill="transparent"
              stroke="#000000"
              strokeWidth="3"
              strokeLinecap="round"
              variants={arrowPathVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ ...arrowPathVariants.visible.transition, delay: 0.8 }}
            />
            {/* 화살표 촉 */}
            <motion.path
              d="M 262 50 L 270 55 L 262 60"
              fill="transparent"
              stroke="#000000"
              strokeWidth="3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            />
          </svg>

          {/* 3배 상승 문구 */}
          <motion.div
            className="absolute top-[30%] left-[20%] -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: "spring" }}
          >
            <span className="text-[#ff0000] text-[20px] font-bold drop-shadow-md">3배 상승</span>
          </motion.div>

          {/* 5배 상승 문구 */}
          <motion.div
            className="absolute top-[8%] left-[65%] -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, type: "spring" }}
          >
            <span className="text-[#ff0000] text-[22px] font-bold drop-shadow-md">5배 상승</span>
          </motion.div>
        </motion.div>


          {/* 중앙 상단 텍스트 */}
          <motion.div 
            className="absolute top-[250px] left-[193px] -translate-x-1/2 w-[390px] text-center z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-8 font-cafe24 text-[15px] leading-relaxed text-white text-center">
            <span className="text-[17px] font-cafe24">위 지표 결과,</span><br /><br />동일한 공간에 키네틱아트를 활용한 공간은<br />정적인 오브제만 있는 공간과는 달리 <br />
              고객체류시간이 3배 증가하고 SNS공유 횟수가 5배정도 증가합니다.
            </p>
          </motion.div>

  {/* 3D 오브제 이미지 */}
  <motion.div 
            className="absolute top-[440px] right-[-30px] w-[180px] h-[180px] z-10"
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
            </motion.div>
          {/* 점 애니메이션 - 순차적으로 나타남 */}
        <div className="absolute top-[400px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <motion.span 
            className="text-white text-[62px] font-bold leading-[20px] tracking-[1.86px]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            animate={{ 
              y: [0, -3, 0]
            }}
            style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
          >
            .
          </motion.span>
          
          <motion.span 
            className="text-white text-[38px] font-bold tracking-[0.76px] mt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            .
          </motion.span>
          
          <motion.span 
            className="text-white text-[23px] font-bold tracking-[0.46px] mt-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            .
          </motion.span>
          </div>

        
        </section>

        

      </>
    )
  }

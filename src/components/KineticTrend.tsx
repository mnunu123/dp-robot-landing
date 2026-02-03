'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function KineticTrend() {
  // 곡선: 얇은 꼬리 → 두꺼운 머리 (참고 이미지 스타일)
  const curveThinVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
  }
  const curveThickVariants = {
    hidden: { pathLength: 0.7, opacity: 0 },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
    }),
  }
  const headVariants = {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: { duration: 0.2, delay },
    }),
  }

  return (
    <>
      {/* 두 번째 섹션 - 연구 결과 및 통계 차트 이미지 추가 */}
      <section className="section-mobile min-h-screen relative overflow-hidden px-4 box-border">
          <div 
            className="absolute inset-0"
            style={{  background: 'linear-gradient(to top, rgba(59, 26, 26, 0.98) 0%, rgba(0,0,0,0.98) 100%)' }}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* 상단 텍스트: left/right 0 + padding으로 화면 안에만 */}
          <motion.div
            className="absolute top-[12%] left-0 right-0 px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-serif text-[17px] text-white font-normal text-readable mx-auto leading-[1.7]">
              "왜 글로벌 리테일 시장은 다시 <br />'움직이는 오브제'에 열광할까요?"<br /><br /><br /><br /><br /><br />"그 해답은 이미 증명되었습니다."
            </p>
          </motion.div>

          <motion.div
            className="absolute top-[80%] left-0 right-0 px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-serif text-[17px] text-white font-normal text-readable mx-auto leading-[1.7]">
              "2023년 해외 리테일 <span className="text-[#eb2fde] font-cafe24">저명 저널 연구</span>에 따르면,<br />
              키네틱아트를 활용한 매장 디자인은 <br />고객 경험과 브랜드 경험을 동시에 최적화하는<br />핵심 요소로 발표되었습니다."
            </p>
          </motion.div>
      </section>

      {/* 첫 번째 섹션 - 키네틱 트렌드 검색 데이터 */}
      <section className="section-mobile min-h-screen relative overflow-hidden px-4 box-border">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(59, 26, 26, 0.98) 0%, rgba(0,0,0,0.98) 100%)' }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* 차트 이미지 + 화살표: w-full + max-w로 화면 밖으로 안 나가게 */}
        <motion.div
          className="relative w-full max-w-[342px] mx-auto mt-5 z-10"
          style={{ aspectRatio: '350/220' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/Code_Generated_Image.png"
            alt="키네틱 아트 설치 전후 비교 차트"
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 390px) 100vw, 342px"
          />

          {/* 참고 이미지 스타일: 얇은 꼬리 → 머리로 갈수록 두꺼운 곡선 + 삼각 화살촉 */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 350 220"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* 1번째 화살표 (Customer Dwell Time) */}
<motion.path
  d="M 65 175 C 70 150, 85 130, 135 118 L 130 110 L 148 118 L 130 126 L 135 118 C 95 125, 80 145, 75 175 Z" 
  fill="#e63939"
  variants={{
    hidden: { opacity: 0, scale: 0.8, originX: 0 , originY: 1 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, delay: 0.5, ease: "easeOut" } 
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
/>

{/* 2번째 화살표 (SNS Shares) */}
<motion.path
  d="M 225 175 C 235 110, 260 70, 310 58 L 305 50 L 323 58 L 305 66 L 310 58 C 270 65, 245 100, 235 175 Z" 
  fill="#e63939"
  variants={{
    hidden: { opacity: 0, scale: 0.8, originX: 0, originY: 1 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, delay: 1.0, ease: "easeOut" } 
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
/>
          </svg>

          <motion.div
            className="absolute top-[30%] left-[10%] -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <span className="text-[#000000] text-[30px] font-bold drop-shadow-md whitespace-nowrap">3배 상승 ↑</span>
          </motion.div>

          <motion.div
            className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, type: 'spring', stiffness: 200 }}
            viewport={{ once: false }}
          >
            <span className="text-[#000000] text-[30px] font-bold drop-shadow-md whitespace-nowrap">5배 상승 ↑</span>
          </motion.div>
        </motion.div>

        {/* 설명 텍스트: left/right 0 + px로 오버플로우 방지 */}
        <motion.div
          className="absolute top-[300px] left-0 right-0 px-4 text-center z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <p className="font-cafe24 text-[17px] leading-[1.7] text-white  mx-auto">
            <span className="text-[19px] font-cafe24 font-bold text-[#e63939]">위 지표 결과,</span><br />
            동일한 공간에 키네틱아트를 활용한 공간은 <br />정적인 오브제만 있는 공간과는 달리<br /><br />
            고객 체류시간이 <span className="text-[#e63939] font-bold">3배 증가</span>하고 <br />SNS 공유 횟수가 <span className="text-[#e63939] font-bold">5배 정도 증가</span>합니다.
          </p>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <motion.span className="text-white text-[56px] font-bold leading-none animate-bounce">.</motion.span>
          <motion.span className="text-white text-[36px] font-bold mt-3" transition={{ delay: 0.5 }}>.</motion.span>
          <motion.span className="text-white text-[22px] font-bold mt-1.5" transition={{ delay: 0.7 }}>.</motion.span>
        </div>
      </section>
    </>
  )
}
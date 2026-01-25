'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

interface BrandCardProps {
  name: string
  href: string
}

function BrandCard({ name, href }: BrandCardProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // w-fit과 mx-auto로 실제 버튼 크기를 중앙에 딱 맞춤
      className="flex items-center justify-center h-[49px] border border-gray-400 rounded-full px-10 transition-all duration-300 hover:bg-white/10 w-fit mx-auto bg-black/20 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <span className="text-white text-[15px] font-inter underline underline-offset-4">
          {name}
        </span>
        <svg 
          className="w-4 h-4 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </a>
  )
}

export default function BrandShowcase() {
  const fadeInProps: HTMLMotionProps<"div"> = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false, margin: "-50px" },
    transition: { duration: 1.2, ease: "easeInOut" }
  }

  return (
    <section className="section-mobile min-h-screen relative overflow-hidden bg-black">
      {/* 배경 - 라디얼 그라디언트 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, #4d4d4d 0%, #000000 100%)',
          opacity: 0.6
        }}
      />
      
      {/* 1. 젠틀몬스터 섹션 */}
      <div className="absolute top-[76px] left-0 w-full h-[245px] z-10 overflow-hidden">
        <div className="relative w-full h-full opacity-80">
          <Image
            src="/images/gentle-monster.png"
            alt="젠틀몬스터 매장"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      {/* 젠틀몬스터 링크 */}
      <div className="absolute top-[247px] left-0 w-full z-20">
        <BrandCard name="GENTLE MONSTER" href="https://www.gentlemonster.com" />
      </div>
      
      {/* 2. 아더에러 섹션 - 390px 꽉 차게 수정 */}
      <div className="absolute top-[428px] left-0 w-full flex justify-center z-10">
        <div className="relative w-[390px] h-[244px] opacity-90">
          <Image
            src="/images/ader-error.png"
            alt="아더에러 매장"
            fill
            className="object-cover"
            sizes="390px"
          />
        </div>
      </div>
      
      {/* 아더에러 링크 */}
      <div className="absolute top-[606px] left-0 w-full z-20">
        <BrandCard name="ADERERROR" href="https://www.adererror.com" />
      </div>
      
      {/* 3. 하단 "그럼 왜?" 텍스트 */}
      <motion.div 
        className="absolute bottom-[70px] left-0 w-full text-center z-30"
        {...fadeInProps}
      >
        <p className="mb-5 font-cafe24 text-[18px] leading-relaxed text-whiter">
          그렇다면 왜?
        </p>
      </motion.div>
    </section>
  )
}
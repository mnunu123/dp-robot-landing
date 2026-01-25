'use client'

import Image from 'next/image'

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
      className="flex items-center justify-center h-[49px] border border-gray-400 rounded-full px-8 transition-all duration-300 hover:bg-white/10"
    >
      <span className="text-white text-[15px] font-inter underline underline-offset-4">
        {name}
      </span>
      <svg 
        className="ml-3 w-5 h-5 text-white" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </a>
  )
}

export default function BrandShowcase() {
  return (
    <section className="section-mobile min-h-screen relative">
      {/* 배경 - 라디얼 그라디언트 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #666666 0%, #4d4d4d 25%, #333333 50%, #1a1a1a 75%, #000000 100%)'
        }}
      />
      
      {/* 상단 이미지 - 젠틀몬스터 */}
      <div className="absolute top-[76px] left-[-37px] w-[464px] h-[245px] opacity-60">
        <Image
          src="/images/gentle-monster.png"
          alt="젠틀몬스터 매장"
          fill
          className="object-cover shadow-lg"
          sizes="464px"
        />
      </div>
      
      {/* 젠틀몬스터 링크 */}
      <div className="absolute top-[247px] left-1/2 -translate-x-1/2 w-[364px]">
        <BrandCard name="GENTLE MONSTER" href="https://www.gentlemonster.com" />
      </div>
      
      {/* 중간 이미지 - 아더에러 */}
      <div className="absolute top-[428px] left-1/2 -translate-x-1/2 w-[390px] h-[244px] opacity-30">
        <Image
          src="/images/ader-error.png"
          alt="아더에러 매장"
          fill
          className="object-cover"
          sizes="390px"
        />
      </div>
      
      {/* 아더에러 링크 */}
      <div className="absolute top-[606px] left-1/2 -translate-x-1/2 w-[364px]">
        <BrandCard name="ADERERROR" href="https://www.adererror.com" />
      </div>
      
      {/* 하단 텍스트 */}
      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 text-center">
        <p className="font-[var(--font-cafe24)] text-[20px] text-white">
          그럼 왜?
        </p>
      </div>
    </section>
  )
}

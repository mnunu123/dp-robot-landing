'use client'

import Image from 'next/image'

export default function CustomMade() {
  return (
    <>
      {/* 맞춤 제작 타이틀 */}
      <section className="w-full max-w-[416px] mx-auto py-8 bg-black">
        <div className="text-center">
          <p className="font-[var(--font-cafe24)] text-[17px] text-white leading-relaxed">
            "귀하의 비즈니스 환경에 최적화하여 맞춤 제작합니다."
          </p>
        </div>
      </section>
      
      {/* 맞춤 제작 상세 */}
      <section className="section-mobile min-h-screen relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #060606 24.519%, #c9c9c9 67.308%, #636363 100%)'
          }}
        />
        
        {/* 왼쪽 장식 원 */}
        <div className="absolute top-[251px] left-[-173px] w-[347px] h-[343px]">
          <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-[#eb2fde]/30 to-transparent blur-3xl" />
        </div>
        
        {/* 상단 텍스트 */}
        <div className="absolute top-[73px] left-1/2 -translate-x-1/2 w-[370px] text-center z-10">
          <p className="font-[var(--font-cafe24)] text-[13px] text-white leading-relaxed">
            "해외 사례 속 그 독보적인 움직임, 그대로 가져오고 싶으셨나요?
          </p>
          <p className="font-[var(--font-cafe24)] text-[13px] text-white leading-relaxed">
            상상하시던 디자인과 기능을 그대로"
          </p>
        </div>
        
        {/* 제품 이미지 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <Image
            src="/images/custom-product.png"
            alt="맞춤 제작 제품"
            fill
            className="object-contain"
            sizes="300px"
          />
        </div>
      </section>
    </>
  )
}

'use client'

import Image from 'next/image'

export default function DeadSpace() {
  return (
    <>
      {/* 첫 번째 섹션 - "멈춰있는 공간은 죽은 공간입니다" */}
      <section className="section-mobile min-h-screen relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #000000 78.846%, #656565 100%)'
          }}
        />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          {/* 영문 텍스트 */}
          <div className="text-center mb-8">
            <p className="font-serif text-[18px] text-white italic">
              "A stagnant space is a <span className="text-[#ff6262] not-italic">dead</span> space."
            </p>
          </div>
          
          {/* 한글 텍스트 */}
          <div className="text-center mb-16">
            <p className="font-[var(--font-cafe24)] text-[13px] text-white leading-relaxed">
              "멈춰있는 공간은 <span className="text-[#ff6262]">죽은</span> 공간입니다."
            </p>
          </div>
          
          {/* 이미지 */}
          <div className="w-full h-[200px] relative mt-20">
            <Image
              src="/images/dead-space.png"
              alt="정적인 공간"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 390px) 100vw, 390px"
            />
          </div>
        </div>
      </section>
      
      {/* 두 번째 섹션 - "경험을 판매합니다" */}
      <section className="section-mobile min-h-screen relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #656565 25.481%, #000000 67.788%)'
          }}
        />
        
        {/* 이미지들 */}
        <div className="absolute top-[104px] left-1/2 -translate-x-1/2 w-full max-w-[427px] h-[159px] opacity-90">
          <Image
            src="/images/experience-1.png"
            alt="경험 이미지 1"
            fill
            className="object-cover"
            sizes="427px"
          />
        </div>
        
        <div className="absolute top-[344px] left-1/2 -translate-x-1/2 w-full max-w-[412px] h-[157px] opacity-80">
          <Image
            src="/images/experience-2.png"
            alt="경험 이미지 2"
            fill
            className="object-cover"
            sizes="412px"
          />
        </div>
        
        {/* 텍스트 */}
        <div className="relative z-10 h-full flex items-end justify-center pb-40 px-6">
          <p className="font-[var(--font-cafe24)] text-[17px] text-white text-center leading-relaxed">
            방문자에게 단순 인테리어가 아닌
            <br />
            <span className="text-[#ff6262]">"경험"</span>을 판매합니다.
          </p>
        </div>
      </section>
    </>
  )
}

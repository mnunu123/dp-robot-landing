'use client'

import Image from 'next/image'

export default function BrandIntro() {
  return (
    <section className="section-mobile min-h-screen relative">
      {/* 배경 그라디언트 - 브라운에서 블랙 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #533820 8.654%, #000000 100%)'
        }}
      />
      {/* 어둠 필터 */}
      <div className="absolute inset-0 bg-black/30" />
      {/* 점 패턴 오버레이 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
{/* 우측 상단 키네틱 아트 이미지 */}
<div
  // [수정] opacity-80을 제거하고 animate-fade-in-out을 추가했습니다.
  // 애니메이션 자체가 0.8(80%) 투명도에서 시작하도록 설정했으므로 자연스럽게 이어집니다.
  className="absolute w-[210px] h-[400px] animate-fade-in-out"
  style={{ top: '-78px', right: '0px' }} // 위치는 그대로 유지합니다.
>
  <Image
    src="/images/hero-main.png"
    alt="DP로봇 키네틱 아트"
    fill
    className="object-right object-contain" // 기존 정렬 유지
    sizes="210px"
  />
</div>
      
      <div className="relative z-10 h-full flex flex-col justify-center px-6 py-20">
        {/* 첫 번째 텍스트 */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
                    "젠틀몬스터와 아더에러를 들어온벅 있거나,
                    <br />
                    경험해 본적 있으신가요?"
        </p>
      </div>
        
        {/* 두 번째 텍스트 */}
        <div className="text-center mt-40 mb-16">
          <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
            그렇다면 그들의 공통점은 무엇일까요?
          </p>
        </div>
        
        {/* 세 번째 텍스트 - 강조 */}
        <div className="text-center mt-40">
          <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
            그 공통점은 바로 <span className="text-[#ff6262]">동적인 오브제</span>를 통한
            <br />
            끊임없는 감각의 확장을 유지하고 있다는 것입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

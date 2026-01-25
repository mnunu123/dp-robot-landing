'use client'

export default function BrandMessage() {
  return (
    <section className="section-mobile min-h-screen bg-black relative flex items-center justify-center">
      {/* 배경 원형 블러 효과들 */}
      <div className="absolute top-[83px] left-[38px] w-[70px] h-[70px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl" />
      <div className="absolute top-[222px] right-[60px] w-[50px] h-[50px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl" />
      <div className="absolute top-[341px] left-[48px] w-[94px] h-[100px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl" />
      <div className="absolute bottom-[64px] right-[27px] w-[83px] h-[82px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-xl" />
      
      {/* 메인 메시지 */}
      <div className="relative z-10 text-center px-8">
        <p className="font-[var(--font-cafe24)] text-[21px] text-white leading-relaxed">
          "저희는 당신의 브랜드 무드에 맞춰
          <br />
          움직임을 디자인합니다."
        </p>
      </div>
      
      {/* 점 애니메이션 */}
      <div className="absolute bottom-[130px] left-1/2 -translate-x-1/2 text-center">
        <p className="text-white text-[62px] font-bold leading-[20px] tracking-[1.86px]">.</p>
        <p className="text-white text-[38px] font-bold tracking-[0.76px] mt-4">.</p>
        <p className="text-white text-[23px] font-bold tracking-[0.46px] mt-2">.</p>
      </div>
    </section>
  )
}

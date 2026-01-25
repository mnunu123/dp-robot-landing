'use client'

export default function WhyKinetic() {
  return (
    <>
      {/* 첫 번째 섹션 - 글로벌 브랜드가 왜? */}
      <section className="section-mobile min-h-screen relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #666666 0%, #000000 100%)'
          }}
        />
        
        {/* 상단 질문 */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[343px] text-center z-10">
          <p className="font-[var(--font-cafe24)] text-[15px] text-white">
            "글로벌 리딩브랜드가 <span className="text-[#ff6262] text-[17px]">'움직이는 조형물'</span>에 집착할까요?"
          </p>
        </div>
        
        {/* 점들 - 시각적 포인트 */}
        <div className="absolute top-[121px] left-1/2 -translate-x-1/2 text-white text-[81px] font-medium">
          .
        </div>
        <div className="absolute top-[272px] left-1/2 -translate-x-1/2 text-white text-[46px] font-medium">
          .
        </div>
        <div className="absolute top-[364px] left-1/2 -translate-x-1/2 text-white text-[30px] font-medium">
          .
        </div>
        
        {/* 하단 통계 */}
        <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 w-[343px] text-center">
          <p className="font-[var(--font-cafe24)] text-[15px] text-white leading-relaxed">
            동적인 조형물 설치 후 고객 체류 시간 <span className="text-[#ff6262] text-[16px]">3배</span> 증가
          </p>
          <p className="font-[var(--font-cafe24)] text-[15px] text-white mt-2">
            SNS 자발적 공유 증가
          </p>
        </div>
      </section>
      
      {/* 두 번째 섹션 - 연구 결과 */}
      <section className="section-mobile min-h-screen relative">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #666666 0%, #000000 100%)'
          }}
        />
        
        {/* 하단 텍스트 */}
        <div className="absolute bottom-[195px] left-1/2 -translate-x-1/2 w-[313px] text-center">
          <p className="font-[var(--font-cafe24)] text-[14px] text-white leading-relaxed">
            "2023년 해외 리테일 <span className="text-[#eb2fde]">저명 저널 연구</span>에 따르면,
          </p>
          <p className="font-[var(--font-cafe24)] text-[14px] text-white leading-relaxed mt-2">
            동적인 오브제를 활용한 매장 디자인은 고객 경험과 브랜드 경험을 동시에 최적화하는 핵심 요소로 확인되었습니다."
          </p>
        </div>
      </section>
    </>
  )
}

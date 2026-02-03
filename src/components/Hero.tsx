'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // 초기 실행 시 자동 재생 시도 (브라우저 정책상 처음엔 muted 상태여야 할 수 있음)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("자동 재생이 차단되었습니다. 사용자 상호작용이 필요할 수 있습니다.")
      })
    }
  }, [])

  // 비디오가 끝났을 때 실행될 함수
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.muted = true; // 소리 끄기
      videoRef.current.play();       // 다시 재생
    }
  }

  return (
    <section className="section-mobile h-[844px] relative">
      {/* 배경 동영상 - 전체 화면 */}
      <video
  ref={videoRef}
  autoPlay
loop   // true로 변경
muted
  playsInline
  onEnded={handleVideoEnd}
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover opacity-70"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video> 
      

      {/* 어둠 필터 */}
      <div className="absolute inset-0 bg-black/75" />

      
      
      {/* 상단 텍스트 */}
            {/* 실제 콘텐츠 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 font-euljiro text-[13px] leading-[1.7] text-white font-normal  mx-auto">
        <span className="font-normal text-[18px] block mb-2">"움직이는 예술"</span>
          <span className="font-normal text-[14px] block mb-10">"키네틱아트 로봇으로 고객의 발걸음을 멈추게 만듭니다."</span>
          <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br /><br /><br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
          "우리는 매장의 정체되어 있는 공간을 활성화하여, 고객의 체류 시간을 늘리며 SNS 바이럴을 극대화할 수 있도록
          맞춤형 키네틱아트 로봇을 제공합니다."
        </p>
      </div>
      

{/* 스크롤 아이콘 - inset-x-0와 mx-auto를 사용하여 완벽한 중앙을 잡습니다. */}
<div className="absolute bottom-10 inset-x-0 mx-auto w-fit animate-bounce z-10">
  <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
    {/* 내부 점 애니메이션 */}
    <div className="h-2 w-1 rounded-full bg-white/50" />
  </div>
</div>
    </section>
  )
}

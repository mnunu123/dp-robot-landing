'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="section-mobile h-[844px] relative">
      {/* 배경 동영상 - 전체 화면 */}
      <video
        ref={videoRef}
        autoPlay
loop
muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 어둠 필터 */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* 상단 텍스트 */}
            {/* 실제 콘텐츠 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
                    "공간의 정적을 깨고, 고객의 머무름을 유지하는 단 하나의 오브제."
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

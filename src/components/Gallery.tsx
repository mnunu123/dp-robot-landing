'use client'

import Image from 'next/image'

// 동영상 파일 경로 - public/videos/gallery/ 폴더에 넣어주세요
const topRowVideos = [
  '/videos/gallery/video-1.mp4',
  '/videos/gallery/video-2.mp4',
  '/videos/gallery/video-3.mp4',
  '/videos/gallery/video-4.mp4',
]

const bottomRowVideos = [
  '/videos/gallery/video-5.mp4',
  '/videos/gallery/video-6.mp4',
  '/videos/gallery/video-7.mp4',
  '/videos/gallery/video-8.mp4',
]

interface MarqueeRowProps {
  videos: string[]
  reverse?: boolean
}

function MarqueeRow({ videos, reverse = false }: MarqueeRowProps) {
  const duplicatedVideos = [...videos, ...videos, ...videos]
  
  return (
    <div className="relative overflow-hidden w-full h-[267px]">
      <div 
        className={`flex gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {duplicatedVideos.map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[150px] h-[267px] relative rounded-lg overflow-hidden bg-neutral-900"
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="section-mobile h-[844px] bg-black relative overflow-hidden text-white">
      {/* 장식 이미지 (나뭇잎) - 기존 유지 */}
      <div className="absolute w-[209px] h-[209px] opacity-20 top-[-50px] left-[-40px] rotate-[-23deg]">
        <Image src="/images/deco-leaf-1.png" alt="" fill className="object-contain" />
      </div>
      
      <div className="absolute w-[250px] h-[250px] opacity-20 bottom-[100px] right-[-50px] rotate-[65deg]">
        <Image src="/images/deco-leaf-2.png" alt="" fill className="object-contain" />
      </div>

      {/* 상단 텍스트 */}
      <div className="absolute top-[69px] left-1/2 -translate-x-1/2 w-full px-4 text-center z-10">
        <p className="font-cafe24 text-[14px] leading-relaxed break-keep">
          실제 해외에선 키네틱아트를 활용하여,<br/>다양한 장소에서 사용되고있습니다.
        </p>
      </div>

      {/* 비디오 갤러리 섹션 */}
      <div className="absolute top-[150px] left-0 w-full flex flex-col gap-8">
        <MarqueeRow videos={topRowVideos} />
        {/* 중간 여백을 위해 위치 조정 */}
        <div className="h-[20px]" /> 
        <MarqueeRow videos={bottomRowVideos} reverse />
      </div>
    </section>
  )
}
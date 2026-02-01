'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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
    
    <>
      {/* 첫 번째 섹션 - 글로벌 브랜드가 왜? (기존 코드 유지) */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom,rgb(12, 12, 12) 0%, #666666 50%,rgb(16, 16, 16) 100%)'  }}
        />
        <div className="absolute inset-0 bg-black/30" />
         <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[390px] text-center z-10">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-[var(--font-cafe24)] text-[14px] leading-relaxed text-white">
          "그리고 국내뿐만 아니라 현재 해외 다양한분야에서도<br />
            <span className="text-[#ff6262] text-[16px] font-cafe24">'키네틱아트'</span>를 활용하고 있습니다."
          </p>
                  
        <div className="absolute top-[130px] left-1/2 -translate-x-1/2 text-white text-[81px] font-medium leading-none">.</div>
        <div className="absolute top-[210px] left-1/2 -translate-x-1/2 text-white text-[46px] font-medium leading-none">.</div>
        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 text-white text-[30px] font-medium leading-none">.</div>
        
        </motion.div>
              <div className="absolute top-[380px] left-0 w-full flex flex-col gap-8">
        <MarqueeRow videos={topRowVideos} />
        </div>
        </div>
</section>
      
      
        <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom,rgb(16, 16, 16) 0%, #666666 50%,rgb(16, 16, 16) 100%)'  }}
        />
        <div className="absolute inset-0 bg-black/30" />
      {/* 비디오 갤러리 섹션 */}
      <div className="absolute top-[0px] left-0 w-full flex flex-col gap-8">

        {/* 중간 여백을 위해 위치 조정 */}
        <div className="h-[20px]" /> 
        <MarqueeRow videos={bottomRowVideos} reverse />
      </div>
      <motion.div 
          className="absolute top-[440px] right-[-30px] w-[180px] h-[180px] z-10"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/kinetic-object.png"
            alt="키네틱 오브제"
            fill
            className="object-contain"
            sizes="180px"
          />
        </motion.div>
         {/* 하단 뉴스 헤드라인 */}
         <motion.div 
          className="absolute bottom-[150px] left-[19px] -translate-x-1/2 w-[350px] h-[23px] z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/images/daelim-news.png"
            alt="대림창고 오픈 6일 만에 거래액 6억 돌파"
            fill
            className="object-contain"
            sizes="2000px"
          />
        </motion.div>
      
    </section>
    {/* 첫 번째 섹션 - 키네틱 트렌드 검색 데이터 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{  background: 'linear-gradient(to top,rgb(16, 16, 16) 0%, #666666 50%,rgb(16, 16, 16) 100%)'}}
        />
<div className="absolute inset-0 bg-black/30" />

                {/* 상단 텍스트 */}
        <motion.div 
          className="absolute top-[45px] left-[27px] -translate-x-1/2 w-[342px] text-center z-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white">
            키네틱 아트는 성수동 대림창고나 광주 이이남스튜디오처럼
            <br />
            <span className="text-[#eb2fde] text-[18x]">대형 카페 인테리어</span>
            
            <span className="text-[14px]">로 활용되어 화제가 되기도 했습니다.</span>
          </p>
        </motion.div>

        {/* 대림창고 이미지 */}
        <motion.div 
          className="absolute top-[149px] left-[15px] -translate-x-1/2 w-[358px] h-[303px] z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/daelim-interior.png"
            alt="성수동 대림창고 키네틱 아트 인테리어"
            fill
            className="object-cover"
            sizes="358px"
          />
        </motion.div>

        {/* 모나무르 카페 이미지 */}
        <motion.div 
          className="absolute top-[500px] left-[15px] -translate-x-1/2 w-[358px] h-[235px] z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/images/eineun-studio.jpg"
            alt="광주 이이남 카페 키네틱 아트"
            fill
            className="object-cover"
            sizes="358px"
          />
        </motion.div>

       
      </section>

</>
    
  )
}
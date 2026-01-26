'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

export default function CustomMade() {
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  }
  return (
    
    <section className="section-mobile min-h-screen relative overflow-hidden bg-black">
      {/* 1. 배경 그라디언트 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #060606 20%, #2a2a2a 50%, #060606 85%)'
        }}
      />
      
      {/* 2. 왼쪽 장식 원 - 강제로 왼쪽 벽에 붙이기 */}
      <div 
        // [수정] left-[-150px]를 사용하여 400px 너비의 원을 왼쪽 벽 바깥으로 확실히 밀어냈습니다.
        // 이렇게 하면 빛의 중심이 왼쪽 벽 끝에 걸려 은은하게 퍼집니다.
        className="absolute top-[35%] left-[-150px] w-[400px] h-[400px] z-10 pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#eb2fde]/50 to-[#00f2fe]/20 blur-[80px] opacity-70" />
      </div>

      {/* 3. 상단 텍스트 (참고 이미지 위치) */}
      <div className="relative z-30 pt-24 px-8 text-center animate-fade-in">
        <p className="mb-8 font-cafe24 text-[13px] leading-relaxed text-whited">
          "해외 사례 속 그 독보적인 움직임, 그대로 가져오고 싶으셨나요?
        <br />
          상상하시던 디자인과 기능을 그대로"
        </p>
      </div>

      {/* 4. 중앙 제품 이미지 (투명도 낮춰 배경처럼 활용) */}
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] z-0 opacity-20">
        <Image
          src="/images/custom-product.png"
          alt="맞춤 제작 제품"
          fill
          className="object-contain grayscale"
          sizes="320px"
        />
      </div>

      {/* 5. 하단 메인 강조 문구 */}
      <div className="absolute bottom-[40%] inset-x-0 z-30 px-6 text-center">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <p className="mb-8 font-cafe24 text-[20px] leading-relaxed text-white">
          "귀하의 비즈니스 환경에 최적화하여
          <br />
          <span className="text-[#ff6262] text-[20px] font-bold">맞춤 제작</span>합니다."
        </p>
        </motion.div>
      </div>

      {/* 하단 점 패턴 (디테일 추가) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </section>
  )
}
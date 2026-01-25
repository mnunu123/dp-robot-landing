import {
  Hero,
  BrandIntro,
  DeadSpace,
  BrandShowcase,
  WhyKinetic,
  BrandMessage,
  CustomMade,
  ApplicationForm,
} from '@/components'

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-black">
      {/* Hero Section - 동영상 배경 */}
      <Hero />
      
      {/* Brand Introduction - 젠틀몬스터/아더에러 소개 */}
      <BrandIntro />
      
      {/* Dead Space - "멈춰있는 공간은 죽은 공간" */}
      <DeadSpace />
      
      {/* Brand Showcase - 브랜드 링크 카드 */}
      <BrandShowcase />
      
      {/* Why Kinetic - 왜 움직이는 조형물인가 */}
      <WhyKinetic />
      
      {/* Brand Message - 브랜드 메시지 */}
      <BrandMessage />
      
      {/* Custom Made - 맞춤 제작 안내 */}
      <CustomMade />
      
      {/* Application Form - 신청 폼 */}
      <ApplicationForm />
      
      {/* Footer */}
      <footer className="w-full max-w-[390px] bg-white py-8 px-5">
        <div className="text-center">
          <p className="text-[12px] text-gray-500">
            © 2025 DP로봇. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-400 mt-2">
            키네틱 아트 & 동적 오브제 맞춤 제작
          </p>
        </div>
      </footer>
    </div>
  )
}

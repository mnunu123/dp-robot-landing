import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR, Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script' // ✅ Script 컴포넌트 추가
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DP로봇 | 키네틱 아트 & 동적 오브제 맞춤 제작',
  description: '공간의 정적을 깨고, 고객의 머무름을 유지하는 단 하나의 오브제. 브랜드 무드에 맞춰 움직임을 디자인합니다.',
  keywords: ['키네틱 아트', '동적 오브제', '인테리어', '브랜드 경험', '맞춤 제작'],
  openGraph: {
    title: 'DP로봇 | 키네틱 아트 & 동적 오브제 맞춤 제작',
    description: '공간의 정적을 깨고, 고객의 머무름을 유지하는 단 하나의 오브제.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable} ${poppins.variable}`}>
      <head>
        {/* Microsoft Clarity 추적 스크립트 추가 */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vbhpk0gwqa");
          `}
        </Script>

        {/* 배민 을지로체 CDN */}
        <link 
          rel="preload"
          href="https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMEuljiro10yearslater.woff" 
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        {/* Cafe24 폰트 CDN */}
        <link 
          rel="preload"
          href="https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff" 
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${notoSansKR.className} bg-black`}>
        <main className="flex flex-col items-center">
          {children}
        </main>
        
        {/* GA4 측정 ID */}
        <GoogleAnalytics gaId="G-F13SJ2EC9Y" /> 
      </body>
    </html>
  )
}
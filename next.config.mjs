/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 빌드 시 타입 에러가 있어도 배포를 진행합니다.
    ignoreBuildErrors: true,
  },
  eslint: {
    // 빌드 시 ESLint 에러가 있어도 배포를 진행합니다.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
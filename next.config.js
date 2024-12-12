/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 确保页面路由正确配置
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // 如果有外部链接，需要配置
  images: {
    domains: ['aitiger.cc'],
  },
}

module.exports = nextConfig 
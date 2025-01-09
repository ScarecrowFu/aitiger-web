"use client";

import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/shared/ui/Carousel';
import { FloatingQRCodes } from '@/components/floating-qrcodes';

const carouselImages = [
  { src: '/images/apps/bee/bee1.png', alt: '主界面截图' },
  { src: '/images/apps/bee/bee2.png', alt: '模拟器管理' },
  { src: '/images/apps/bee/bee3.png', alt: '小蜜蜂助手' },
  { src: '/images/apps/bee/bee4.png', alt: '笔记管理' },
];

export default function WechatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 主要内容 */}
      <main className="pt-24">
        {/* Hero 部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            网易小蜜蜂自动化工具
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            网易小蜜蜂的自动化工具，支持模拟器与应用管理，自动发帖、自动点赞、自动评论和自动关注等功能，还有AI功能的笔记管理，多任务执行。
            </p>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            目前使用比较困难，由于需要使用到模拟器，所以需要安装Android SDK，请确保您的电脑上已经安装了Android SDK。
            </p>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            后续将会进行集成，不再需要配置模拟器，直接使用应用进行操作，敬请期待。
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="https://api.aitiger.cc/static/versions/bee.exe" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                下载使用
              </Link>
              <Link 
                href="https://t.zsxq.com/QJabH" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-emerald-600 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                学习社群
              </Link>
            </div>
          </div>
        </section>

        {/* 特性部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">模拟器管理              </h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  模拟器启动停止与监控
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  应用启动与状态监控
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  快照管理与应用安装
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">小蜜蜂助手</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  自动批量发帖
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  自动活跃，包括自动点赞、自动评论、自动关注
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  互相关注，主动回关粉丝
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">笔记管理</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  手动创建与AI生成笔记
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI生成配图与图文合成
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  笔记列表管理与预览
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">AI功能</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Kimi AI生成文案
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  可灵AI生成图片
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  自定义生成数量
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 产品截图展示 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              简单易用的操作界面
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              精心设计的用户界面，让您的工作更加轻松高效
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto group">
            <Carousel images={carouselImages} autoPlayInterval={5000} />
          </div>
        </section>

        {/* 知识星球部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                学习自己开发，加入我们的知识星球
              </h2>
              <p className="text-xl text-slate-600 mb-6">在这里，你可以：</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600">学习如何使用AI编程工具实现快速代码生成和项目开发</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600">参与导师实战项目开发，利用AI编程工具打造属于你自己的产品工具</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600">帮助学员即使没有编程经验，也能开发实用的工具或应用程序</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600">重点培养AI辅助编程的使用技巧，普通人也能开发出自己的产品</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="https://t.zsxq.com/QJabH"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  立即加入
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Image
                  src="/images/qrcode/zsxq_qrcode.png"
                  alt="知识星球二维码"
                  width={240}
                  height={240}
                  className="rounded-lg"
                />
                <p className="text-center text-slate-500 mt-4">扫码加入知识星球</p>
              </div>
            </div>
          </div>
        </section>

        {/* 操作教程部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">操作教程</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              通过详细的视频教程，快速掌握工具的使用方法
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg" style={{height: "600px"}}>
            <iframe 
              src="//player.bilibili.com/player.html?isOutside=true&aid=113763634125032&bvid=BV1e162YFEPT&cid=27678474654&p=1&autoplay=0"
              scrolling="no"
              frameBorder="no"
              allowFullScreen={true}
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

        {/* CTA 部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              立即开始使用
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              提升内容创作效率，让AI助手帮您完成繁琐的工作。现在开始免费试用！
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="https://api.aitiger.cc/static/versions/bee.exe" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                下载使用
              </Link>
              <Link 
                href="https://t.zsxq.com/QJabH" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-emerald-600 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                学习社群
              </Link>
              <div className="relative group">
                <button
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 transition-colors"
                >
                  公众号
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white p-8 rounded-lg shadow-lg" style={{width: "220px", height: "220px"}}>
                    <Image 
                      src="/images/qrcode/public_qrcode.jpg"
                      alt="公众号二维码"
                      width={240}
                      height={240}
                      className="rounded"
                    />
                    <div className="text-sm text-gray-600 text-center mt-1 whitespace-nowrap">扫码关注公众号</div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </div>
              <Link
                href="https://space.bilibili.com/446830789"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
              >
                B站
              </Link>
              <div className="relative group">
                <button
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 transition-colors"
                >
                  抖音
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white p-8 rounded-lg shadow-lg" style={{width: "240px", height: "240px"}}>
                    <Image 
                      src="/images/qrcode/douyin_qrcode.png"
                      alt="抖音二维码"
                      width={300}
                      height={300}
                      className="rounded w-full h-full object-contain"
                    />
                    <div className="text-sm text-gray-600 text-center mt-1 whitespace-nowrap">扫码关注抖音</div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                </div>
              </div>
              <Link
                href="https://www.youtube.com/@aitiger90"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Youtube
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 添加漂浮二维码 */}
      <FloatingQRCodes />
    </div>
  );
} 
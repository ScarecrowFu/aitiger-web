"use client";

import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/shared/ui/Carousel';
import { FloatingQRCodes } from '@/components/floating-qrcodes';

const carouselImages = [
  { src: '/images/apps/ai_video/e1.png', alt: 'API配置界面' },
  { src: '/images/apps/ai_video/e2.png', alt: '任务配置界面' },
  { src: '/images/apps/ai_video/e3.png', alt: '任务管理界面' },
  { src: '/images/apps/ai_video/e4.png', alt: '系统设置界面' },
  { src: '/images/apps/ai_video/e5.png', alt: '帮助中心界面' },
  { src: '/images/apps/ai_video/e6.png', alt: '任务执行界面' },
  { src: '/images/apps/ai_video/e7.png', alt: '任务执行界面' },
  { src: '/images/apps/ai_video/e8.png', alt: '任务执行界面' },
  { src: '/images/apps/ai_video/e9.png', alt: '任务执行界面' },
];

export default function AIVideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 主要内容 */}
      <main className="pt-24">
        {/* Hero 部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              科虎AI创影 - 智能视频创作工具
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
              从文字描述到精美视频，AI驱动的一站式视频创作解决方案。利用最新AI技术，自动生成高质量图片和视频，并智能剪辑成完整作品。
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link 
                href="https://app.aitiger.cc/source-codes/5/" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition-colors"
              >
                购买源码
              </Link>
              <Link 
                href="https://app.aitiger.cc/static/versions/ai_video/科虎AI创影.zip" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                下载windows版使用
              </Link>
              <Link 
                href="https://app.aitiger.cc/static/versions/ai_video/科虎AI创影-mac.zip" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                下载mac版使用
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
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">一站式工作流</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  从文字描述到最终视频的完整流程
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  自动生成专业图片提示词
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  无需手动剪辑，智能组合视频片段
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">AI驱动技术</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  DeepSeek-Chat生成专业图片提示词
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  LibLib AI创建高质量图像
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  智谱-cogvideox-flash动态视频生成
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">简单易用</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  直观的参数配置界面
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  一键开始任务执行
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  可视化任务监控与管理
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">灵活定制</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  自定义背景音乐
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  灵活的视频参数设置
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  支持多种AI模型选择
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 产品截图展示 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              简洁直观的操作界面
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              精心设计的用户体验，让AI视频创作变得简单高效
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto group">
            <Carousel images={carouselImages} autoPlayInterval={5000} />
          </div>
        </section>

        {/* 系统概述和使用指南部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              系统概述
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              科虎AI创影是基于最新AI技术的视频自动生成与剪辑工具
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">核心特性</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>一站式工作流</strong>：从文字描述到最终视频的完整流程</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>AI驱动</strong>：利用最新的AI模型生成高质量图片和视频</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>直观配置</strong>：简单易用的参数配置界面</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>自动剪辑</strong>：智能视频片段生成与转场效果</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>可定制性</strong>：支持自定义音乐、提示词和模型选择</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">技术亮点</h3>
              <p className="text-lg text-slate-600 mb-4">科虎AI创影采用了最新的AI技术，包括：</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>文本到提示词</strong>：DeepSeek-Chat模型生成专业图片提示词</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>图片生成</strong>：LibLib AI先进模型创建高质量图像</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>视频生成</strong>：智谱-cogvideox-flash模型将图片转换为动态视频</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>智能剪辑</strong>：自动处理视频片段、转场和音频同步</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 使用指南部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              使用指南
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              科虎AI创影的使用非常简单直观，以下是详细的使用步骤指南
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">第一步：任务配置</h3>
              <p className="text-lg text-slate-600 mb-4">在左侧菜单中点击"新建任务"，进入任务配置页面：</p>
              
              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">视频背景设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>选择预设音乐或上传自定义音乐</li>
                    <li>点击音乐右侧的播放按钮可预览效果</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">图片参数设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>输入视频主题：简洁描述视频的核心内容</li>
                    <li>输入生成要求：详细描述期望的人物、场景、风格等</li>
                    <li>设置图片数量：决定生成多少张图片（建议4-8张）</li>
                    <li>选择图片尺寸：根据需要选择合适的分辨率</li>
                    <li>选择图片模型：选择适合您需求的AI图片生成模型</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">视频参数设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>选择视频尺寸：输出视频的分辨率</li>
                    <li>设置帧率：影响视频流畅度（一般选择30fps）</li>
                    <li>选择视频质量：根据需要平衡质量与文件大小</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">剪辑参数设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>设置最小和最大片段时长：控制每个视频片段的播放时间</li>
                    <li>设置转场时长：控制片段之间过渡效果的持续时间</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 mt-6">配置完成后，点击顶部的"开始执行任务"按钮开始生成过程。</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">第二步：任务管理</h3>
              <p className="text-lg text-slate-600 mb-4">任务提交后，系统会自动跳转到任务管理页面：</p>
              
              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">任务列表</h4>
                  <p className="text-slate-600">显示所有任务及其状态、进度、创建时间等信息</p>
                </div>
                
                <div className="pl-4 border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">任务详情</h4>
                  <p className="text-slate-600 mb-2">点击任务列表中的任务可查看详细信息，包括：</p>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>任务配置信息</li>
                    <li>工作流时间线：直观展示任务执行的各个阶段及进度</li>
                    <li>中间结果：生成的图片提示词、图片、视频提示词和视频片段</li>
                    <li>最终视频：可直接预览和下载生成的最终成品</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">任务操作</h4>
                  <p className="text-slate-600 mb-2">可以执行以下操作：</p>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>取消任务：终止正在执行的任务</li>
                    <li>重试任务：从失败步骤重新开始执行</li>
                    <li>删除任务：移除不需要的任务记录</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">第三步：系统设置</h3>
              <p className="text-lg text-slate-600 mb-4">在左侧菜单点击"系统设置"，可以配置以下参数：</p>
              
              <div className="space-y-6">
                <div className="pl-4 border-l-4 border-yellow-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">常规设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>结果输出目录：设置生成视频的保存位置</li>
                    <li>界面主题：选择软件界面的显示主题</li>
                    <li>自动更新：是否自动检查和下载软件更新</li>
                    <li>API配置：设置是否使用自定义模型API或授权码</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-yellow-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">模型设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>配置DeepSeek API用于生成提示词</li>
                    <li>配置LibLib AI用于生成图片</li>
                    <li>配置智谱AI用于生成视频</li>
                  </ul>
                </div>
                
                <div className="pl-4 border-l-4 border-yellow-500">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">高级设置</h4>
                  <ul className="list-disc pl-6 text-slate-600 space-y-1">
                    <li>任务并行数量：设置同时执行的任务数</li>
                    <li>日志级别：控制日志详细程度</li>
                    <li>日志保留天数：设置系统日志的保留期限</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">最佳实践建议</h3>
              <p className="text-lg text-slate-600 mb-4">以下是一些使用科虎AI创影的最佳实践建议：</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>主题与要求描述</strong>：使用清晰、具体的描述获得更好的生成结果</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>图片数量</strong>：根据视频长度和复杂度调整，一般4-8张为宜</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>模型选择</strong>：不同模型适合不同风格，可以尝试多种模型找到最适合的</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>音乐匹配</strong>：选择与视频主题和情感相符的背景音乐</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                  <span className="text-lg text-slate-600"><strong>参数保存</strong>：对于满意的配置，可以使用"保存配置"功能以便再次使用</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 常见问题部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              常见问题
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              解答使用科虎AI创影过程中可能遇到的问题
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">为什么我的任务卡在"等待中"状态？</h3>
              <p className="text-lg text-slate-600 mb-4">可能的原因：</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
                <li>系统正在处理其他任务，您的任务在队列中等待</li>
                <li>任务并行数量限制导致队列堆积</li>
                <li>系统资源不足，无法立即处理新任务</li>
              </ul>
              <p className="text-lg text-slate-600"><strong>解决方案</strong>：检查系统设置中的任务并行数量，可以适当增加；或者等待其他任务完成后系统会自动处理您的任务。</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">如何提高生成图片的质量？</h3>
              <p className="text-lg text-slate-600 mb-4"><strong>解决方案</strong>：</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>提供更详细、具体的主题和要求描述</li>
                <li>选择更适合您内容的图片生成模型</li>
                <li>尝试使用提示词示例中的专业术语和描述方式</li>
                <li>适当增加图片尺寸，但注意这会增加处理时间</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">生成的视频质量不够理想怎么办？</h3>
              <p className="text-lg text-slate-600 mb-4"><strong>解决方案</strong>：</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>提高视频参数中的质量设置</li>
                <li>选择更高的帧率（如30fps）</li>
                <li>CogVideoX-Flash是免费模型：快速视频生成模型</li>
                <li>CogVideoX-2是计费模型：高质量视频生成模型</li>
                <li>可以到智谱AI官网购买CogVideoX-2模型</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">为什么某些任务会失败？</h3>
              <p className="text-lg text-slate-600 mb-4">可能的原因：</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1 mb-4">
                <li>API密钥不正确或已过期</li>
                <li>网络连接问题</li>
                <li>AI模型服务暂时不可用</li>
                <li>生成内容可能违反了内容政策</li>
              </ul>
              <p className="text-lg text-slate-600"><strong>解决方案</strong>：检查系统日志获取具体错误信息，更新API密钥，确保网络连接稳定，调整内容描述避免敏感内容。</p>
            </div>
          </div>
        </section>

        {/* 关于软件部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              关于科虎AI创影
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              专业的AI视频创作与剪辑工具
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
              <p className="text-lg text-slate-600 mb-4">科虎AI创影是一款基于最新AI技术的视频自动生成与剪辑工具，旨在帮助创作者、营销人员和内容制作团队快速生成高质量的视频内容。</p>
              <p className="text-lg text-slate-600">通过简单的参数配置，科虎AI创影可以从文本描述直接生成图片和视频，并自动进行剪辑，最终生成带有背景音乐的完整视频作品，大幅提高内容创作效率。</p>
            </div>
            
            <div className="text-center mt-8 mb-12">
              <p className="text-slate-500 mb-6">如有问题可联系微信：fualan1990</p>
              <p className="mb-4">在线使用：
                <a href="https://link.aitiger.cc" target="_blank" className="text-blue-600 hover:text-blue-800 hover:underline">
                  领虎智创 - 集创意、设计与技术于一体的综合性Agent平台
                </a>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">AI知识星球</h3>
                  <p className="text-green-700 text-sm">想要深入学习和了解AI风向，前沿信息总是第一时间获得</p>
                  <p className="text-green-700 text-sm">欢迎扫码加入AI知识星球，永久获得星球所有学习资料</p>
                </div>
                <div className="bg-white inline-block p-3 rounded-lg">
                  <Image 
                    src="/images/qrcode/zsxq_qrcode.png" 
                    alt="AI知识星球二维码" 
                    width={180} 
                    height={180} 
                    className="rounded" 
                  />
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">AI编程社群</h3>
                  <p className="text-green-700 text-sm">想要深入AI编程，掌握AI编程技巧</p>
                  <p className="text-green-700 text-sm">开启属于自己的"代码"财富，欢迎扫码加入AI编程社群</p>
                </div>
                <div className="bg-white inline-block p-3 rounded-lg">
                  <Image 
                    src="/images/qrcode/public_qrcode.jpg" 
                    alt="AI编程社群二维码" 
                    width={180} 
                    height={180} 
                    className="rounded" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 部分 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              立即开始使用
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              提升视频创作效率，让AI助手帮您完成繁琐的工作。现在开始免费试用！
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
            <Link 
                href="https://app.aitiger.cc/static/versions/ai_video/科虎AI创影.zip" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                下载windows版使用
              </Link>
              <Link 
                href="https://app.aitiger.cc/static/versions/ai_video/科虎AI创影-mac.zip" 
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                下载mac版使用
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
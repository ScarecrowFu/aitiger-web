"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { AppsContent } from '@/types/apps';

export default function AppsPage() {
  const [content, setContent] = useState<AppsContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/apps/index.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading content:', err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !content) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-[85%] mx-auto py-32 px-6">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          {/* SVG 背景装饰 */}
          {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[200px]">
            <svg
              viewBox="0 0 800 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="50" cy="100" r="4" fill="#3B82F6" fillOpacity="0.3" />
              <circle cx="750" cy="100" r="4" fill="#8B5CF6" fillOpacity="0.3" />
              <path
                d="M100 20H700C750 20 780 50 780 100C780 150 750 180 700 180H100C50 180 20 150 20 100C20 50 50 20 100 20Z"
                fill="url(#paint0_linear)"
                fillOpacity="0.1"
              />
              <path
                d="M100 40H700C730 40 760 60 760 100C760 140 730 160 700 160H100C70 160 40 140 40 100C40 60 70 40 100 40Z"
                stroke="url(#paint1_linear)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="20"
                  y1="100"
                  x2="780"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="40"
                  y1="100"
                  x2="760"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div> */}

          <h1 className="text-4xl font-bold mb-6 relative">{content.hero.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative">
            {content.hero.description}
          </p>
        </motion.div>

        {/* 应用列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* 应用图片 */}
              <div className="relative h-48 w-full">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    app.status === 'online' 
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {app.status === 'online' ? '已上线' : '开发中'}
                  </span>
                </div>
              </div>

              {/* 应用信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.desc}</p>
                
                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div className="flex items-center gap-4">
                  <Link
                    href={app.link}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    访问应用
                  </Link>
                  {app.github && (
                    <Link
                      href={app.github}
                      target="_blank"
                      className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      源码
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 更多应用提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">{content.more.text}</p>
          <Link
            href={content.more.cta.link}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">{content.more.cta.text}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 
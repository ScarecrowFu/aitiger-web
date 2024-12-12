"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { ToolsContent } from '@/types/tools';

export default function ToolsPage() {
  const [content, setContent] = useState<ToolsContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/tools/index.json')
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

        {/* 工具箱说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
            工具箱说明
          </h2>
          <ul className="space-y-4">
            {content.toolboxInstructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                <span className="text-gray-600">{instruction}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 更新动态 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-orange-500 rounded-full"></span>
            更新动态
          </h2>
          <div className="space-y-8">
            {content.updateLogs.map((log, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-orange-500 font-medium">{log.date}</span>
                  <h3 className="text-lg font-bold">{log.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {Array.isArray(log.tools) && log.tools.map((tool, idx) => (
                    typeof tool === 'string' ? (
                      <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {tool}
                      </span>
                    ) : (
                      <Link
                        key={idx}
                        href={tool.link || '#'}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tool.link 
                            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tool.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 工具箱内容 */}
        <div className="space-y-16">
          {content.toolboxSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all"
                  >
                    <Link 
                      href={item.link || '#'} 
                      target="_blank"
                      className="flex items-start gap-4"
                    >
                      {/* Logo */}
                      {/* <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src={item.logo || content.defaultLogo}
                          alt={`${item.name} logo`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div> */}
                      {/* 内容 */}
                      <div>
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                          {item.name}
                          {item.link && (
                            <svg 
                              className="w-4 h-4 text-gray-400" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                              />
                            </svg>
                          )}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* 加入社群按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <Link
            href={content.cta.link}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">{content.cta.text}</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 
"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { BusinessContent } from '@/types/business';

export default function BusinessPage() {
  const [content, setContent] = useState<BusinessContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/business/index.json')
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

        {/* 课程大纲 */}
        <div className="space-y-12">
          {content.courseOutline.map((chapter, idx) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                {chapter.title}
              </h2>
              <ul className="space-y-4">
                {chapter.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {item.link ? (
                      <>
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></span>
                        <Link 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 transition-colors flex items-center gap-2"
                        >
                          {item.text}
                          <svg 
                            className="w-4 h-4" 
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
                        </Link>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                        <span className="text-gray-700">{item.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 教学优势 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">该课程永久公开发布，未完成部分将逐步更新</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.teachingAdvantages.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500">✔</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
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
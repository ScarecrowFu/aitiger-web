"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWeixin, FaEnvelope } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';
import type { HomeContent } from '@/types/home';

// 动画配置
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  }
};

export default function Home() {
  const [content, setContent] = useState<HomeContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const responses = await Promise.all([
          fetch('/content/home/hero.json'),
          fetch('/content/home/courses.json'),
          fetch('/content/home/programming.json'),
          fetch('/content/home/tools.json'),
          fetch('/content/home/apps.json'),
          fetch('/content/home/resources.json'),
          fetch('/content/home/about.json')
        ]);

        // 检查是否所有请求都成功
        responses.forEach((res, index) => {
          if (!res.ok) {
            throw new Error(`Failed to load content ${index + 1}: ${res.statusText}`);
          }
        });

        // 分别解析每个响应，以便定位具体哪个文件出错
        const contents = await Promise.all(
          responses.map(async (res, index) => {
            try {
              const text = await res.text();
              try {
                return JSON.parse(text);
              } catch (parseError: unknown) {
                console.error(`JSON parse error in file ${index + 1}:`, text);
                throw new Error(`Invalid JSON in file ${index + 1}: ${parseError instanceof Error ? parseError.message : 'Unknown error'}`);
              }
            } catch (error) {
              console.error(`Error processing file ${index + 1}:`, error);
              throw error;
            }
          })
        );

        const [hero, courses, programming, tools, apps, resources, about] = contents;
        setContent({ hero, courses, programming, tools, apps, resources, about });
      } catch (err) {
        console.error('Error loading content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  if (error) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-500">Error: {error}</div>
    </div>;
  }

  if (isLoading || !content) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Loading...</div>
    </div>;
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen">
        <div className="relative">
          {/* Hero Section */}
          <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
            <motion.div
              initial={animations.fadeInUp.initial}
              animate={animations.fadeInUp.animate}
              transition={animations.fadeInUp.transition}
              className="text-center"
            >
              <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                {content.hero.title}
              </h1>
              <p className="text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
                {content.hero.description}
              </p>
              
              {/* 特性列表 */}
              <div className="w-full max-w-5xl mx-auto space-y-4">
                {content.hero.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white/90 transition-all shadow-sm hover:shadow-md"
                  >
                    <span className="text-4xl">{feature.icon}</span>
                    <span className="text-lg text-gray-700 flex-1">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* AI商业落地区块 */}
          <div id="business" className="py-32 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/50 backdrop-blur-sm -z-20" />
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5 -z-10" />
            <div className="max-w-[85%] mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold mb-6">{content.courses.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {content.courses.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {content.courses.courses.map((course, idx) => (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {course.icon}
                      </span>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {course.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* 查看完整课程按钮 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="/business"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">{content.courses.checkDetail}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* AI编程区块 */}
          <div id="programming" className="py-32 relative mt-20 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white/50 backdrop-blur-sm -z-20" />
            <div className="absolute inset-0 bg-[url('/patterns/code.svg')] opacity-5 -z-10" />
            <div className="max-w-[85%] mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold mb-6">{content.programming.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {content.programming.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {content.programming.courses.map((course, idx) => (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {course.icon}
                      </span>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {course.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* 查看详情按钮 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="/code"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full hover:from-green-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">{content.programming.checkDetail}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>


          {/* 工具箱区块 */}
          <div id="tools" className="py-32 relative mt-20 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 to-white/50 backdrop-blur-sm -z-20" />
            <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 -z-10" />
            <div className="max-w-[85%] mx-auto px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold mb-6">{content.tools.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {content.tools.description}
                </p>
              </motion.div>

              {/* 工具箱预览 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {content.tools.preview.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <span className="text-5xl mb-8 block group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* 查看更多按钮 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12 relative z-10"
              >
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">{content.tools.checkDetail}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* 应用展示区块 */}
          <div id="apps" className="py-32 relative mt-20 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 to-white/50 backdrop-blur-sm -z-20" />
            <div className="absolute inset-0 bg-[url('/patterns/apps.svg')] opacity-5 -z-10" />
            <div className="max-w-[85%] mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold mb-6">{content.apps.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {content.apps.description}
                </p>
              </motion.div>

              {/* 应用预览卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {content.apps.apps.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-2xl">
                        {app.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                      <p className="text-gray-600">{app.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 查看更多按钮 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  href="/apps"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">{content.apps.checkDetail}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* 资料分享区块 */}
          <div id="resources" className="py-32 relative mt-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/80 to-white/50 backdrop-blur-sm -z-20" />
            <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 -z-10" />
            <div className="max-w-[85%] mx-auto px-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl font-bold mb-6">{content.resources.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {content.resources.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.resources.sections.map((section, idx) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl group-hover:scale-110 transition-transform">{section.icon}</span>
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* 资料特 */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.resources.features.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <span className="text-3xl mb-3 inline-block">{item.icon}</span>
                    <p className="text-gray-600">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* 查看更多按钮 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg">{content.resources.checkDetail}</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

            </div>
          </div>

          {/* 关于我们区块 */}
          <div id="about" className="py-32 relative mt-20 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white/50 backdrop-blur-sm -z-10" />
            <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[85%] mx-auto text-center px-6"
            >
              <h2 className="text-4xl font-bold mb-8">{content.about.title}</h2>
              <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-4xl mx-auto">
                {content.about.description}
              </p>
              <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
                {content.about.contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm"
                  >
                    {item.type === 'wechat' && <FaWeixin className="w-10 h-10 text-blue-500" />}
                    {item.type === 'mp' && <IoNewspaper className="w-10 h-10 text-blue-500" />}
                    {item.type === 'email' && <FaEnvelope className="w-10 h-10 text-blue-500" />}
                    <div className="text-left">
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="font-medium text-lg">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          
          {/* 底部标语 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-600 mb-4">
              {content.about.footer.slogan.main}
            </p>
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {content.about.footer.slogan.sub}
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
} 
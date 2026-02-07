"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import ParticleBackground from '@/components/particle-background';

// 五大课程体系
const courses = [
  { title: 'AI编程', desc: 'Cursor 从入门到项目落地', icon: '💻', color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
  { title: 'ChatGPT', desc: 'Prompt技巧 · GPTs开发 · 15种实用技巧', icon: '🤖', color: 'purple', gradient: 'from-purple-500 to-pink-500' },
  { title: 'Midjourney', desc: '参数详解 · 风格定制 · 实战出图', icon: '🎨', color: 'orange', gradient: 'from-orange-500 to-red-500' },
  { title: 'Stable Diffusion', desc: 'ControlNet · 模型调校 · 插件开发', icon: '🖼️', color: 'pink', gradient: 'from-pink-500 to-rose-500' },
  { title: 'AI创收实战分享', desc: '全栈开发 · 自媒体矩阵 · 商业变现', icon: '💰', color: 'green', gradient: 'from-green-500 to-emerald-500' },
];

// 平台亮点
const highlights = [
  { title: '不局限工具', desc: '覆盖主流AI工具，围绕真实场景教学', icon: '🔧' },
  { title: '从零到落地', desc: '系统化课程体系，零基础也能独立完成项目', icon: '🎯' },
  { title: '图文+视频', desc: '双教程模式，配合资料库与 Q&A 指南', icon: '📚' },
  { title: '永久开放', desc: '所有课程永久可学，自主掌握学习节奏', icon: '♾️' },
  { title: 'AI创收实战', desc: '全栈开发上架、自媒体矩阵、自动化变现', icon: '💰' },
  { title: '社群共学', desc: '问题精准解答，共享提示词库与效率插件', icon: '🤝' },
];

// 站内导航
const navCards = [
  { title: 'AI社群', desc: '查看完整课程体系与社群内容', href: '/code', icon: '📖', color: 'from-blue-500 to-cyan-500' },
  { title: '科虎AI应用', desc: '浏览我们开发的AI应用与源码', href: '/apps', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  { title: '关于科虎AI', desc: '了解我们的理念与联系方式', href: '/about', icon: '💡', color: 'from-cyan-500 to-blue-500' },
];

// 动画配置
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 粒子背景 */}
      <ParticleBackground />

      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 顶部装饰色块 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[128px]" />
        {/* 网格背景 */}
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              科虎AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-700 mb-4"
          >
            不局限工具 · 聚焦实战场景 · 能力提升指南
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base text-gray-500 max-w-2xl mx-auto mb-10"
          >
            专注AI技术在真实场景的应用，手把手教你用AI提升效率、开发产品、实现变现
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/code"
              className="btn-gradient"
            >
              查看课程内容
            </Link>
            <Link
              href="/apps"
              className="btn-outline"
            >
              浏览AI应用
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 四大课程体系 */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            五大课程体系
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {courses.map((course) => (
              <motion.div
                key={course.title}
                variants={itemVariants}
                className="group relative rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
              >
                {/* 左侧渐变发光条 */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${course.gradient} group-hover:w-1.5 transition-all`} />

                {/* 悬停时的光效 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <span className="text-4xl block mb-4">{course.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 平台亮点 */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent" />
        <div className="max-w-6xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            为什么选择科虎AI
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 快速导航 */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            探索更多
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {navCards.map((card) => (
              <motion.div key={card.href} variants={itemVariants}>
                <Link
                  href={card.href}
                  className="group block p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative overflow-hidden"
                >
                  {/* 悬停渐变背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{card.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500">{card.desc}</p>

                  {/* 箭头指示 */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 底部标语 */}
      <section className="relative pb-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center pt-8 border-t border-gray-200 max-w-4xl mx-auto"
        >
          <p className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-medium">
            与AI同行，探索无限可能
          </p>
        </motion.div>
      </section>
    </div>
  );
}

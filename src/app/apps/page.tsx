"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// 动画配置
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

// 已下线产品数据
const offlineApps = [
  {
    title: "科虎AI创影",
    desc: "基于AI技术的视频自动生成与剪辑工具",
    image: "/images/apps/ai_video.png",
    github: "https://pan.baidu.com/s/16yqOap0w0tKx8Pz3gTixwg?pwd=kqyy",
    tags: ["AI", "视频", "创影"],
    color: "neon-blue",
  },
  {
    title: "小蜜蜂全自动智能助手",
    desc: "全自动操作，自动发帖、回复、点赞、关注、AI笔记管理、小红书爬虫",
    image: "/images/apps/bee.png",
    github: "https://pan.baidu.com/s/1u8-DG3lF3oEdqB02EAtSFQ?pwd=p9a1",
    tags: ["全自动", "AI", "小蜜蜂"],
    color: "neon-yellow",
  },
  {
    title: "公众号语录图文智能助手",
    desc: "自动化生成与发布微信公众号图文，AI生成图文、AI生成内容、AI生成配图",
    image: "/images/apps/wechat1.png",
    github: "https://pan.baidu.com/s/1dkF1yixcslMAv86UEHSaMw?pwd=b7np",
    tags: ["全自动", "AI", "公众号"],
    color: "neon-green",
  },
  {
    title: "AI双色球预测",
    desc: "基于机器学习的双色球预测系统，集成数据分析和AI模型预测的彩票预测工具",
    image: "/images/apps/lottery.png",
    github: "https://pan.baidu.com/s/130SWa364w-vJFm_ZNi-sBQ?pwd=w6kp",
    tags: ["Python", "机器学习", "数据分析"],
    color: "neon-purple",
  },
  {
    title: "OKX交易机器人",
    desc: "智能加密货币交易系统，支持多策略自动化交易",
    image: "/images/apps/trading.png",
    github: "https://pan.baidu.com/s/12syh05hUUKA4729snz4nBQ?pwd=nk6h",
    tags: ["Python", "量化交易", "加密货币"],
    color: "neon-orange",
  }
];

// 在线产品占位数据
const onlineApps = [
  { title: "敬请期待", desc: "新产品正在开发中...", icon: "🚀" },
  { title: "敬请期待", desc: "新产品正在开发中...", icon: "✨" },
  { title: "敬请期待", desc: "新产品正在开发中...", icon: "🎯" },
];

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-dark relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="max-w-[90%] mx-auto py-28 px-6 relative">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              我开发的应用
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            使用AI技术开发的实用工具和应用
          </p>
        </motion.div>

        {/* ===== 在线产品 ===== */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-neon-green to-neon-cyan rounded-full" />
            <span className="text-white">在线产品</span>
            <span className="text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/30">
              Coming Soon
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card overflow-hidden border-2 border-dashed border-white/10 hover:border-neon-cyan/30 transition-all duration-300"
              >
                {/* 占位图区域 */}
                <div className="relative h-48 w-full bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center overflow-hidden">
                  {/* 动态网格背景 */}
                  <div className="absolute inset-0 grid-bg opacity-30" />

                  {/* 脉冲光环效果 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-neon-cyan/5 animate-ping" />
                  </div>

                  <div className="relative text-center z-10">
                    <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform duration-300">{app.icon}</span>
                    <span className="px-3 py-1 rounded-full text-sm bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30">
                      待上线
                    </span>
                  </div>
                </div>

                {/* 信息 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-400">{app.title}</h3>
                  <p className="text-gray-500 text-sm">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== 已下线产品 ===== */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-neon-orange to-neon-pink rounded-full" />
            <span className="text-white">已下线产品</span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
              源码可用
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {offlineApps.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group glass-card overflow-hidden hover:bg-white/5 transition-all duration-300"
              >
                {/* 应用图片 */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

                  {/* 状态标签 */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-dark/80 text-gray-400 border border-white/10 backdrop-blur-sm">
                      已下线
                    </span>
                  </div>
                </div>

                {/* 应用信息 */}
                <div className="p-4">
                  <h3 className="text-base font-bold mb-2 text-white truncate group-hover:text-neon-blue transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">{app.desc}</p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {app.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-2 py-0.5 text-[10px] rounded-full bg-${app.color}/10 text-${app.color} border border-${app.color}/20`}
                        style={{
                          backgroundColor: `rgba(var(--${app.color}-rgb, 0, 212, 255), 0.1)`,
                          borderColor: `rgba(var(--${app.color}-rgb, 0, 212, 255), 0.2)`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 源码按钮 */}
                  <Link
                    href={app.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-lg hover:bg-neon-blue/10 hover:border-neon-blue/30 hover:text-neon-blue transition-all duration-300 text-gray-400"
                  >
                    获取源码
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 更多应用提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 mb-8">更多有趣的应用正在开发中，敬请期待...</p>
          <Link
            href="/code"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full hover:shadow-neon-blue transition-all duration-300 font-medium"
          >
            <span className="text-lg">学习如何开发</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

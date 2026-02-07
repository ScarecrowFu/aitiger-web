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
    color: "blue",
  },
  {
    title: "小蜜蜂全自动智能助手",
    desc: "全自动操作，自动发帖、回复、点赞、关注、AI笔记管理、小红书爬虫",
    image: "/images/apps/bee.png",
    github: "https://pan.baidu.com/s/1u8-DG3lF3oEdqB02EAtSFQ?pwd=p9a1",
    tags: ["全自动", "AI", "小蜜蜂"],
    color: "yellow",
  },
  {
    title: "公众号语录图文智能助手",
    desc: "自动化生成与发布微信公众号图文，AI生成图文、AI生成内容、AI生成配图",
    image: "/images/apps/wechat1.png",
    github: "https://pan.baidu.com/s/1dkF1yixcslMAv86UEHSaMw?pwd=b7np",
    tags: ["全自动", "AI", "公众号"],
    color: "green",
  },
  {
    title: "AI双色球预测",
    desc: "基于机器学习的双色球预测系统，集成数据分析和AI模型预测的彩票预测工具",
    image: "/images/apps/lottery.png",
    github: "https://pan.baidu.com/s/130SWa364w-vJFm_ZNi-sBQ?pwd=w6kp",
    tags: ["Python", "机器学习", "数据分析"],
    color: "purple",
  },
  {
    title: "OKX交易机器人",
    desc: "智能加密货币交易系统，支持多策略自动化交易",
    image: "/images/apps/trading.png",
    github: "https://pan.baidu.com/s/12syh05hUUKA4729snz4nBQ?pwd=nk6h",
    tags: ["Python", "量化交易", "加密货币"],
    color: "orange",
  }
];

// 颜色映射
const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
};

// 在线产品占位数据
const onlineApps = [
  { title: "敬请期待", desc: "新产品正在开发中...", icon: "🚀" },
  { title: "敬请期待", desc: "新产品正在开发中...", icon: "✨" },
  { title: "敬请期待", desc: "新产品正在开发中...", icon: "🎯" },
];

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="max-w-[90%] mx-auto py-28 px-6 relative">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              我开发的应用
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            使用AI技术开发的实用工具和应用
          </p>
        </motion.div>

        {/* ===== 在线产品 ===== */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full" />
            <span className="text-gray-900">在线产品</span>
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 border border-green-200">
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
                className="group glass-card overflow-hidden border-2 border-dashed border-gray-200 hover:border-cyan-300 transition-all duration-300"
              >
                {/* 占位图区域 */}
                <div className="relative h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {/* 动态网格背景 */}
                  <div className="absolute inset-0 grid-bg opacity-50" />

                  {/* 脉冲光环效果 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-cyan-500/10 animate-ping" />
                  </div>

                  <div className="relative text-center z-10">
                    <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform duration-300">{app.icon}</span>
                    <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700 border border-yellow-200">
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
            <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-pink-500 rounded-full" />
            <span className="text-gray-900">已下线产品</span>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
              源码可用
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {offlineApps.map((app, index) => {
              const colors = colorMap[app.color] || colorMap.blue;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group glass-card overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  {/* 应用图片 */}
                  <div className="relative h-36 w-full overflow-hidden flex-shrink-0">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                    {/* 状态标签 */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-full text-xs bg-white/90 text-gray-500 border border-gray-200 backdrop-blur-sm shadow-sm">
                        已下线
                      </span>
                    </div>
                  </div>

                  {/* 应用信息 */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-base font-bold mb-2 text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed h-[35px]">{app.desc}</p>

                    {/* 技术标签 */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {app.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className={`px-2 py-0.5 text-[10px] rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 源码按钮 - 始终在底部 */}
                    <Link
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 text-gray-600 mt-auto"
                    >
                      获取源码
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* 更多应用提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-8">更多有趣的应用正在开发中，敬请期待...</p>
          <Link
            href="/code"
            className="btn-gradient"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">学习如何开发</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

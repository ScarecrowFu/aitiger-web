"use client";

import { motion } from 'framer-motion';
import { FaWeixin, FaEnvelope } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';

// 动画配置
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

const CONTACT_ICONS = {
  wechat: FaWeixin,
  mp: IoNewspaper,
  email: FaEnvelope
};

const contactList = [
  { type: "wechat" as const, label: "微信", value: "fualan1990", color: "green", bgColor: "bg-green-50", borderColor: "border-green-200" },
  { type: "mp" as const, label: "公众号", value: "科虎AI", color: "blue", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
  { type: "email" as const, label: "邮箱", value: "contact@scitiger.cn", color: "purple", bgColor: "bg-purple-50", borderColor: "border-purple-200" }
];

const values = [
  { title: "不局限工具", desc: "不绑定单一平台，覆盖 Cursor、ChatGPT、Midjourney、Stable Diffusion 等主流AI工具", icon: "🔧", color: "from-blue-500 to-cyan-500" },
  { title: "聚焦实战场景", desc: "每个课程都围绕真实业务场景，从零到项目落地，学完即可上手", icon: "🎯", color: "from-purple-500 to-pink-500" },
  { title: "持续更新迭代", desc: "紧跟AI技术前沿，课程与资源库持续更新，社群内第一时间分享新动态", icon: "🚀", color: "from-orange-500 to-red-500" },
  { title: "社群共学共享", desc: "问题直达核心，精准解答；共享提示词库、模型资源、效率插件", icon: "🤝", color: "from-green-500 to-emerald-500" }
];

const features = [
  { title: "AI编程实战", desc: "Cursor AI 编程从入门到项目落地，涵盖图文教程与视频课程，零基础也能开发桌面工具和 Web 应用", icon: "💻", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
  { title: "AI创收分享", desc: "全栈开发上架、自媒体矩阵、工作流自动化、商业机会捕捉，助力一人公司成长变现", icon: "💰", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" },
  { title: "AI绘画课程", desc: "Midjourney 参数详解与风格定制、Stable Diffusion ControlNet 控制网络，从基础到出图全流程", icon: "🎨", bgColor: "bg-orange-50", borderColor: "border-orange-200" },
  { title: "ChatGPT精通", desc: "Prompt 进阶技巧、GPTs 开发、15种实用技巧，系统掌握 ChatGPT 的全部能力", icon: "🤖", bgColor: "bg-green-50", borderColor: "border-green-200" },
  { title: "工具与资源", desc: "图文+视频双教程、百度云资料库持续更新、高频 Q&A 避坑指南", icon: "📦", bgColor: "bg-purple-50", borderColor: "border-purple-200" },
  { title: "应用开发", desc: "已开发科虎AI创影、小蜜蜂智能助手、公众号图文助手等多款AI应用，源码开放学习", icon: "⚡", bgColor: "bg-cyan-50", borderColor: "border-cyan-200" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="max-w-[85%] mx-auto py-28 px-6 relative">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              关于科虎AI
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            不局限工具 · 聚焦实战场景 · 能力提升指南
          </p>
        </motion.div>

        {/* 关于我们 */}
        <motion.div
          {...fadeInUp}
          className="glass-card p-8 mb-12 border-l-4 border-blue-500"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              💡
            </span>
            关于我们
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            科虎AI 是一个专注于 AI 技术实战应用的学习社群。我们不局限于某一款工具，而是围绕真实场景，手把手教你用 AI 提升效率、开发产品、实现商业变现——从入门到独立落地项目。
          </p>
          <p className="text-gray-600 leading-relaxed">
            社群已沉淀 Cursor AI 编程、ChatGPT、Midjourney、Stable Diffusion 四大体系课程，配合图文教程、视频课程、资料库与 Q&A 指南，帮助你在 AI 时代快速建立核心竞争力。所有课程永久开放，自主掌握学习节奏。
          </p>
        </motion.div>

        {/* 核心理念 */}
        <motion.div
          {...fadeInUp}
          className="glass-card p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              🎯
            </span>
            核心理念
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white border border-gray-100 p-6 text-center hover:shadow-lg hover:border-gray-200 transition-all duration-300 overflow-hidden"
              >
                {/* 悬停渐变光效 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 我们提供什么 */}
        <motion.div
          {...fadeInUp}
          className="glass-card p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-cyan-100 flex items-center justify-center">
              📦
            </span>
            我们提供什么
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 联系我们 */}
        <motion.div
          {...fadeInUp}
          className="glass-card p-8"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
              📬
            </span>
            联系我们
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {contactList.map((item, index) => {
              const Icon = CONTACT_ICONS[item.type];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group flex items-center gap-4 px-8 py-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${item.color}-600`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="font-bold text-lg text-gray-900">{item.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

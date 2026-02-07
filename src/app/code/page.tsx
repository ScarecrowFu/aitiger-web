"use client";

import { motion } from 'framer-motion';

// 动画配置
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 }
};

// AI创收实战分享内容
const aiPracticeItems = [
  'Claude/Cursor 全栈开发实战：从零构建应用到App Store/Google Play上架全流程',
  'AI驱动的自媒体矩阵：自动化内容创作、多平台分发与爆款内容策略',
  'AI效率革命：日常工作流自动化改造与生产力提升方案',
  'AI风口洞察：前沿技术趋势解读与商业机会捕捉',
  '一人公司实战指南：AI赋能的超级个体成长路径与变现模式',
  'AI产品商业化实战：从MVP到盈利的完整商业路径'
];

// Cursor图文教程
const cursorTutorials = [
  '【图文教程】一：Cursor AI编程基础入门',
  '【图文教程】二：Cursor AI基本设置与操作',
  '【图文教程】三：Cursor AI 进阶技能1（Ctrl+K编辑、Tab自动补全、Chat、Composer）',
  '【图文教程】四：Cursor AI 进阶技能2（Cursor 的 @ Symbols 使用）',
  '【图文教程】五：初学者使用 Cursor Agent',
  '【图文教程】六：Git高效管理代码与版本',
  '【图文教程】七：理解Cursor Rules并运用'
];

// Cursor视频课程
const cursorVideos = [
  '章节一.Cursor AI快速上手：1. 认识AI编程 & Cursor AI快速入门',
  '章节一.Cursor AI快速上手：2. Cursor AI进阶技能：Chat和Composer、Tab自动补全、Control+K',
  '章节一.Cursor AI快速上手：3. @Symbols 、Cursor Agent、和 Cursor Rules',
  '章节一.Cursor AI快速上手：4. Git高效管理代码与版本',
  '章节一.Cursor AI快速上手：5. 写出第一个真正的程序：二维码生成器',
  '章节二.编程基础入门（针对零基础学员）：1. Python核心概念',
  '章节二.编程基础入门（针对零基础学员）：2. 用Python构建一个简单的待办事项Web应用',
  '章节三.快速构建可视化桌面工具：1.开发一个简单的桌面计算器工具',
  '章节三.快速构建可视化桌面工具：2.开发批量文件处理工具',
  '章节四.快速构建Web应用：1.快速创建个人简历网站（静态网站）',
  '章节四.快速构建Web应用：2.开发个人博客网站（动态网站）',
  '【实战项目】：AI全自动视频生成和剪辑工具part1(含代码与打包工具)',
  '【实战项目】：AI全自动视频生成和剪辑工具part2',
  '【实战项目】：AI全自动视频生成和剪辑工具part3',
  '【实战项目】：AI全自动视频生成和剪辑工具part4',
  '【实战项目】：AI全自动视频生成和剪辑工具part5'
];

// ChatGPT课程
const chatgptCourses = [
  'ChatGPT基础认知',
  'ChatGPT快速入门操作',
  'Prompt进阶技巧',
  'ChatGPT高级功能(GPTs)',
  'ChatGPT应用扩展',
  '特别篇-15种ChatGPT的实用技巧'
];

// Midjourney课程
const midjourneyCourses = [
  'Midjourney-1.账号注册',
  'Midjourney-基础用法',
  'Midjourney-imagine指令',
  'Midjourney- 参数详解(--ar--c--iw--q)',
  'Midjourney- 参数详解(--no--r--seed--stop)',
  'Midjourney- 参数详解--style--stylize--w--cref--',
  '参数详解(--tile--video--p--fast--relax--turbo)',
  '获取&精简提示词(describe&shorten)',
  'Settings指令详细讲解',
  '图像局部重绘与扩充(Upscale&Vary&remix&Zoom)',
  '预设提示词&自定义参数(prefer suffix&prefer option )',
  '图像融合(blend)',
  '风格调节(Style Tuner )',
  '其他指令详解',
  '实战范例-修改人物-人物换脸'
];

// Stable Diffusion课程
const sdCourses = [
  '本地安装部署云端部署在线网站使用',
  'webui主界面设置与详解',
  'SD概念理解',
  'CheckPoint大模型、VAE辅助模型、Lora微调模型详解',
  'HypernetWork超文本网络、embedding文本倒置详解',
  '关键词使用技巧',
  '高清修复、 Refiner',
  '采样器和调度器',
  '插件安装插件推荐',
  '图生图',
  'ControlNet控制网络概念与安装方法',
  'ControlNet界面参数详解',
  'ControlNet图像特征控制',
  'ControlNet结构与姿态控制',
  'ControlNet参考与修改控制',
  'ControlNet适配器与其他特殊控制'
];

// 课程列表项组件
const CourseItem = ({ item, index, color }: { item: string; index: number; color: string }) => {
  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  };
  const cls = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl ${cls.bg} border ${cls.border} hover:shadow-sm transition-all duration-300 group`}>
      <span className={`flex-shrink-0 w-6 h-6 rounded-md bg-white ${cls.text} text-xs font-bold flex items-center justify-center border ${cls.border} shadow-sm`}>
        {index + 1}
      </span>
      <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
    </div>
  );
};

export default function CodePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-28 relative">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              AI社群
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            本社群不局限于使用哪些工具，均是基于实际场景，分享如何利用AI提升自己的能力，创造营收。
            <br />
            <span className="text-gray-500">社群已经有大量基础课程，有兴趣的可以先自行观看。</span>
          </p>
          <a
            href="https://t.zsxq.com/jYnSj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient mt-8"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              加入社群
            </span>
          </a>
        </motion.div>

        {/* 一. AI创收实战分享 */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-purple-600">一.</span>
            <span className="text-gray-900">AI创收实战分享</span>
          </h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {aiPracticeItems.map((item, idx) => (
                <CourseItem key={idx} item={item} index={idx} color="purple" />
              ))}
            </div>
          </div>
        </motion.section>

        {/* 二. 基础课程 */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-blue-600">二.</span>
            <span className="text-gray-900">基础课程</span>
          </h2>

          <div className="space-y-8">
            {/* Cursor AI 编程 */}
            <div className="glass-card p-8 border-l-4 border-blue-500">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="text-2xl">💻</span>
                [Cursor AI 编程 * 从小白到项目落地]
              </h3>

              {/* 视频课程目录大纲 */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-purple-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  视频课程目录大纲
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cursorVideos.map((item, idx) => (
                    <CourseItem key={idx} item={item} index={idx} color="blue" />
                  ))}
                </div>
              </div>

              {/* 新手快速入门图文教程 */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-600 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  新手快速入门图文教程
                </h4>
                <div className="space-y-2">
                  {cursorTutorials.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-blue-500 text-sm mt-0.5">▸</span>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ChatGPT课程 */}
            <div className="glass-card p-8 border-l-4 border-green-500">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                [ChatGPT从零开始快速入门到精通]
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {chatgptCourses.map((item, idx) => (
                  <CourseItem key={idx} item={item} index={idx} color="green" />
                ))}
              </div>
            </div>

            {/* Midjourney课程 */}
            <div className="glass-card p-8 border-l-4 border-orange-500">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                [Midjourney小白零基础入门进阶]
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {midjourneyCourses.map((item, idx) => (
                  <CourseItem key={idx} item={item} index={idx} color="orange" />
                ))}
              </div>
            </div>

            {/* Stable Diffusion课程 */}
            <div className="glass-card p-8 border-l-4 border-pink-500">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="text-2xl">🖼️</span>
                [Stable Diffusion WebUI小白零基础入门进阶]
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sdCourses.map((item, idx) => (
                  <CourseItem key={idx} item={item} index={idx} color="pink" />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* 三. 常见问题与指南 */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-blue-600">三.</span>
            <span className="text-gray-900">常见问题与指南</span>
          </h2>
          <div className="glass-card p-8">
            <p className="text-gray-600 leading-relaxed">
              会收集和整理大家在使用AI的过程中出现的问题和解决办法或者建议，还会有各种常见步骤的操作指南。
            </p>
          </div>
        </motion.section>

        {/* 四. 分享工具 */}
        <motion.section {...fadeInUp} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-blue-600">四.</span>
            <span className="text-gray-900">分享工具</span>
          </h2>
          <div className="glass-card p-8">
            <p className="text-gray-600 leading-relaxed">
              在这里会分享大家在学习时可能需要的一些文档资料或工具资源。
            </p>
          </div>
        </motion.section>

        {/* 底部提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500">
            更多课程内容持续更新中...
          </p>
        </motion.div>
      </div>
    </div>
  );
}

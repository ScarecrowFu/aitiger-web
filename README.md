# 科虎AI - 专业的AI学习与应用平台

科虎AI是一个专注于AI技术学习与商业应用的教育平台。通过系统化的课程体系、实战项目指导和社群交流，我们致力于帮助更多人掌握AI技术，实现商业价值。

## 🌟 特性

- 💡 **AI商业落地实战**: 系统化的AI应用学习路径，助你快速掌握核心技能
- 🎨 **AI编程教学**: 从零基础到项目实战的完整学习体系
- 🛠️ **AI工具箱**: 精选数百个实用AI工具和创作素材
- 📱 **实战项目**: 真实可用的AI应用项目案例
- 📚 **资料分享**: 持续更新的AI学习资源库

## 🚀 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 9.0.0 或更高版本

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/yourusername/aitiger-web.git

# 进入项目目录
cd aitiger-web

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 🏗️ 项目结构

```
aitiger-web/
├── public/          # 静态资源
│   ├── images/      # 图片资源
│   └── content/     # JSON 内容文件
├── src/
│   ├── app/         # 页面组件
│   ├── components/  # 共享组件
│   ├── types/       # TypeScript 类型定义
│   └── utils/       # 工具函数
├── nginx/           # Nginx 配置文件
└── deploy/          # 部署相关脚本
```

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **部署**: PM2 + Nginx

## 📚 主要功能模块

### AI商业落地
- 系统化的AI应用学习课程
- 实战案例分析
- 商业变现指导

### AI编程教学
- 从入门到精通的编程教程
- 实战项目开发
- 技术难点解析

### AI工具箱
- AI工具资源导航
- 使用教程
- 应用场景推荐

### 实战项目
- AI双色球预测系统
- OKX交易机器人
- AI提示词工程师

### 资料分享
- AI学习资源库
- 项目源码
- 技术文档

## ⚙️ 配置说明

### 环境变量
创建 `.env.local` 文件：
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

### Nginx 配置
详见 `nginx/aitiger.conf`

## 📦 部署指南

### 自动部署
使用部署脚本：
```bash
./deploy.sh
```

### 手动部署步骤
1. 拉取最新代码
2. 安装依赖
3. 构建项目
4. 配置 Nginx
5. 启动服务

## 🤝 贡献指南

1. Fork 本项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 发起 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详细信息

## 📞 联系我们

- 微信：fualan1990
- 公众号：科虎AI
- 邮箱：contact@scitiger.cn

## 🙏 鸣谢

感谢所有为本项目做出贡献的开发者！

---

© 2024 科虎AI. All Rights Reserved.
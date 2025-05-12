# 高中题库管理系统前端

这是一个完整的高中题库管理系统前端，使用React、TypeScript和Material UI构建。该系统旨在帮助高中学生和教师高效管理学习资源、进行练习和追踪学习进度。

## 功能特点

- **题目练习**: 按学科、章节、难度筛选题目进行练习
- **错题本**: 自动收集错题，支持重点复习
- **学习进度**: 追踪各学科的学习进度和掌握情况
- **智能推荐**: 基于学习情况智能推荐适合的题目
- **讨论社区**: 学生和教师可以针对题目进行讨论交流
- **复习计划**: 系统自动生成个性化复习计划

## 技术栈

- **React**: 用户界面库
- **TypeScript**: 类型安全的JavaScript超集
- **Material UI**: 现代化UI组件库
- **Redux Toolkit**: 状态管理
- **React Router**: 路由管理
- **Axios**: HTTP请求
- **Chart.js**: 图表可视化
- **KaTeX**: 数学公式渲染

## 开始使用

### 前提条件

- Node.js (v14.0+)
- npm 或 yarn

### 安装

1. 克隆仓库
```bash
git clone https://github.com/T332932/high-school-question-bank-frontend.git
cd high-school-question-bank-frontend
```

2. 安装依赖
```bash
npm install
# 或
yarn install
```

3. 配置环境变量
创建`.env`文件（参照`.env.example`），设置API地址

4. 启动开发服务器
```bash
npm start
# 或指定端口
npm run start:3002
```

## 部署

构建生产版本：
```bash
npm run build
```

这将在`build`目录生成静态文件，可以部署到任何静态文件服务器。

## 后端API

该前端应用需要配合高中题库管理系统后端API使用：
[高中题库管理系统后端](https://github.com/T332932/high-school-question-bank-backend)

## 贡献指南

欢迎通过Issue和Pull Request参与项目贡献。请先阅读贡献指南。

## 许可证

本项目采用MIT许可证
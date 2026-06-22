# AirHua-byte.github.io

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](./LICENSE)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black)](https://threejs.org/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![Stars](https://img.shields.io/github/stars/AirHua-byte/AirHua-byte.github.io?style=social)](https://github.com/AirHua-byte/AirHua-byte.github.io/stargazers)

一个基于 Three.js/WebGL 的 3D 个人网站模板，可用于制作交互式作品集，并部署到 GitHub Pages。

这个仓库是一个可复用的 3D Portfolio Starter，使用 Three.js、Ammo.js
物理引擎、自定义贴图、Shader 资源和 Webpack 静态构建流程。它适合想要快速搭建
个人 3D 网站的前端开发者，你可以替换链接、展板图片、技能图标和项目入口，把它改成
自己的个人主页或作品展示页。

## 目录

- [在线预览](#在线预览)
- [项目亮点](#项目亮点)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [自定义指南](#自定义指南)
- [项目结构](#项目结构)
- [部署](#部署)
- [维护状态](#维护状态)
- [贡献](#贡献)
- [安全](#安全)
- [致谢](#致谢)
- [许可证](#许可证)

## 在线预览

- GitHub Pages: <https://airhua-byte.github.io>
- 个人演示站: <https://love.huabyte.com>
- 预览视频: <https://assets.huabyte.com/blog/image/Tab-1645529042263.webm>

## 项目亮点

- 使用 Three.js 和 WebGL 渲染沉浸式 3D 场景。
- 使用 Ammo.js 实现带物理效果的地球小球交互。
- 支持桌面键盘控制，也包含移动端触摸控制。
- 3D 场景中的对象可以点击跳转到 GitHub、博客、音乐站、邮箱等个人链接。
- 展板贴图可替换，方便展示项目、作品或个人介绍。
- 包含 Shader、镜头光晕、粒子、3D 文本等视觉资源。
- 构建后是静态页面，可部署到 GitHub Pages 或其他静态托管平台。

## 技术栈

- JavaScript
- Three.js
- Ammo.js
- WebGL Shaders
- Webpack 4
- Express，可选本地静态服务

## 快速开始

### 环境要求

- 推荐使用 Node.js 14 或 16。这个项目仍使用较旧的 Webpack 4 工具链。
- npm

> Node.js 17+ 可能遇到旧版 Webpack 4 的 OpenSSL 兼容问题。如果只是想先运行和改
> 资源，建议直接使用 Node.js 16，最省心。

### 安装依赖

```bash
npm install
```

### 本地运行

```bash
npm run dev
```

开发服务默认运行在：

```text
http://localhost:8082
```

### 构建

```bash
npm run build
```

### 本地静态服务

```bash
npm start
```

## 自定义指南

大部分个人内容集中配置在
[`src/resources/textures.js`](./src/resources/textures.js)。

### 修改项目展板

把下面这些图片路径替换成你自己的透明 PNG/JPG 资源：

```js
billboardTextures.blogTexture = '../src/jsm/blog.png';
billboardTextures.musicTexture = '../src/jsm/music.png';
billboardTextures.fundTexture = '../src/jsm/fund.png';
```

### 修改个人链接

修改 `URL` 对象即可更新点击跳转地址：

```js
URL.blog = 'https://your-domain.com';
URL.gitHub = 'https://github.com/your-name';
URL.email = 'mailto:you@example.com';
```

### 替换图标和视觉资源

视觉资源主要放在 [`src/jsm`](./src/jsm)。替换文件时请保持文件名大小写一致，尤其是
在 macOS、Windows、Linux 之间协作时。

常用资源：

- `blog.png`、`music.png`、`fund.png`：展板图片。
- `githubLogo.png`、`bilibili.png`、`qq.png`、`envelope.png`：链接图标。
- `pc-control.png`、`mobile-control.png`：操作提示图。
- `fragment.glsl`、`vertex.glsl`：Shader 源码。
- `earth.jpg`、`woodTexture.jpg`、`stone.png`：场景材质。

### 场景和交互文件

- [`src/app.js`](./src/app.js)：主场景入口和物理循环。
- [`src/resources/world.js`](./src/resources/world.js)：渲染器、相机、灯光、粒子和世界初始化。
- [`src/resources/surfaces.js`](./src/resources/surfaces.js)：文本和场景表面元素。
- [`src/resources/eventHandlers.js`](./src/resources/eventHandlers.js)：桌面端和移动端控制。
- [`src/resources/utils.js`](./src/resources/utils.js)：拾取、悬浮、点击和相机辅助函数。

## 项目结构

```text
.
├── build/                  # 构建生成的静态文件
├── src/
│   ├── app.js              # 主应用入口
│   ├── WebGL.js            # WebGL 能力检测
│   ├── jsm/                # 贴图、图标、字体、Shader
│   ├── libs/               # Ammo.js 运行时文件
│   └── resources/          # 场景、控制、贴图、工具函数
├── index.html              # 静态入口页面
├── style.css               # 全局样式
├── webpack.config.js       # Webpack 构建配置
├── server.js               # 可选 Express 静态服务
└── deploy.sh               # 手动部署到 GitHub Pages 的辅助脚本
```

## 部署

### GitHub Pages

如果你想部署为用户或组织主页，仓库名通常应为：

```text
<username>.github.io
```

然后进入仓库的 Settings -> Pages，选择用于发布的分支或目录。等待几分钟后，GitHub
Pages 会生成访问地址。

### 手动部署脚本

仓库里包含 [`deploy.sh`](./deploy.sh)。如果你 fork 之后使用它，请先检查脚本中的
目标 Git 地址，改成你自己的仓库。

```bash
npm run build
npm run deploy
```

## 维护状态

这个项目会作为一个面向学习和复用的 Three.js/WebGL 作品集模板继续维护。

当前维护重点：

- 让安装、运行和部署文档更清晰；
- 处理依赖和安全相关问题；
- 补充现代 Node.js 版本兼容说明；
- 接受聚焦于文档、构建问题和自定义示例的小型修复。

## 贡献

欢迎提交 Issue 和 Pull Request，尤其是文档、构建兼容性、资源替换示例、安全和依赖维护
相关的改进。

提交 PR 前请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 安全

如果发现敏感安全问题，请不要直接提交公开 Issue。报告流程见
[SECURITY.md](./SECURITY.md)。

## 致谢

这个项目改编并借鉴自
[0xFloyd/Portfolio_2020](https://github.com/0xFloyd/Portfolio_2020)。也感谢
Three.js 社区和开源示例，让 WebGL 学习变得更容易上手。

## 许可证

[ISC](./LICENSE) © AirHua-byte。

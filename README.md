# OORT.SH 托管平台网站

![Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue)
![Nuxt 3](https://img.shields.io/badge/Nuxt-3.15-00DC82)
![Vue 3](https://img.shields.io/badge/Vue-3-42B883)

OORT.SH 托管平台官方网站项目，面向开发者展示私有化部署、云部署、应用托管、服务开发、基础云能力与 AI 原生开发体验。

网站核心主张是：通过基础设施云化、软硬件解耦、数据与业务解耦、应用与平台解耦，构建开放技术架构和业务生态。

<p align="center">
  <img src="./src/assets/SHimg/SH_c1.png" alt="OORT.SH 首页首屏" width="760" />
</p>

## 网站内容

### 中文站

- **首页**：OORT.SH 托管平台介绍，覆盖托管应用、托管服务、服务开发、应用开发、应用市场、服务目录、基础服务、开发者社区、基础云能力、AI Studio、竞品分析、使用成效和私有化方案。
- **产品中心**：按计算、存储、网络、数据库、安全与合规、容器、应用中间件、管理与监督、人工智能、开发与运维、企业应用、云通信、视频等分类展示云托管平台产品。
- **行业方案**：展示移动警务、情指行融合指挥、智慧城市等场景，强调容器云、微服务和 aPaaS 应用支撑平台能力。
- **资源中心**：提供开发环境、OortCloud AI Studio、开放能力、开发文档、开发模板、下载中心、生态资源等内容入口。
- **社区页面**：包含品牌权益、客户案例、定制开发、文档、教育视频、近期活动、安全、支持、合作伙伴和隐私内容。

### 英文站

- **Home**：介绍下载、安装并拥有自己的全球部署基础设施。
- **Features**：展示即时部署、多语言框架支持、自动伸缩、企业安全、AI Agent 托管、数据库、多区域部署、应用市场和统一门户。
- **Deploy**：说明 AI Agents、Chatbots、Web Apps、APIs、Mobile Backends、Extensions、Workers、Databases 等部署对象和工作流程。
- **AI Studio**：展示 AI 原生云 IDE、AI 编码、IDE 内一键部署、模板脚手架、团队协作、VS Code 兼容和云边协同开发。
- **Enterprise / Pricing / Docs**：面向企业、价格和文档内容的英文展示页。

## 页面预览资源

README 已引用项目内首页图片。开源仓库中可继续使用这些静态资源作为页面预览：

<p align="center">
  <img src="./src/assets/SHimg/SH_c1.png" alt="托管应用模块" width="360" />
  <img src="./src/assets/SHimg/SH_c2.png" alt="托管服务模块" width="360" />
</p>

<p align="center">
  <img src="./src/assets/img/cjxm.png" alt="AI Studio 创建项目" width="250" />
  <img src="./src/assets/img/kfhj.png" alt="AI Studio 开发环境" width="250" />
  <img src="./src/assets/img/kswd.png" alt="AI Studio 快速稳定" width="250" />
</p>

## 技术栈

- Nuxt 3
- Vue 3
- Element Plus
- Pinia
- Vue I18n
- Swiper
- Less / Sass
- postcss-px-to-viewport

## 项目结构

```text
src/
  assets/        静态图片与样式资源
  components/    通用导航、底部、英文站布局等组件
  pages/         中文站、英文站和产品页面
  public/        favicon、视频、资源中心静态 HTML
  stores/        Pinia 状态模块
  utils/         工具函数
```

## 本地运行

推荐使用 pnpm。

```bash
pnpm install
pnpm start
```

默认开发地址：

```text
http://localhost:8080
```

## 构建与预览

```bash
pnpm build
pnpm preview
```

静态生成：

```bash
pnpm generate
```

## 路由入口

- `/`：根据浏览器语言跳转到中文站或英文站。
- `/zh/`：中文首页。
- `/zh/sh/oortSH`：OORT.SH 托管平台中文主页。
- `/zh/sh/productSH`：云托管平台产品页。
- `/zh/sh/industry`：行业产品与方案页。
- `/zh/resourceCenter`：资源中心。
- `/en/`：英文首页。
- `/en/features`：英文能力介绍。
- `/en/deploy`：英文部署介绍。
- `/en/ai-studio`：英文 AI Studio 介绍。

## 开源协议

本项目使用 [Apache License 2.0](./LICENSE) 开源协议。

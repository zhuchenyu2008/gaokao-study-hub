# 逐光高考课堂

一个面向高考备考场景的多页面在线学习网站原型，采用清爽的蓝白教育产品风格，包含课程浏览、课程详情、视频学习和用户中心等完整页面。

> 在线体验：[gaokao-study-hub.zhuchenyu2008897488.chatgpt.site](https://gaokao-study-hub.zhuchenyu2008897488.chatgpt.site)

## 项目功能

- **学习首页**：今日学习计划、剩余课程、连续学习天数和课程进度
- **课程列表**：语文、数学、英语等高考课程展示
- **课程详情**：课程简介、章节目录、学习进度和配套资料
- **视频学习页**：播放器界面、课程目录和本节知识要点
- **模拟加载状态**：点击播放后持续显示“课程正在加载中”
- **用户中心**：展示学生身份、账户余额、已购课程和最近学习记录
- **响应式布局**：适配桌面端、平板和手机端

## 演示数据

本项目目前使用前端硬编码数据，用于界面展示：

| 项目 | 内容 |
| --- | --- |
| 用户 | 朱辰宇 |
| 身份 | 学生 |
| 账户余额 | ¥0.00 |
| 已购课程 | 20 门 |
| 今日剩余课程 | 1/2 |

## 页面结构

```text
首页 /
├── 课程详情 /course/math-functions
│   └── 视频学习 /learn/derivative-monotonicity
└── 用户中心 /profile
```

## 技术栈

- React 19
- Next.js 16
- Vinext
- TypeScript
- Tailwind CSS 4
- Cloudflare Workers 构建环境

## 本地运行

### 环境要求

- Node.js 22.13.0 或更高版本
- npm

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

启动后根据终端提示打开本地地址。

## 构建项目

```bash
npm run build
```

构建产物会生成在 `dist/` 目录中。

## Docker 部署

### 环境要求

- Docker Engine
- Docker Compose v2

### 使用 Docker Compose 一键部署

```bash
git clone https://github.com/zhuchenyu2008/gaokao-study-hub.git
cd gaokao-study-hub
docker compose up -d --build
```

部署完成后访问：

```text
http://服务器IP:3000
```

默认使用宿主机的 `3000` 端口。需要更换端口时，可以通过 `APP_PORT` 指定，例如映射到 `8080`：

```bash
APP_PORT=8080 docker compose up -d --build
```

常用管理命令：

```bash
# 查看运行状态
docker compose ps

# 查看实时日志
docker compose logs -f

# 拉取最新代码并重新构建
git pull
docker compose up -d --build

# 停止并删除容器
docker compose down
```

### 直接使用 Docker 部署

```bash
docker build -t gaokao-study-hub .
docker run -d \
  --name gaokao-study-hub \
  -p 3000:3000 \
  --restart unless-stopped \
  gaokao-study-hub
```

### 反向代理

使用 Nginx、宝塔面板或其他反向代理时，将目标地址设置为：

```text
http://127.0.0.1:3000
```

如果修改了 `APP_PORT`，反向代理端口也要同步修改。正式对外提供服务时，建议配置域名和 HTTPS。

## 主要目录

```text
app/
├── page.tsx                 # 学习首页
├── globals.css              # 全局样式与响应式布局
├── course/[id]/page.tsx     # 课程详情页
├── learn/[lesson]/page.tsx  # 视频学习页
└── profile/page.tsx         # 用户中心
```

## 说明

- 这是一个界面与交互原型，暂未接入真实课程、支付或用户数据库。
- 视频播放器用于演示加载状态，不会播放真实视频。
- 页面中的课程、账户和学习数据均为模拟数据。
- Docker 容器默认监听 `0.0.0.0:3000`，并带有健康检查和自动重启配置。

## 许可证

本项目仅供学习、交流和界面演示使用。

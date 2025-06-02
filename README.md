
# 🌸 My Furigana App

一个基于 **Next.js + TypeScript + Tailwind CSS** 的日语注音学习工具，支持多语言页面、文档保存、注音处理，未来将整合 Solana 区块链存储。

---

## 🚀 项目启动方式（使用 Docker + Yarn）

### ✅ 第一次启动（构建镜像）
仅当你修改了 Dockerfile、依赖、或环境变更时才需要：

```bash
docker-compose build
```

---

### ▶ 正常开发流程（之后只需要这样）

```bash
docker-compose up
```

然后访问：

- [http://localhost:3000/ja](http://localhost:3000/ja)
- [http://localhost:3000/en](http://localhost:3000/en)
- [http://localhost:3000/zh](http://localhost:3000/zh)

---

## 📦 项目结构说明

```
/src
  ├── app/[locale]/page.tsx      ← 多语言入口页面
  ├── components/                ← 输入框 / 按钮组件
  ├── lib/i18n.ts                ← JSON 文案加载器
  ├── messages/ja.json           ← 日文界面文案
  └── ...
/Dockerfile                      ← Node + Yarn + Rust + Solana CLI + Python
/docker-compose.yml              ← 一键启动容器
```

---

## 🧱 常见命令备忘

```bash
# 构建容器（仅首次或有变更时）
docker-compose build

# 启动开发（热更新）
docker-compose up

# 停止容器
Ctrl + C

# 删除已构建容器（可选清理）
docker-compose down
```

---

## 🧠 未来计划（你可以继续推进）

- ✅ 保存输入内容到本地
- 🔜 整合 Python 注音引擎（FastAPI）
- 🔜 将文档结构映射为 Markdown + 区块存储
- 🔜 使用 Anchor 合约存证、NFT 绑定原文

---

🪄 by Baby & 槐溯 💖

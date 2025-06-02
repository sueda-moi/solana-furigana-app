# Dockerfile
FROM rust:1.85-slim AS base

# 安装系统依赖（含 Python3）
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    pkg-config \
    libssl-dev \
    libudev-dev \
    llvm \
    clang \
    protobuf-compiler \
    git \
    nodejs \
    npm \
    python3 \
    python3-pip \
    && apt-get clean

# 安装 Solana CLI 2.1.15
RUN sh -c "$(curl -sSfL https://release.anza.xyz/v2.1.15/install)" && \
    echo 'export PATH="/root/.local/share/solana/install/active_release/bin:$PATH"' >> /root/.bashrc
ENV PATH="/root/.local/share/solana/install/active_release/bin:$PATH"

# 安装 Node.js 20 + Yarn 1.22
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g n && n 20 && \
    npm install -g yarn@1.22.1

# 安装 Anchor CLI
RUN cargo install --git https://github.com/coral-xyz/anchor --tag v0.31.1 anchor-cli

# 设置工作目录
WORKDIR /app

# 拷贝依赖文件
COPY package.json yarn.lock ./

RUN yarn install

# 拷贝剩余项目文件
COPY . .

# 暴露端口
EXPOSE 3000

# 启动 Next.js 前端
CMD ["yarn", "dev"]

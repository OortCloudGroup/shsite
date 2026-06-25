#!/usr/bin/env bash

# 这个脚本将 AI 生成的 thirdHtml 文件夹中的内容复制到 dist 目录下的 en 文件夹中
# 以便在生成静态站点时包含这些文件

set -euo pipefail

SOURCE_DIR="thirdHtml"
TARGET_DIR="dist/en"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "[copyEn] 未找到源目录: $SOURCE_DIR，跳过复制。"
  exit 0
fi

# 如果目标目录已存在，先删除
if [ -d "$TARGET_DIR" ]; then
  rm -rf "$TARGET_DIR"
fi

mkdir -p "$TARGET_DIR"

# 复制 en 目录下所有文件（包含隐藏文件）到 dist/en
cp -R "$SOURCE_DIR"/. "$TARGET_DIR"/

echo "[copyEn] 已完成复制: $SOURCE_DIR -> $TARGET_DIR"

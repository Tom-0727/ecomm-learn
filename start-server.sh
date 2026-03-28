#!/bin/bash
# 启动本地HTTP服务器访问学习网站
# 用法: bash start-server.sh

PORT=8080
echo "正在启动学习网站服务器..."
echo "打开浏览器访问: http://localhost:${PORT}"
echo "按 Ctrl+C 停止服务器"
echo ""

cd "$(dirname "$0")"
python3 -m http.server $PORT

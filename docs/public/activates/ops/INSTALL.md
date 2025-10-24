# Linux虚拟机安装指南

## VM 安装
- 适用：强隔离、接近真实服务器，但在笔记本无核显的情况下无法配置显卡直通。
- 准备：启用虚拟化；下载VMware workstation：可自行前往官网下载（需注册账号）或使用以下链接：https://download.yuna.asia/VMware-workstation-full-17.6.4-24832109.exe ；下载 Ubuntu22.04的iso镜像：https://mirrors.ustc.edu.cn/ubuntu-releases/22.04/ubuntu-22.04.5-desktop-amd64.iso 。
- 创建 VM：`CPU 2–4`、`内存 4–8GB`、`磁盘 40–80GB`、网络选 `NAT/Bridged`。

## WSL 安装
- 适用：开发与 Windows 深度互通，同时在笔记本没有核显的情况下默认配置好了显卡直通。
- 管理员 PowerShell：`wsl --install`；设为 `WSL 2`：`wsl --set-default-version 2`；安装 `Ubuntu-22.04`：`wsl --install -d Ubuntu-22.04`。

## 选择建议
- 开发优先选 `WSL 2`。
- 需要强隔离/固定网络配置选 `VM`。
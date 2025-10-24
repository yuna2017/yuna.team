# 目录
- STEG介绍
- 图片隐写
	 - 文件结构
	 - png、jpg格式图片修改宽高
	 - binwalk、foremost文件提取
	 - EXIF信息
	 - GIF图片隐藏
	 - Base64转图片
	 - 图片盲水印
- 压缩包隐写
	 - 暴力破解
	 - 掩码攻击
	 - 伪加密
	 - 明文攻击
	 - CRC32碰撞

**有兴趣的同学**可以提前查阅资料预习和尝试解出课上的例题
## 1、课程实用工具：
（课上我用到的给出了安装包）
### 1.010editor - 二进制编辑器
	- [SweetScape Software Inc - 下载 010 编辑器](https://www.sweetscape.com/download/010editor/)
### 2.StegSolve - steg方面工具集成
    [stegsolve](https://github.com/Giotino/stegsolve)
	    使用JAVA开发，使用前需要先配置JAVA环境。
### 3.TweakPNG - PNG图片修改工具
### 4.binwalk、foremost - 文件提取工具
[Foremost](https://foremost.sourceforge.net/)
### 5.EXIF信息查看器 - 在线工具
直接搜索即可
### 6.Base64转图片 - 在线工具
同上，带有一个简单脚本 `base64_to_img`
### 7.ARCHPR - 压缩包密码恢复工具
`Advanced RAR Password Recovery`
### 8.CRC爆破脚本
[Dr34nn/CRC_Cracker: 自动爆破crc32值并输出，支持中文crc32爆破](https://github.com/Dr34nn/CRC_Cracker)

### 9.BlindWaterMark
[chishaxie/BlindWaterMark: 盲水印 by python](https://github.com/chishaxie/BlindWaterMark#blindwatermark)

## 2、JAVA环境配置：
[Java 下载 |甲骨文 ](https://www.oracle.com//downloads/)
打开“此电脑”，右键选择属性，选择高级系统设置。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/050ca488a52b5f4ec9b28fa2f4856e99.png)  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/91467f0aa128f29ce5dd44d82be02eb9.png)  
在系统变量区域，点击新建：变量值为 jdk 的安装路径。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ed04512a2ff36286c37292268984483d.png)  
新建变量名：CLASSPATH ，变量值： .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7acbfcad85d8175c8bbf9c575f6a546a.png)  
找到Path变量，双击编辑 Path变量：

点击新建，变量值为%JAVA_HOME%\bin ，并将它移到最前端，然后点击确定。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/112233d8351690747c5c6ae8218d4065.png)  
这样就配置完成了。
	    `java -jar Stegsolve.jar`

## 3、Foremost使用方法
解压压缩包，打开文件夹“foremost-master”

![](https://i-blog.csdnimg.cn/direct/6e858ae4f0b74cb293daae93a49822f1.png)

接着打开文件夹“binary”

![](https://i-blog.csdnimg.cn/direct/51c930f80e884a789bfa282d26a7d344.png)

 在上方输入cmd后按回车（enter）

![](https://i-blog.csdnimg.cn/direct/6c0882e747b7468d936066e1ea6e4220.png)


```undefined
foremost 文件地址
```

文件地址获取方法：右键文件点击“复制文件地址”，或者按Ctrl+Shift+C

![](https://i-blog.csdnimg.cn/direct/3069b8f4dca945cba1456971cbb0d502.png)

例如：

```csharp
foremost   "C:\Users\41299\Desktop\Sleeping_Beauty_3.png" 
```

![](https://i-blog.csdnimg.cn/direct/4cca07e6ab7041be8349e461bf51b063.png)输入命令后可以看到目录内多了个文件夹“output” ，这样就成功**提取到隐藏文件了**
## 4、其他工具使用方法
### 1.打开StegSolve
cmd中输入命令`java -jar StegSolve-1.4.jar` 
![[Pasted image 20251021180726.png]]
### 2.使用CRC_Cracker
cmd中输入命令`crc32.exe <path_to_zip_archive>`
同时会在当前目录下生成一个output.txt,包含所有可能的flag
### 3.base64_TO_img脚本使用
打开文件替换其中的`base64_str`值并运行（需要安装python）
示例：python base64_TO_img.py -i base.txt -o image.png（会生成我的头像）
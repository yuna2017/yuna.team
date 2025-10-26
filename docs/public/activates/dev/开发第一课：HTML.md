# 开发第一课：HTML 🎉

- **前端是什么?**

<br/>

- **HTML是什么？**

  HTML（超文本标记语言——HyperText Markup Language）

<img src="https://youke1.picui.cn/s1/2025/10/24/68fb5adaa2936.png" width="300" height="300" >

## **HTML基础语法**

  - ### HTML示例 ###
  ```html
  
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>HTML示例</title>
    </head>
    <body>
      <p>这是一个简单的HTML示例</p>
    </body>
  </html>
  ```
  解释:
  `<!DOCTYPE html>`:声明HTML类型。（不区分大小写）

  `<html>`:html文档的根元素。
  
  `<head>`:文档的头部，包含文档的元数据。
  
  `<body>`:文档的主体。

  HTML使用 **_元素(element)_** 来呈现内容。一个元素通常由以下部分组成：

  ![grumpy-cat-small.png](https://free.picui.cn/free/2025/10/23/68f9e3bf42e86.png)

  一些常见的标签：

  - ### **标题(h1,h2,...h6)** ###

    ```html
    <h1>我是1级标题</h1>
    <h2>我是2级标题</h2>
    <h3>我是3级标题</h3>
    ```

    # 我是1级标题
    ## 我是2级标题
    ### 我是3级标题


  - ### **段落(p)** ###

    ```html
    <p>我是段落</p>
    ```
    我是段落

    *Tips*：想要实现换行  
    ❌回车  
    ✅使用标签`<br/>`

    示例：

    如果你使用回车

    ```html
    <p>第一行


     第二行</p>
    ```

    结果将会是：
    ```
    第一行 第二行
    ```
    因此我们需要使用`<br/>`标签来换行
    ```html
    <p>第一行<br>
    第二行</p>
    ```
    结果将会是：  
    ```
    第一行
    第二行
    ```
    这是因为html会把你的缩进转换为一个空格。

  - ### **列表（有序\无序）** ###
    
    有序列表用`ol`标签（ordered list）


    无序列表用`ul`标签(unordered list)

    每一项的内容用`<li>`标签
  ```html
  <ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第三项</li>
  </ol>
  ```
  <ol>
  <li>第一项</li>
  <li>第二项</li>
  <li>第四项</li>
  </ol>

   ```html
   <ul>
    <li>第一项</li>
    <li>第二项</li>
    <li>第三项</li>
   </ul>
   ```
    
  <ul>
   <li>第一项</li>
   <li>第二项</li>
   <li>第三项</li>
   </ul>
  
  - ### **表格(table)** ###

  
  `<table>`:表格

  `<thead>`:表头

  `<th>`:表头单元铬

  `<tbody>`:表格内容

  `<tr>`:行

  `<td>`:表格数据

```html
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>
```
<table>
  <thead>
    <tr>
      <th>列标题1</th>
      <th>列标题2</th>
      <th>列标题3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>行1，列1</td>
      <td>行1，列2</td>
      <td>行1，列3</td>
    </tr>
    <tr>
      <td>行2，列1</td>
      <td>行2，列2</td>
      <td>行2，列3</td>
    </tr>
  </tbody>
</table>
  
  

  不是所有的html元素都有内容。


  没有内容的标签我们称之为空标签。
  
  下面罗列一些例子：
  - `<br/>`：换行
  - `<img />`:图片
  - `<input />`:输入框

## **HTML属性**
   
   HTML属性是标签的属性。

   属性的写法如下：
   ![grumpy-cat-attribute-small.png](https://youke1.picui.cn/s1/2025/10/23/68fa0b36b1392.png)

   示例：

   ```html
   <p style="color: red;">我使用了段落的style属性</p>
   ```
   <p style="color: red;" >我使用了段落的style属性</p>

   - 一个标签也可以使用多个属性

   示例：
   ```html
   <p lang="ja" style="color: red; font-size: 20px;" >令</p>
   ```

   <p lang="ja" style="color: #7dcaa9; font-size: 25px;">令</p>


   ### 在网页中插入一张图片： ###
  ```html
  
  <img 
  src="https://youke1.picui.cn/s1/2025/10/23/68fa11a78cc09.png" 
  alt="企鹅学HTML.png" 
  title="a4364bbc769b6dd25526c268f68e34cb.png" 
  width="300px" 
  height="300px"
   />
  
  ```
  
  <img src="https://youke1.picui.cn/s1/2025/10/23/68fa11a78cc09.png" alt="企鹅学HTML.png" title="企鹅学HTML.png" width="300px" height="300px" />

  <br/>

  <img src="" alt="企鹅学HTML.png" title="无法正常显示的企鹅学HTML.png" width="300px" height="300px" />

  <br>


  
  ### 超链接标签`<a>`（锚 anchor） ###

  例如:

  ```html
  <a href="https://www.bilibili.com/video/BV1594nerEHv/?spm_id_from=333.337.search-card.all.click&vd_source=1bf8237f5657b36d3f54face3aa54414">
  
  疯狂星期四活动入口</a>
  ```

  <a href="https://www.bilibili.com/video/BV1594nerEHv/?spm_id_from=333.337.search-card.all.click&vd_source=1bf8237f5657b36d3f54face3aa54414">

  疯狂星期四活动入口</a>

  _**tips:**_ `href`属性初看不知何意味，其实它是 _**html reference**_ 的缩写。 


   ### **表单** ###

```html
  <form action="/" method="post">
    <!-- 文本输入框 -->
    <label for="name">用户名:</label>
    <input type="text" id="name" name="name" required>

    <br/>

    <!-- 密码输入框 -->
    <label for="password">密码:</label>
    <input type="password" id="password" name="password" required>

    <br/>

    <!-- 单选按钮 -->
    <label>性别:</label>
    <input type="radio" id="male" name="gender" value="male" checked>
    <label for="male">男</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女</label>

    <br/>

    <!-- 复选框 -->
    <input type="checkbox" id="subscribe" name="subscribe" checked>
    <label for="subscribe">订阅推送信息</label>

    <br/>

    <!-- 下拉列表 -->
    <label for="country">国家:</label>
    <select id="country" name="country">
        <option value="cn">CN</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
    </select>

    <br/>

    <!-- 提交按钮 -->
    <input type="submit" value="提交">
</form>
```


<form action="/" method="post">
    <!-- 文本输入框 -->
    <label for="name">用户名:</label>
    <input type="text" id="name" name="name" required>
  <br>
    <!-- 密码输入框 -->
    <label for="password">密码:</label>
    <input type="password" id="password" name="password" required>
    <br>
    <!-- 单选按钮 -->
    <label>性别:</label>
    <input type="radio" id="male" name="gender" value="male" checked>
    <label for="male">男</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">女</label>
    <br>
    <!-- 复选框 -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">订阅推送信息</label>
    <br>
    <!-- 下拉列表 -->
    <label for="country">国家:</label>
    <select id="country" name="country">
        <option value="cn">CN</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
    </select>
    <br>
    <!-- 提交按钮 -->
    <input type="submit" value="提交">
</form>

  
  ### 也可以使用  行内容器标签 `<span>` 来为行内部分内容设置属性 ###
   
   示例：
  
   ```html
   <p>我没有使用标签<span style="color: red;font-size:25px">我使用了&lt;span&gt;标签</span></p>
   ```
   <p>我没有使用标签。<span style="color: #dc8018;font-size:25px">我使用了&lt;span&gt;标签。</span></p>

 ### HTML还有 **块级元素标签** `<div>` ###

`<div>`帮助网页开发者更有组织的管理网页的元素。

  我们来看B站主页：

  首页顶部栏：
![bar.png](https://youke1.picui.cn/s1/2025/10/24/68fb33bb5b1df.png)

频道栏：
![channel.png](https://youke1.picui.cn/s1/2025/10/24/68fb33bb4f5fa.png)


具有相似类型和作用的元素组成一个集合，可以容纳在一个个`<div>`中，便于统一管理。😎

用法：
```html
<div id="container" style="width:500px">
 
<div id="header" style="background-color:#FFA500;">
<h1 style="margin-bottom:0;">主要的网页标题</h1></div>
 
<div id="menu" style="background-color:#dc8018;height:200px;width:100px;float:left;">
<b>菜单</b><br>
HTML<br>
CSS<br>
JavaScript</div>
 
<div id="content" style="background-color:#c7cccf;height:200px;width:400px;float:left;color:black;">
内容在这里</div>
```

<div id="container" style="width:500px;">
 
<div id="header" style="background-color:#FFA500;">
<h1 style="margin-bottom:0;">主要的网页标题</h1></div>
 
<div id="menu" style="background-color:#dc8018;height:200px;width:100px;float:left;">
<b>菜单</b><br>
HTML<br>
CSS<br>
JavaScript</div>
 
<div id="content" style="background-color:#c7cccf;height:200px;width:400px;float:left;color:black;">
内容在这里</div>
</div>



## **HTML5补充内容**

  - ### `<video>`标签 ###
  
  `<video>`标签可以让你在网页上嵌入自己的视频内容。


   ```html
   <video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
  </video>
  ```
  
  - ### `<audio>`标签 ###
  
  `<audio>`标签可以让你在网页上嵌入自己的音频内容。

  ```html
  <audio controls>
    <source src="horse.mp3" type="audio/mpeg">
    <source src="horse.ogg" type="audio/ogg">
  </audio>
  ```
  - ### 一些语义化标签 ### 
    - `<header>`标签:通常用于展示网页标题、导览等
  
    - `<footer>`标签:通常用于展示页脚信息，通常包含版权声明、联系方式等。
  
    - `<nav>`标签:通常用于表示导航链接
  ```html
  <header>
    <h1>我的网页标题</h1>
    <nav>
      <ul>
      <li><a href="#">主页</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">联系</a></li>
      </ul>
    </nav>
    <footer>&copy; 2025 保留所有权利</footer>
  ```


  <header>
    <h1>我的网页标题</h1>
    <nav>
      <ul>
      <li><a href="#">主页</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">联系</a></li>
      </ul>
    </nav>
    <footer>&copy; 2025 保留所有权利</footer>  
  </header>

<br/>


  - ### `<article>`标签 ###
  
   `<article>`标签定义独立的内容区域。


   `<section>`标签表示不同的区段。
   ```html
  <article>
    <section>
      <h2>标题 1</h2>
      <p>我是第一段的内容</p>
    </section>
    <section>
      <h2>标题 2</h2>
      <p>我是第二段的内容</p>
    </section>
    <section>
      <h2>标题 3</h2>
      <p>我是第三段的内容</p>
    </section>
  </article>
  ```

  <article>
    <section>
      <h2>标题 1</h2>
      <p>我是第一段的内容</p>
    </section>
    <section>
      <h2>标题 2</h2>
      <p>我是第二段的内容</p>
    </section>
    <section>
      <h2>标题 3</h2>
      <p>我是第三段的内容</p>
    </section>
  </article>

  - ### `<iframe>`标签 ###
  `<iframe>`标签用于在当前页面中嵌入其他网页。

  ```html
  <iframe src="https://www.bilibili.com/" width="700" height="400"></iframe>
  ```

  <iframe src="https://www.bilibili.com/" width="700" height="400"></iframe>

 ## HTML注释 ##
  HTML注释用于在网页中添加注释，不会被浏览器显示。
  ```html
  <!-- 这是HTML注释，我不会显示 -->
   <p>我是HTML段落，我正常显示</p>
  ```

  <!-- 这是HTML注释，我不会显示 -->
   <p>我是HTML段落，我正常显示</p>

   ## HTML转义字符 ##

   HTML转义字符用于在HTML中添加特殊字符（如"",'',<,>）。

   为什么需要使用转义字符？🤔

   ```html
   <p>0<1<2</p>
   ```
  **_浏览器会认为你的<是未闭合的标签！！！_** 🤯

字符|转义字符|说明|
|---|-------|---|
|<	|\&lt;		|	小于号（标签开始）|
|>	|\&gt;		|	大于号（标签结束）|
|&	|\&amp;	|		和号（避免被误认为实体开始）|
|"	|\&quot;	|	双引号（用于属性值）|
|'	|\&apos;	|	单引号（较少用）|

正确食用方法:
```html
<p>0&lt;1&lt;2</p>
```
这样就能保证浏览器正常显示你的字符。

# 致谢 #
<br/>

# 实践一下 #

自己尝试搭建一个HTML页面，使用多种元素，也请尽情添加你自己的想法和创意。🎨

# 补充资料 #

菜鸟教程: https://www.runoob.com/html/html-tutorial.html  

mdn web: https://developer.mozilla.org/zh-CN/docs/Web/HTML







   
    

   
# 开发第三课：JavaScript 


- **JavaScript是什么？**

  JavaScript 是一种轻量级的编程语言。

  JavaScript 是可插入 HTML 页面的编程代码。

  JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。

  JavaScript 很容易学习。

- **注：他会让你的页面很花里胡哨，看起来很炫.**

## **数据类型**
- **JavaScript有多种数据类型：数字，字符串（单引号，双引号，反引号），数据，对象等。**

```JS
var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值
```
而在这的基础上，又可以分为，基本数据类型（值类型）和引用数据类型（复杂类型）

- **值类型：**
 在存储时存储的是变量值本身，因此叫做值类型。
如：number,string,null等。

```JS
let num = 10
        let num2 = num
        num = 20
        console.log(num2)
```

- **复杂类型：**
在存储时存储的时变量的地址，故叫做引用类型。
如：array,object等。

```JS
let obj1={
            age:18
        }
        let obj2 = obj1
        obj1.age = 20
        console.log(obj2)
```
可以用上面的代码实践体会一下

- **类型转换**
- 隐式类型转换
  系统内部自动将数据类型进行转换

1.+号两边只要有一个是字符串，都会把另外一个转成字符串。（可以了解一下其他算数运算符，这里不多介绍）
2.+号作为正号解析可以转化成数字型

学姐OS：各位读到这里是不是有点懵，稍等，代码示例马上就来

 ```JS
let pink = '123'
console.log(1 + 1)
console.log(pink + 1) //转化前
 ``` 

 ```JS
 let pink = +'123'
 console.log(pink + 1) //转化后
 ```
 
3.任何数据和字符串相加结果都是字符串

- 显示类型转换
  自己告诉电脑你要转成什么类型

1.Number（数据）-转成数据类型
若里面有非数字，转换失败时结果为NaN（Not a Number）
2.parseInt(数据) -只保留整数
3.parseFloat(数据) -可以保留小数

大家可以自己下去试试，这里只给出几个例子：
  ```JS
  let str = '123'
        let a = 123
        console.log(Number(str))
        console.log(String(a)+1)
  ```

- **typeof操作符**  -检测变量的数据类型。
  
## **变量声明**
可以用var let const进行声明变量

var已经是过去式有一些缺点，故我们建议使用let和const

- **let**
  
  常用声明变量
  ```JS
  let variableName = value;
  ```
- **const**
  用于定义常量，即一旦赋值后，变量的值不能再被修改。可以参考下面的例子。
  ```JS
  const z = 10;
    // z = 20; // 报错，常量不可重新赋值
    if (true) {
    const z = 20; // 不同的常量
    console.log(z); // 输出 20
    }
    console.log(z); // 输出 10
  ```

## **函数的语法**
      function myFunction(var1,var2)
      {
      代码
      }
      举个栗子吧
  ```HTML
  <p>点击这个按钮，为你带来魔法</p>
    <button onclick="myFunction('han','student')">点击这里</button>
    <script>
        function myFunction(name,job){
          alert("Welcome " +name+" the "+job);
        }
    </script>
  ```

## **模板字符串**
- **使用场景**
  拼接字符串和常量

  ```JS
  document.write(`大家好，我叫` + name + `今年` + age + `岁`)
  ```

- **语法**
  重点重点重点重点！！！！！！！！
  使用反引号   `` ,一定要注意不是单引号，Tab键上方的键在英文输入模式下
  内容拼接变量时，用${}包住变量

  ```JS
  ducument.write(`大家好，我叫${name},今年${age}岁了`)
  ```
## **条件语句** -与C相同只给例子

```JS
let age = +prompt(`请输入年龄`)
        if(0<age&&age<=18)
        {
            alert("You are a child")
        }
        else if(18<age&&age<=45)
        {
            alert("You are a young people")
        }
        else
        {
            alert("You are an old people")
        }
```

## **swith语句** -与C相同只给例子（偷个懒给个模板，孩子们都会）
 ```JS
 switch(n)
{
    case 1:
        执行代码块 1
        break;
    case 2:
        执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}
 ```

## **循环语句** -与C相同只给例子
- **For循环**
  ```JS
  let cars = ["哈基米","南北","绿豆","~"]
         for (var i=0; i<cars.length; i++)
        { 
            document.write(cars[i] + "<br>");
        }
  ```
- **while,do while同样与C相同，这里例子也不给了哈，大家下去可以试试**

并且break 和 continue语句与C的作用相同

## **输出语句** 
1.弹出窗口
- **alert() **
 弹出警告框
 ```JS
 alert("你猜猜能打开吗"); 
 ```
- **confirm() **
  带有 question 以及确定和取消两个按钮的模态窗口。
  ```JS
  confirm("你是否是燕山大学的大一新生")
  ```
- **prompt() **
 显示信息要求用户输入文本
```JS
let data = prompt("你今年多大了")
```
2.显示数据
- **document.write()**
  将内容写到 HTML 文档中。
  ```JS
  document.write("我是document.write()");
  <script>
    function myFunction(){
            document.write("覆盖整个页面");
        }
  </script>
  ```
  注意使用document.write()有两种情况
  - 情况一 文件加载时运行
    如同上述，直接就在html中显示出来
  - 情况二 文件加载后运行
    我们可以写一个函数，通过按钮来触发，来实现这个情况二
    ```HTML
    <button onclick="myFunction()">点我实现情况二</button>
    ```
- **innerHTML**
  写入到 HTML 元素。
  1.语法：
  document.getElementById(id).innerHTML=新的 HTML
  2.举个栗子：
  ```html
  <p id="demo">我的第二个段落</p>
  <script>
    document.getElementById("demo").innerHTML="段落已经修改。";
  </script>
  ```
- **console.log()** -该例子可以看类型转换部分的
  写入到浏览器的控制台。

## **DOM** 
- **DOM HTML**
- 改变HTML内容
  
  document.getElementById(id).innerHTML=新的 HTML （对的你没有看错，跟上面显示数据的一样）

- 改变HTML属性
  
  document.getElementById(id).attribute=新属性值
  这个得举个例子
  ```HTML
  <img id="image" src="images/course01.jpg">
  <script>
    document.getElementById("image").src="images/course02.jpg";
  </script>
  ```
- **DOM CSS**
- 改变HTML样式
  document.getElementById(id).style.property=新样式
  举个例子：
  ```HTML
  <p id="p1">Hello World!</p>
  <p id="p2">Hello World!</p>
  <script>
    document.getElementById("image").src="images/course02.jpg";
    document.getElementById("p1").style.color="blue";
    document.getElementById("p1").style.fontFamily="Arial";
    document.getElementById("p1").style.fontSize="larger";
  </script>
  ```
# 小结一下

  大家看到这里，我们基础的JavaScript就基本讲完了，涉及到的层面还是比较广的，但最重要的就是动手去实践。

  还是希望大家有时间的时候，可以自己去写一写，前端是一个可以快速看到成果的，会极大的产生满足感。

  那么接下来，通过这节课的JavaScript和前面所讲的HTML CSS，我们来进行三个简单的part。

  注：part的代码我就不放在这里了，上课会带着大家一起写，后米完整代码会发到群里。


# JavaScript

## Js 基本数据类型

> JavaScript 一共有六种基本数据类型。其中有 string, number, undefined, null, boolean, 在ES6当中新增了Symb32ol类型，表示创建之后独一无二，不可变化的数据类型。

## var、let、const之间有什么区别？

* let和const是块级作用域，而var是函数作用域。
* let和const不可以重复声明变量，var可以。
* var存在变量提升，而let、const在声明之前不可以使用，被称为“暂时性死区”（TDZ）

## Js 遍历对象的方法

* Object.keys()

> 返回一个数组，包括对象自身当中所有的可枚举的属性（不包括继承的和Symbol）。

~~~javascript
const obj = {
    name: 'test',
    // Symbol属性
    [Symbol('age')]: 18
}

const obj1 = {
    money: 250
}

// 设置obj的原型对象
Object.setPrototypeOf(obj,obj1)

// 设置对象中不可枚举的属性
Object.defineProperty(obj, 'like', {
    value: "coding",
    enumerable: false
});

// Object.keys()方法遍历
console.log(Object.keys(obj)) // name
~~~

* for...in

> 循环遍历对象自身的和原型上继承的可枚举属性（不含 Symbol 属性）。

~~~javascript
// for..in遍历自身以及原型上继承的可枚举属性
for (let key in obj) {
    console.log(key)
}
// name
// money
~~~

- Object.getOwnPropertyNames()

> 返回一个数组,包含对象自身的所有属性（不含 Symbol 属性,但是包括不可枚举属性）。

~~~javascript
// Object.getOwnPropertyNames()获取自身所有属性
console.log(Object.getOwnPropertyNames(obj))
// [ 'name', 'like' ]
~~~

* Reflect.ownKeys()

> 返回一个数组,包含对象自身的所有属性(包括 Symbol 属性和不可枚举属性).

~~~javascript
// Reflect.ownKeys()获取对象自身的所有属性
console.log(Reflect.ownKeys(obj))//[ 'name', 'like', Symbol(age) ]
~~~

| 方法                         | 特点                                               |
| ---------------------------- | -------------------------------------------------- |
| Object.keys()                | 自身的可枚举属性，不包括Symbol                     |
| for...in                     | 自身的可枚举属性以及继承的可枚举属性，不包括Symbol |
| Object.getOwnPropertyNames() | 自身的全部属性，包括不可枚举，不包括Symbol         |
| Reflect.ownKeys()            | 自身全部属性，包括不可枚举和Symbol                 |

## Js 遍历数组的方法

* forEach()

~~~javascript
const arr = [1,2,3]

arr.forEach((item, index,array) => {
    console.log(item,index)
})
// 1 0
// 2 1
// 3 2
~~~

* for...in

> for...in方法遍历数组的索引

~~~javascript
for(let key in arr) {
    console.log(arr[key])
}
// 1
// 2
// 3
~~~

* for...of

> for...of方法遍历数组的元素

~~~javascript
for(let item of arr) {
    console.log(item)
}
// 1
// 2
// 3
~~~

## for...in 与 for...of 的区别

for...in 会遍历对象或者数组的可迭代属性，包括原型上的属性。如果不想遍历原型上的方法或者属性，可以在遍历时进行判断，根据 hasOwnProperty() 方法判断该属性是否存在该对象上面。

for...of 会遍历数组/字符串/map/set等实现了迭代器（Iterator）的集合。但是无法遍历对象。

总结：for...in 是遍历数组的索引，而 for...of 是遍历数组的元素；for...in 总是得到对象的 key 或数组、字符串的下标；for...of 总是得到对象的 value 或数组、字符串的值。

## map weakMap set weakSet 区别

weakMap 键名只能为对象（null除外），map的键名可以为任意值。

weakMap 的键名为弱引用，不被垃圾回收机制考虑，一旦外部的引用被清除，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。

weakMap 不可以遍历，map 可以遍历。

## null 和 undefined 的区别

null 和 undefined 都是基本引用类型，并且只有唯一值，分别是 null 和 undefined 。

undefined 表示未定义，null 表示空对象。变量声明但未定义之后为 undefined ，而 null 只要用于对象的初始化操作。

当我们对两种类型进行 typeof 操作时，null 会被转化为 object 。

undefined==null(true)` `undefined===null(false)`

## 其他值到字符串的转换规则

（1）null 和 undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，

（2）Boolean 类型，true 转换为 "true"，false 转换为 "false"。

（3）Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。

（4）Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。

（5）对普通对象来说，除非自行定义 toString() 方法，否则会调用 toString()（Object.prototype.toString()）

## 其他值到布尔类型的值的转换规则

* undefined
* null
* +0 -0 
* false
* ""

假值的布尔强制类型为false，列表之外的为真值。

## {} 和 [] 的 valueOf 和 toString 的结果是什么

{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""

## || 和 && 操作符的返回值

|| 如果第一个操作数条件判断结果为 true就返回第一个操作数的值，如果为 false就返回第二个操作数的值。 

&& 如果第一个操作数条件判断结果为 true就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。 

## == 操作符的强制类型转换规则

（1）字符串和数字之间的相等比较，将字符串转换为数字之后再进行比较。

（2）其他类型和布尔类型之间的相等比较，先将布尔值转换为数字后，再应用其他规则进行比较。

（3）null 和 undefined 之间的相等比较，结果为真。其他值和它们进行比较都返回假值。

（4）对象和非对象之间的相等比较，对象先调用 ToPrimitive 抽象操作后，再进行比较。

（5）如果一个操作值为 NaN ，则相等比较返回 false（ NaN 本身也不等于 NaN ）。

（6）如果两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回 true，否则，返回 false。

## 如何将字符串转化为数字，例如 '12'

（1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。

（2）使用 parseInt() 方法，parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

（3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。 

## 三种事件模型是什么

- 原始事件模型（DOM0级）

  事件绑定监听函数比较简单, 有两种方式：

  - HTML代码中直接绑定

  ```javascript
  <input type="button" onclick="fun()">
  ```

  - 通过`JS`代码绑定

  ```javascript
  var btn = document.getElementById('.btn');
  btn.onclick = fun;
  ```

  只支持冒泡，不支持时间捕获，同一个类型的事件只能绑定一次。

  删除 `DOM0` 级事件处理程序只要将对应事件属性置为`null`即可

- 标准事件模型（DOM2级）

  - 事件捕获阶段：事件从`document`一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  - 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
  - 事件冒泡阶段：事件从目标元素冒泡到`document`, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

  事件绑定监听函数的方式如下:

  ```javascript
  addEventListener(eventType, handler, useCapture)
  ```

  事件移除监听函数的方式如下:

  ```javascript
  removeEventListener(eventType, handler, useCapture)
  ```

- IE事件模型（基本不用）

  ​	IE事件模型共有两个过程:

  - 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数。

  - 事件冒泡阶段：事件从目标元素冒泡到`document`, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

    事件绑定监听函数的方式如下:

    ```
    attachEvent(eventType, handler)
    ```

    事件移除监听函数的方式如下:

    ```
    detachEvent(eventType, handler)
    ```

## 说说你对闭包的理解，以及闭包使用场景

闭包是一个函数与周围状态的捆绑集合，闭包可以帮助你从内层函数访问到外层函数的作用域。

~~~javascript
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
~~~

闭包的特征：

* 函数当中嵌套函数
* 内部函数使用外部函数的参数和变量
* 参数和变量不会被垃圾回收机制回收

闭包的优点：

* 希望一个变量长期存储在内存当中
* 避免全局变量污染
* 私有成员的存在

闭包的缺点：

* 常驻内存，增加了内存的使用量
* 使用不当容易造成内存泄漏

## 什么是作用域链？

作用域，即变量和函数生效的区域或者集合，作用域决定了代码块中变量以及函数的可见性

~~~javascript
function myFunction() {
    let inVariable = "函数内部变量";
}
myFunction();//要先执行这个函数，否则根本不知道里面是啥
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined
~~~

作用域的划分：

* 全局作用域
* 块级作用域
* 函数作用域（局部作用域）

全局作用域：不在函数或者大括号当中创建的变量都在全局作用域当中。

~~~javascript
// 全局变量
var greeting = 'Hello World!';
function greet() {
  console.log(greeting);
}
// 打印 'Hello World!'
greet();
~~~

函数作用域：当一个变量在一个函数当中声明，那么它就在函数作用域当中，只能在函数内部访问，不能在函数以外访问

~~~javascript
function greet() {
  var greeting = 'Hello World!';
  console.log(greeting);
}
// 打印 'Hello World!'
greet();
// 报错： Uncaught ReferenceError: greeting is not defined
console.log(greeting);
~~~

块级作用域：ES6引入了`let`和`const`关键字,和`var`关键字不同，在大括号中使用`let`和`const`声明的变量存在于块级作用域中。在大括号之外不能访问这些变量

~~~javascript
{
  // 块级作用域中的变量
  let greeting = 'Hello World!';
  var lang = 'English';
  console.log(greeting); // Prints 'Hello World!'
}
// 变量 'English'
console.log(lang);
// 报错：Uncaught ReferenceError: greeting is not defined
console.log(greeting);
~~~

词法作用域，又叫静态作用域，变量被创建时就确定好了，而非执行阶段确定的。也就是说我们写好代码时它的作用域就确定了，`JavaScript` 遵循的就是词法作用域。

~~~~javascript
var a = 2;
function foo(){
    console.log(a)
}
function bar(){
    var a = 3;
    foo();
}
n()
~~~~

作用域链：当在`Javascript`中使用一个变量的时候，首先`Javascript`引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域。

如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错。

##  JavaScript中的原型，原型链分别是什么?

原型：每个函数都有一个prototype属性，被称为原型。

可以存放一些属性和方法，同时可以实现JavaScript的继承。

对象都有一个`_proto_`属性，这个属性指向它的原型对象。原型对象也是对象，也有`_proto_`属性，指向原型对象的原型对象，这样一层层的链式结构被称为原型链，直到最顶层为null。

## Javascript如何实现继承？

继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码

在子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能

首先定义一个Car类，然后定义Car类相关的属性

~~~javascript
class Car{
    constructor(color,speed){
        this.color = color
        this.speed = speed
        // ...
    }
}
~~~

~~~javascript
// 货车
class Truck extends Car{
    constructor(color,speed){
        super(color,speed)
        this.color = 'black'
        this.Container = true // 货箱
    }
}
~~~

货车继承汽车的同时，重新定义汽车的某些属性，从而获得与父类不同的方法。

### 继承的实现方式

* 原型链继承

  ~~~javascript
   function Parent() {
      this.name = 'parent1';
      this.play = [1, 2, 3]
    }
    function Child() {
      this.type = 'child2';
    }
    Child1.prototype = new Parent();
    console.log(new Child())
  ~~~

  ~~~javascript
  var s1 = new Child()
  var s2 = new Child()
  s2.play.push(4)
  console.log(s1.play) // 1 2 3 4
  ~~~

  原型链继承创建的子类都继承自同一个原型对象，因此内存空间共享，会造成属性值混乱。

* 构造函数继承

  ~~~javascript
  function Parent(){
      this.name = 'parent1';
  }
  
  Parent.prototype.getName = function () {
      return this.name;
  }
  
  function Child(){
      Parent1.call(this);
      this.type = 'child'
  }
  
  let child = new Child();
  console.log(child);  // 没问题
  console.log(child.getName());  // 会报错
  ~~~

  父类原型对象中一旦存在父类之前自己定义的方法，那么子类将无法继承这些方法

* 组合继承

  组合继承总结了上述两种方法，但是增加了性能开销。

* 原型式继承

  这里主要借助`Object.create`方法实现普通对象的继承

  ~~~javascript
  let parent4 = {
      name: "parent4",
      friends: ["p1", "p2", "p3"],
      getName: function() {
        return this.name;
      }
    };
  
    let person4 = Object.create(parent4);
    person4.name = "tom";
    person4.friends.push("jerry");
  
    let person5 = Object.create(parent4);
    person5.friends.push("lucy");
  
    console.log(person4.name); // tom
    console.log(person4.name === person4.getName()); // true
    console.log(person5.name); // parent4
    console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
    console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
  ~~~

  这种继承方式的缺点也很明显，因为`Object.create `方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能

* 寄生式继承

  优缺点与上述一样，数据容易被篡改

使用`ES6` 中的`extends `关键字直接实现 `JavaScript `的继承。

## this的理解

在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）

* 默认绑定

  ~~~javascript
  var name = 'Jenny';
  function person() {
      return this.name;
  }
  console.log(person());  //Jenny
  ~~~

* 隐式绑定

  函数还可以作为某个对象的方法调用，这时`this`就指这个上级对象

  ~~~javascript
  function test() {
    console.log(this.x);
  }
  
  var obj = {};
  obj.x = 1;
  obj.m = test;
  
  obj.m(); // 1
  ~~~

  `this`永远指向的是最后调用它的对象

* new 绑定

  通过构建函数`new`关键字生成一个实例对象，此时`this`指向这个实例对象

  ~~~javascript
  function test() {
  　this.x = 1;
  }
  
  var obj = new test();
  obj.x // 1
  ~~~

* 显示绑定

  `apply()、call()、bind()`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时`this`指的就是这第一个参数

new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级

## typeof 与 instanceof 有什么区别

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型

~~~javascript
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
~~~

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

`typeof`与`instanceof`都是判断数据类型的方法，区别如下：

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值
- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而` typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了` function` 类型以外，其他的也无法判断

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求

如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]” `的字符串

~~~javascript
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
~~~

## 什么是事件代理，以及它的应用场景有哪些？

事件代理，俗地来讲，就是把一个元素响应事件（`click`、`keydown`......）的函数委托到另一个元素

事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素

当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数

## 说说new操作符具体干了什么

在`JavaScript`中，`new`操作符用于创建一个给定构造函数的实例对象

- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数中的属性
- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

从上面介绍中，我们可以看到`new`关键字主要做了以下的工作：

- 创建一个新的对象`obj`
- 将对象与构建函数通过原型链连接起来
- 将构建函数中的`this`绑定到新建的对象`obj`上
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

手动实现new 

~~~javascript
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
~~~

##  bind、call、apply 有什么区别？

### apply

`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入

当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)

### call

`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表

### bind

bind方法和call很相似，第一参数也是`this`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)

改变`this`指向后不会立即执行，而是返回一个永久改变`this`指向的函数

从上面可以看到，`apply`、`call`、`bind`三者的区别在于：

- 三者都可以改变函数的`this`对象指向
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入
- `bind `是返回绑定this之后的函数，`apply `、`call` 则是立即执行

## 事件循环

`JavaScript` 在设计之初便是单线程，即指程序运行时，只有一个线程存在，同一时间只能做一件事

为什么要这么设计，跟`JavaScript`的应用场景有关

`JavaScript` 初期作为一门浏览器脚本语言，通常用于操作 `DOM` ，如果是多线程，一个线程进行了删除 `DOM` ，另一个添加 `DOM`，此时浏览器该如何处理？

为了解决单线程运行阻塞问题，`JavaScript`用到了计算机系统的一种运行机制，这种机制就叫做事件循环（Event Loop）

在`JavaScript`中，所有的任务都可以分为

- 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行
- 异步任务：异步执行的任务，比如`ajax`网络请求，`setTimeout `定时函数等

![img](https://static.vue-js.com/61efbc20-7cb8-11eb-85f6-6fac77c0c9b3.png)

同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就是事件循环

## 常见的DOM操作

创建节点

* createElement()
* createTextNode()
* createAttribute()

增加节点

* appendChild()
* innerHTML

更新节点

* innerHTML
* innerText
* textContent
* style

删除节点

* removeChild()

查询节点

* querySelector()
* querySelectorAll()

## 常见的BOM操作

* window

  `Bom`的核心对象是`window`，它表示浏览器的一个实例

  因此所有在全局作用域中声明的变量、函数都会变成`window`对象的属性和方法

* location

  `location.reload()`，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载

* navigator

  `navigator` 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂

* screen

  保存的纯粹是客户端能力信息，客户端显示器信息。

* history

  - `history.go()`

  接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，

  ```javascript
  history.go('maixaofei.com')
  ```

  当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面

  ```javascript
  history.go(3) //向前跳转三个记录
  history.go(-1) //向后跳转一个记录
  ```

  - `history.forward()`：向前跳转一个页面
  - `history.back()`：向后跳转一个页面
  - `history.length`：获取历史记录数

## 说说 JavaScript 中内存泄漏有哪几种情况

内存泄漏（Memory leak）是在计算机科学中，由于疏忽或错误造成程序未能释放已经不再使用的内存

并非指内存在物理上的消失，而是应用程序分配某段内存后，由于设计错误，导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费

Javascript 具有自动垃圾回收机制（GC：Garbage Collecation），也就是说，执行环境会负责管理代码执行过程中使用的内存

原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存

### 标记清除

`JavaScript`最常用的垃圾收回机制

当变量进入执行环境是，就标记这个变量为“进入环境“。进入环境的变量所占用的内存就不能释放，当变量离开环境时，则将其标记为“离开环境

~~~javascript
var m = 0,n = 19 // 把 m,n,add() 标记为进入环境。
add(m, n) // 把 a, b, c标记为进入环境。
console.log(n) // a,b,c标记为离开环境，等待垃圾回收。
function add(a, b) {
  a++
  var c = a + b
  return c
}
~~~

### 引用计数

语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是`0`，就表示这个值不再用到了，因此可以将这块内存释放

如果一个值不再需要了，引用数却不为`0`，垃圾回收机制无法释放这块内存，从而导致内存泄漏

~~~javascript
const arr = [1, 2, 3, 4];
console.log('hello world');
~~~

### 常见内存泄露情况

意外的全局变量

~~~javascript
function foo(arg) {
    bar = "this is a hidden global variable";
}
~~~

闭包，维持函数内局部变量，使其得不到释放

没有清理对`DOM`元素的引用同样造成内存泄露

使用事件监听`addEventListener`监听的时候，在不监听的情况下使用`removeEventListener`取消对事件监听

## Javascript本地存储的方式有哪些，有什么区别，及有哪些应用场景

### cookie

`Cookie`，类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据。是为了解决 `HTTP `无状态导致的问题

作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 `cookie `有效期、安全性、使用范围的可选属性组成

但是`cookie`在每次请求中都会被发送，如果不使用 `HTTPS `并对其加密，其保存的信息很容易被窃取，导致安全风险。

### localStorage

- 生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的
- 存储的信息在同一域中是共享的
- 当本页操作（新增、修改、删除）了`localStorage`的时候，本页面不会触发`storage`事件,但是别的页面会触发`storage`事件。
- 大小：5M（跟浏览器厂商有关系）
- `localStorage`本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡
- 受同源策略的限制

`localStorage` 也不是完美的，它有两个缺点：

- 无法像`Cookie`一样设置过期时间
- 只能存入字符串，无法直接存对象

### sessionStorage

`sessionStorage `和 `localStorage `使用方法基本一致，唯一不同的是生命周期，一旦页面（会话）关闭，`sessionStorage` 将会删除数据

关于`cookie`、`sessionStorage`、`localStorage`三者的区别主要如下：

- 存储大小：` cookie`数据大小不能超过`4k`，`sessionStorage`和`localStorage `虽然也有存储大小的限制，但比`cookie`大得多，可以达到5M或更大
- 有效时间：`localStorage `存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； `sessionStorage `数据在当前浏览器窗口关闭后自动删除；`cookie`设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭
- 数据与服务器之间的交互方式，` cookie`的数据会自动的传递到服务器，服务器端也可以写`cookie`到客户端； `sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存

##  null是对象吗？为什么？

null不是对象，在JS最初的版本使用的是32位系统，为了性能考虑低位存储变量的类型信息，000开头代表对象，但是null表示全零，因此错误的判断为object

##  0.1+0.2为什么不等于0.3？

因为0.1和0.2转化为2进制时会出现无限循环，而因为标准位数的限制导致精度损失，从而再次相加的时候不等于0.3。

##  什么是BigInt

BigInt是一种新的数据类型，用于当**整数值**大于Number数据类型支持的范围时。这种数据类型允许我们安全地对 大整数 执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。

~~~javascript
// 方式一：加n
console.log(1n); // → 1n
// 方式二：使用构造函数 BigInt
console.log(BigInt(1)); // → 1n

1n === BigInt(1) // → true
typeof 1n; // → bigint
~~~

##  typeof 是否能正确判断类型？

对于原始数据类型，除了null都可以正常显示

~~~javascript
console.log(typeof 1)
console.log(typeof 'abc')
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof Symbol())
console.log(typeof 1n)
~~~

于引用数据类型，除了函数之外，都会显示"object"

~~~javascript
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
~~~

## Object.is和===有什么区别？

修复了一些特殊情况,比如NaN和+0 ，-0

~~~javascript
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
~~~

## 如何判断一个对象是不是空对象

~~~javascript
// 方法1
Object.keys(obj).length === 0

// 方法2
JSON.stringify(obj) === '{}'
~~~


# TypeScript 命名空间

## 命名空间

`JavaScript` 为了防止全局作用域重复声明引发命名冲突和变量污染，普遍使用立即自执行函数表达式来创建独立的“命名空间”来避免变量命名冲突。

```js
let Shape

(function () {
    const pi = Math.PI;
    function cricle (r) {
        return pi * r ** 2
    }
    Shape.cricle = cricle
})(Shape || (Shape = {}))

// Output: 28.274333882308138
Shape.cricle(3)
```

但是在 `Typescript` 当中，命名空间的定义会更加简洁。

## 定义

```ts
// 命名空间
export namespace Shape {
    interface IShape {
    }
    class Cube {
    }
    // 定义变量
    const pi = Math.PI
    // 定义函数表达式
    const square = function (r: number) {
        return r * r
    }
    // 全局可见
    export function cricle(r: number){
        return pi * r ** 2
    }
}
```

使用 `namespace` 关键词定义名为 `Shape` 的命名空间，可以在命名空间内部定义**变量**、**函数表达式**、**函数声明**、**接口**和**类**等值。

## 导出

为了让外部空间可以访问命名空间内部声明的值和类型，使用 `export` 关键词导出指定的值和类型。

```ts
namespace Tools {
    let count = 0;
    export const add = function (x: number, y: number) {
        return x + y;
    };
    export function minus(x: number, y: number) {
        return x - y;
    }
    export interface Student {
        name: string;
        age: number;
    }
    class Animal {}
}
Tools.add(1, 2);
Tools.minus(3, 2);
```

和对象的属性访问类似，使用点`.`连接命名空间名和导出声明名。 如上例中`Tools.add` 和 `Tools.minus`。 `count` 和 `Animal` 没有用 `export` 显示导出，因此作为命名空间内部私有属性，命名空间外无法访问。

```ts
Tools.Student
// Property 'Student' does not exist on type 'typeof Tools'.
```

_不能直接访问命名空间导出的接口声明。可以通过`命名空间的别名`引用命名空间中的任意的导出声明。_

## 别名

命名空间的别名使用 `import` 关键词进行定义。

```ts
import Student = Tools.Student

// 定义别名引用命名空间导出的 add 函数，通过别名访问
import add = Tools.add
add(1,2)
add(2,3)

// 定义别名引用命名空间导出的 Student 类型声明，通过别名访问
const student: Student = {
	name: 'test',
	age: 18
}
```

## 合并

当应用越来越大时，我们可能会把同名命名空间中值或类型的声明拆分到不同 `.ts` 文件中，`TypeScript` 最终会把不同文件或同一文件中的多个同名命名空间合并在一起。

有以下项目目录：

```text
- tools.ts
- index.ts
```

> _tools.ts_

```ts
namespace Tools {
  export var count = 0
}
```

> _index.ts_

```ts
namespace Tools {
  export class Animal {}
}
```

最终，合并后的 `Tools` 命名空间存 `count` 和 `Animal` 两个导出声明。

### 文件加载顺序

定义文件加载顺序的两种方式：

- 三斜线指令
- `tsconfig.json` 的 files 配置

  
当 `index.ts` 的命名空间依赖与 `tools.ts` 文件的命名空间导出声明的 `count` 值时，使用三斜线指令或 tsconfig.json 定义文件的加载顺序。

  
**_[三斜线指令](https://link.zhihu.com/?target=https%3A//typescript.bootcss.com/triple-slash-directives.html)_**

三斜线指令引用告诉编译器在编译过程中要引入的额外的文件。下例在编译 `index.ts` 之前，编译器会确保先编译 `tools.ts`。

> _index.ts_

```ts
/// <reference path="tools.ts" />

namespace Tools {
  import count = Tools.count
  console.log(count)
  class Animal {}
}
```

  
**_[tsconfig.json 配置](https://link.zhihu.com/?target=https%3A//www.typescriptlang.org/tsconfig)_**

- `outFile`：指定编译完成后输出的文件名
- `files`：一组有序列表，指定了项目中包含的所有源文件

> tsconfig.json

```ts
{
  "compilerOptions": {
    // 其他编译器配置选项
    "outFile": "main.js",                              
  },
  "files": ["tools.ts", "index.ts"]
}
```

files 选项指定需要编译的 TS 文件及先后顺序。`outFile` 选项指定把 `tools.ts` 和 `index.ts` 编译后的代码输出到 `main.js` 中。

> _输出编译后的 main.js_

```js
"use strict";
var Tools;
(function (Tools) {
    Tools.count = 0;
})(Tools || (Tools = {}));
/// <reference path="tools.ts" />
var Tools;
(function (Tools) {
    var count = Tools.count;
    console.log(count)
    class Animal {
    }
})(Tools || (Tools = {}));  
```

> 从ECMAScript 2015开始，JavaScript引入了模块的概念。TypeScript也沿用这个概念。这也是更推荐的 "命名空间" 做法。

## 总结

- 命名空间可以更好的组织 `TypeScript` 代码，通过 `namespace` 关键字定义
- `export` 关键字导出声明。`import` 关键字定义别名
- 多个文件有相同的命名空间最终会合并为一个命名空间
- 通过三斜线指令 `/// <reference path="filePath" />` 和 `files` 定义文件编译顺序
# JavaScript数组常用方法

JavaScript数组常用方法直接分为改变原数组方法和不改变原数组方法。

## 一、改变原数组方法

### 1. push() 末尾添加数据

**`push()`** 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

#### 语法

```js
push()
push(element0)
push(element0, element1)
push(element0, element1, /* … ,*/ elementN)
```

#### 返回值

新数组的长度，`length`属性。

#### 示例

```js
const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### 2. pop() 末尾删除数据

**`pop()`** 方法从数组中删除**最后一个**元素，并返回该元素的值。此方法会更改数组的长度。

#### 语法

```js
pop()
```

#### 返回值

从数组中删除的元素（当数组为空时返回 `undefined`）。

#### 示例

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'
```

### shift()删除第一个元素

**`shift()`** 方法从数组中删除**第一个**元素，并返回该元素的值。此方法更改数组的长度。

#### 语法

```js
shift()
```

#### 返回值

从数组中删除的元素（当数组为空时返回 `undefined`）。

#### 示例

```js
const myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("调用 shift 之前：", myFish);
// 调用 shift 之前： ['angel', 'clown', 'mandarin', 'surgeon']
const shifted = myFish.shift();
console.log("调用 shift 之后：", myFish);
// 调用 shift 之后： ['clown', 'mandarin', 'surgeon']
console.log("被删除的元素：" + shifted);
// "被删除的元素：angel"
```

### unshift() 开头添加元素

**`unshift()`** 方法将指定元素添加到数组的开头，并返回数组的新长度。

#### 语法

```js
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

#### 返回值

新数组的长度，`length`属性。

#### 示例

```js
let arr = [4, 5, 6];
arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]
arr = [4, 5, 6]; // 重置数组
arr.unshift(1);
arr.unshift(2);
arr.unshift(3);
console.log(arr);
// [3, 2, 1, 4, 5, 6]
```

### splice 移除替换原数组元素

**`splice()`** 方法通过移除或者替换已存在的元素和/或添加新元素[就地](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)改变一个数组的内容。

#### 语法

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
```

#### 参数

`start`

从 0 开始计算的索引，表示要开始改变数组的位置，它会被[转换成整数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2)。

- 负索引从数组末尾开始计算——如果 `start < 0`，使用 `start + array.length`。
- 如果 `start < -array.length`，使用 `0`。
- 如果 `start >= array.length`，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。
- 如果 `start` 被省略了（即调用 `splice()` 时不传递参数），则不会删除任何元素。这与传递 `undefined` 不同，后者会被转换为 `0`。

`deleteCount` 可选

一个整数，表示数组中要从 `start` 开始删除的元素数量。

如果省略了 `deleteCount`，或者其值大于或等于由 `start` 指定的位置到数组末尾的元素数量，那么从 `start` 到数组末尾的所有元素将被删除。但是，如果你想要传递任何 `itemN` 参数，则应向 `deleteCount` 传递 `Infinity` 值，以删除 `start` 之后的所有元素，因为显式的 `undefined` 会[转换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2)为 `0`。

如果 `deleteCount` 是 `0` 或者负数，则不会移除任何元素。在这种情况下，你应该至少指定一个新元素（请参见下文）。

`item1`, …, `itemN` 可选

从 `start` 开始要加入到数组中的元素。

如果不指定任何元素，`splice()` 将只从数组中删除元素。

#### 返回值

一个包含了删除的元素的数组。

#### 示例

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
// 运算后的 myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除
```

```js
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// 运算后的 myFish 是 ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除
```

```js
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);
// 运算后的 myFish 是 ["angel", "clown", "drum", "sturgeon"]
// removed 是 ["mandarin"]
```

```js
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish 是 ["angel", "clown", "trumpet", "sturgeon"]
// removed 是 ["drum"]
```

### reverse 反转数组

**`reverse()`** 方法[_就地_](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)反转数组中的元素，并返回同一数组的引用。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。换句话说，数组中的元素顺序将被翻转，变为与之前相反的方向。

#### 语法

```js
reverse()
```

#### 返回值

原始数组反转后的引用。注意，数组是[_就地_](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)反转的，并且没有复制。

#### 示例

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### sort() 数组排序

**`sort()`** 方法[_就地_](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

#### 语法

```js
sort()
sort(compareFn)
```

#### 返回值

返回相同数组的引用

#### 示例

```js
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']

```
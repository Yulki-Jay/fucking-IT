// 5.1 原始类型的方法（Primitive methods）
// 教程：https://zh.javascript.info/primitives-methods
// Node 运行：node Study-JavaScript/04-data-types/01-primitive-methods/01-primitive-methods.js

// 1. 原始类型不是对象，但调用方法时会被临时包装成对象
const str = "hello";
console.log(str.toUpperCase()); // HELLO
console.log(typeof str); // string：还是原始类型

const num = 1.23456;
console.log(num.toFixed(2)); // "1.23"：注意返回的是字符串

console.log("-".repeat(20));

// 2. null / undefined 没有任何方法
try {
  console.log(null.test);
} catch (e) {
  console.log("null 不能读属性：", e.constructor.name);
}

// 3. 常见误区：不要用 new Number / new String 包装类
const a = Number(10);
const b = new Number(10);
console.log(typeof a); // number
console.log(typeof b); // object
console.log(b.valueOf()); // 10：需要拆箱才拿回原始值

console.log("-".repeat(20));

// 4. 练习：首字母大写要自己写（原始类型没有这个方法）
function ucFirst(s) {
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
}
console.log(ucFirst("john")); // John
console.log(ucFirst("")); // （空字符串）



let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}

// i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log( i );
// }
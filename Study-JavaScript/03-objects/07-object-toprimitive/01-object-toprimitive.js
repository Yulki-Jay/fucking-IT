// 4.8 对象转原始值（Object to primitive conversion）
// 教程：https://zh.javascript.info/object-toprimitive
// Node 运行：node Study-JavaScript/03-objects/07-object-toprimitive/01-object-toprimitive.js

// 1. 三种 hint：string / number / default
const user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint === "string" ? `{name: "${this.name}"}` : this.money;
  },
};

console.log(String(user)); // hint: string
console.log(+user); // hint: number
console.log(user + 500); // hint: default

console.log("-".repeat(20));

// 2. 不写 Symbol.toPrimitive 时：先 valueOf 再 toString（number/default），先 toString 再 valueOf（string）
const obj1 = {
  name: "Mary",
  money: 500,
  toString() {
    return this.name;
  },
  valueOf() {
    return this.money;
  },
};
console.log(String(obj1)); // Mary
console.log(+obj1); // 500
console.log(obj1 + 100); // 600

console.log("-".repeat(20));

// 3. 默认的 toString / valueOf
const plain = { name: "Tom" };
console.log(String(plain)); // [object Object]
console.log(plain.valueOf() === plain); // true

console.log("-".repeat(20));

// 4. 经典例子：加法用 default（按 number 走），但 Date 比较特殊
console.log({} + []); // 在 Node 里是 "[object Object]"（字符串拼接）
console.log([] + {}); // "[object Object]"
const date1 = new Date(2026, 0, 1);
const date2 = new Date(2026, 0, 2);
console.log(date2 - date1); // 86400000：日期相减按 number 转时间戳

console.log("-".repeat(20));

// 5. 练习：只实现 valueOf 会发生什么？
const money = {
  amount: 30,
  valueOf() {
    return this.amount;
  },
};
console.log(money + 20); // 50
console.log(String(money)); // [object Object]：没有 toString/Symbol.toPrimitive，string hint 兜底效果不好

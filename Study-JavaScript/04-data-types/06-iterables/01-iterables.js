// 5.6 可迭代对象（Iterables）
// 教程：https://zh.javascript.info/iterable
// Node 运行：node Study-JavaScript/04-data-types/06-iterables/01-iterables.js

// 1. 字符串和数组都是可迭代的
for (const ch of "test") {
  console.log(ch); // t e s t
}

// 2. 手写 range：实现 Symbol.iterator
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        }
        return { done: true };
      },
    };
  },
};
for (const n of range) {
  console.log(n); // 1 2 3 4 5
}

console.log("-".repeat(20));

// 3. 显式调用迭代器
const s = "Hi";
const it = s[Symbol.iterator]();
console.log(it.next()); // {value: 'H', done: false}
console.log(it.next()); // {value: 'i', done: false}
console.log(it.next()); // {value: undefined, done: true}

// 4. Array.from：把可迭代 / 类数组转成真数组
console.log(Array.from(range)); // [1, 2, 3, 4, 5]
console.log(Array.from("abc")); // ['a', 'b', 'c']
console.log(Array.from({ length: 3 }, (_, i) => i * 2)); // [0, 2, 4]

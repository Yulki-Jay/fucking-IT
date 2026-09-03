// 5.8 WeakMap 和 WeakSet
// 教程：https://zh.javascript.info/weakmap-weakset
// Node 运行：node Study-JavaScript/04-data-types/08-weakmap-and-weakset/01-weakmap-weakset.js

// 1. WeakMap：键只能是对象，弱引用，不计入 size，不能遍历
const meta = new WeakMap();
const userA = { name: "John" };
const userB = { name: "Pete" };
meta.set(userA, { visits: 1 });
meta.set(userB, { visits: 5 });
console.log(meta.get(userA)); // {visits: 1}
console.log(meta.has(userB)); // true
meta.delete(userA);
console.log(meta.has(userA)); // false
// console.log(meta.size); // undefined：没有 size
// for (const x of meta) {} // TypeError：不可迭代

console.log("-".repeat(20));

// 2. 典型用途：给对象挂“额外数据”，对象销毁时数据自动释放
const cache = new WeakMap();
function process(obj) {
  if (!cache.has(obj)) {
    cache.set(obj, `computed:${Date.now()}`);
  }
  return cache.get(obj);
}
console.log(process(userB));

console.log("-".repeat(20));

// 3. WeakSet：只存对象，同样弱引用、不可遍历
const seen = new WeakSet();
const msg1 = { text: "hi" };
seen.add(msg1);
console.log(seen.has(msg1)); // true
// 用完后把 msg1 置空，集合里的引用不会阻止回收（普通 Set 会阻止）

// 4. 小结对比
const map = new Map([[userB, 1]]);
const set = new Set([userB]);
console.log(map.size, set.size); // 1 1：普通集合会“抓住”对象
console.log("WeakMap/WeakSet 没有 size，没有遍历方法，只有 get/set/has/delete（Set 是 add/has/delete）");

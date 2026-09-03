// 5.7 Map 和 Set
// 教程：https://zh.javascript.info/map-set
// Node 运行：node Study-JavaScript/04-data-types/07-map-and-set/01-map-and-set.js

// 1. Map：键可以是任意类型
const map = new Map();
map.set("1", "字符串键");
map.set(1, "数字键");
map.set(true, "布尔键");
map.set({ name: "obj" }, "对象键");
console.log(map.get(1)); // 数字键
console.log(map.get("1")); // 字符串键：'1' 和 1 是两个键
console.log(map.size); // 4
console.log(map.has(true)); // true
map.delete(true);
console.log(map.size); // 3

console.log("-".repeat(20));

// 2. Map 遍历：keys / values / entries / forEach，保持插入顺序
const recipe = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
for (const key of recipe.keys()) console.log(key);
for (const value of recipe.values()) console.log(value);
for (const [k, v] of recipe.entries()) console.log(k, v);
recipe.forEach((v, k) => console.log(k, v));

console.log("-".repeat(20));

// 3. 对象 <-> Map
const obj = { name: "John", age: 30 };
const map2 = new Map(Object.entries(obj));
console.log(map2.get("name")); // John
console.log(Object.fromEntries(map2)); // {name: 'John', age: 30}

console.log("-".repeat(20));

// 4. Set：存不重复的值
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set); // Set(3) {1, 2, 3}
set.add(4).add(4);
console.log(set.has(4)); // true
console.log(set.size); // 4
for (const value of set) console.log(value);

console.log("-".repeat(20));

// 5. 课后练习
function unique(values) {
  return [...new Set(values)];
}
console.log(unique(["Hare", "Krishna", "Hare", "Krishna", ":-O"])); // ['Hare', 'Krishna', ':-O']

// 过滤变位词：按字母排序后的词只保留一个
function aclean(words) {
  const m = new Map();
  for (const w of words) {
    const key = w.toLowerCase().split("").sort().join("");
    m.set(key, w);
  }
  return [...m.values()];
}
console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])); // ['PAN', 'hectares', 'era']（顺序可能不同）

// 让 map.keys() 可复用：包一层 Array.from
const m2 = new Map([["a", 1], ["b", 2]]);
console.log(Array.from(m2.keys())); // ['a', 'b']
console.log([...m2.keys()]); // ['a', 'b']

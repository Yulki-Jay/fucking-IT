// 5.3 字符串（Strings）
// 教程：https://zh.javascript.info/string
// Node 运行：node Study-JavaScript/04-data-types/03-strings/01-strings.js

// 1. 引号：单引号/双引号一样，反引号支持插值和多行
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 2. 转义字符
console.log("换行：\n第二行");
console.log("tab：\t缩进");
console.log("反斜杠：\\");
console.log("emoji 长度注意：😀".length); // 注意：emoji 占 2 个 UTF-16 码元

console.log("-".repeat(20));

// 3. 取字符：[] / at() / charAt
const s = "Hello";
console.log(s[0]); // H
console.log(s.at(-1)); // o：at 支持负索引
console.log(s.charAt(1)); // e
for (const ch of s) {
  console.log(ch); // H e l l o（for..of 按字符遍历）
}

console.log("-".repeat(20));

// 4. 字符串不可变
let greeting = "Hi";
greeting[0] = "h";
console.log(greeting); // Hi：直接改字符无效
console.log(greeting.replace("H", "h")); // hi：要生成新字符串

// 5. 大小写
console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface

console.log("-".repeat(20));

// 6. 查找：indexOf / includes / startsWith / endsWith
const text = "Widget with id";
console.log(text.indexOf("Widget")); // 0
console.log(text.indexOf("widget")); // -1：区分大小写
console.log(text.indexOf("id", 2)); // 12：从位置 2 开始找
console.log(text.includes("with")); // true
console.log(text.startsWith("Widget")); // true
console.log(text.endsWith("id")); // true

console.log("-".repeat(20));

// 7. 截取：slice / substring / substr（substr 是旧方法，了解即可）
console.log("stringify".slice(0, 5)); // strin
console.log("stringify".slice(-4, -1)); // gif：slice 支持负数
console.log("stringify".substring(2, 6)); // ring
console.log("stringify".substring(6, 2)); // ring：substring 会自动交换参数

// 8. 比较：按 Unicode 编码，codePointAt / fromCodePoint 处理生僻字
console.log("a" > "Z"); // true：小写字母编码更大
console.log("Ö".codePointAt(0)); // 214
console.log(String.fromCodePoint(214)); // Ö
console.log("abc".localeCompare("abd")); // -1：按语言规则比较更合适

console.log("-".repeat(20));

// 9. 课后练习
function ucFirst(value) {
  if (!value) return value;
  return value[0].toUpperCase() + value.slice(1);
}
console.log(ucFirst("john")); // John

function checkSpam(value) {
  const lower = value.toLowerCase();
  return lower.includes("viagra") || lower.includes("xxx");
}
console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false

function truncate(value, maxlength) {
  return value.length > maxlength ? value.slice(0, maxlength - 1) + "…" : value;
}
console.log(truncate("What I'd like to tell on this topic is:", 20)); // What I'd like to te…

function extractCurrencyValue(value) {
  return Number(value.slice(1));
}
console.log(extractCurrencyValue("$120")); // 120

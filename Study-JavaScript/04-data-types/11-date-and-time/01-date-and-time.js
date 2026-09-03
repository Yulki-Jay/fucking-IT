// 5.11 日期和时间（Date and time）
// 教程：https://zh.javascript.info/date
// Node 运行：node Study-JavaScript/04-data-types/11-date-and-time/01-date-and-time.js

// 1. 创建：月份从 0 开始！
console.log(new Date(2026, 0, 15, 12, 30, 0)); // 2026-01-15
console.log(new Date("2026-01-15T12:00:00")); // ISO 字符串解析
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(Date.now()); // 当前时间戳（毫秒）

// 2. get 系列（本地时间）vs getUTC 系列
const d = new Date(2026, 5, 10, 15, 30, 45, 123);
console.log(d.getFullYear(), d.getMonth(), d.getDate()); // 2026 5 10
console.log(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()); // 15 30 45 123
console.log(d.getDay()); // 3：0=周日
console.log(d.getTime()); // 时间戳
console.log(d.getTimezoneOffset()); // 本地与 UTC 的分钟差

console.log("-".repeat(20));

// 3. set + 自动校准
const d2 = new Date(2026, 0, 31);
d2.setDate(d2.getDate() + 2);
console.log(d2.getMonth(), d2.getDate()); // 1 2：自动进到 2 月 2 日
d2.setHours(25);
console.log(d2.getHours(), d2.getDate()); // 1 ...：25 点自动进位到第二天 1 点

console.log("-".repeat(20));

// 4. 日期运算：相减得毫秒差
const start = new Date(2026, 0, 1);
const end = new Date(2026, 0, 2);
console.log((end - start) / 1000 / 60 / 60); // 24（小时）

// 5. 格式化：toLocaleString 在 Node 也可用
console.log(d.toLocaleString("zh-CN"));
console.log(d.toISOString()); // UTC 标准格式

// 6. 性能计时
const t0 = Date.now();
for (let i = 0; i < 1e6; i++) {} // eslint-disable-line no-empty
console.log(`耗时约 ${Date.now() - t0}ms`);

console.log("-".repeat(20));

// 7. 课后练习精选
const feb20 = new Date(2012, 1, 20, 3, 12);
console.log(feb20); // 2012-02-20 03:12

function getWeekDay(date) {
  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}
console.log(getWeekDay(new Date(2012, 0, 3))); // TU

function getDateAgo(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() - days);
  return copy.getDate();
}
console.log(getDateAgo(new Date(2015, 0, 2), 1)); // 1
console.log(getDateAgo(new Date(2015, 0, 2), 2)); // 31

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - today) / 1000);
}
console.log(getSecondsToday() >= 0); // true

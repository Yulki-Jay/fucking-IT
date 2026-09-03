// 5.10 解构赋值（Destructuring assignment）
// 教程：https://zh.javascript.info/destructuring-assignment
// Node 运行：node Study-JavaScript/04-data-types/10-destructuring/01-destructuring.js

// 1. 数组解构
const [first, second] = ["Julius", "Caesar"];
console.log(first, second); // Julius Caesar
const [, , title] = ["a", "b", "MEN"];
console.log(title); // MEN：跳过前两个
const [a = 1, b = 2] = [10];
console.log(a, b); // 10 2：默认值

// 交换变量：不需要临时变量
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// rest：收集剩余
const [head, ...rest] = [1, 2, 3, 4];
console.log(head); // 1
console.log(rest); // [2, 3, 4]

console.log("-".repeat(20));

// 2. 对象解构
const user = { name: "John", age: 30, city: "Beijing" };
const { name, age } = user;
console.log(name, age); // John 30
// 改名 + 默认值
const { name: n, age: years = 18, country = "China" } = user;
console.log(n, years, country); // John 30 China
// rest
const { city, ...others } = user;
console.log(city); // Beijing
console.log(others); // {name, age}

console.log("-".repeat(20));

// 3. 嵌套解构
const profile = {
  id: 1,
  info: { email: "a@b.com", tags: ["js", "node"] },
};
const {
  info: { email, tags: [tag1, tag2] },
} = profile;
console.log(email, tag1, tag2); // a@b.com js node

console.log("-".repeat(20));

// 4. 函数参数解构（配默认对象，防止没传参报错）
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(title, width, height);
}
showMenu({ title: "My Menu", width: 300 }); // My Menu 300 200
showMenu(); // Menu 100 200

console.log("-".repeat(20));

// 5. 课后练习：最高薪水
function topSalary(salaries) {
  let maxName = null;
  let maxSalary = 0;
  for (const [nameValue, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = nameValue;
    }
  }
  return maxName;
}
console.log(topSalary({ John: 100, Pete: 300, Mary: 250 })); // Pete
console.log(topSalary({})); // null

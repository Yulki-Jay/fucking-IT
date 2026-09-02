let message = "Hello!";
let phrase = message;

console.log("message:", message);
console.log("phrase:", phrase);

message = "Hello, World!";
console.log("message:", message);
console.log("phrase:", phrase);

console.log("*".repeat(20));


let user = { name: "John" };

let admin = user; // 复制引用

console.log("user:", user.name);
console.log("admin:", admin.name);

admin.name = "Pete"; // 改变了引用对象的属性

console.log("user:", user.name);
console.log("admin:", admin.name);

console.log("*".repeat(20));

let a = {};
let b = a; // 复制引用

console.log(a == b); // true
console.log(a === b); // true

let aa = {};
let bb = {}; // 两个独立的对象

console.log(aa == bb); // false
console.log(aa === bb); // false

console.log("==".repeat(20));

let user1 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user1, permissions1, permissions2); // 将 permissions1 和 permissions2 的属性复制到 user1 中
for (key in user1) {
  console.log(key, ":", user1[key]);
}

let clone = Object.assign({}, user1); // 克隆 user1 对象


// 深度克隆没学到



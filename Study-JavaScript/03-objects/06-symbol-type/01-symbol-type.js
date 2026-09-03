// 根据规范，只有两种原始类型可以用作对象属性键：

// 字符串类型
// symbol 类型

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false
console.log(id1 === id2); // false

console.log(id1) // Symbol(id)
console.log(id1.toString()) // Symbol(id)
console.log(id1.description) // id

let user = {
    name : "张三",
    [id1] : 1,
    [id2] : 2
}

console.log(user[id1]); // 1
console.log(user[id2]); // 2


console.log("*".repeat(20));
//symbol 在 for…in 中会被跳过
for (k in user) {
    console.log(k); // name 只显示name symbol 在 for…in 中会被跳过
}

let id3 = Symbol("id");
let user2 = {
    [id3] : 100
};

let clone = Object.assign({}, user2);
console.log(clone[id3]); // 100

let id4 = Symbol.for("id");
let id4Again = Symbol.for("id");
console.log(id4 === id4Again); // true
console.log("*".repeat(20));


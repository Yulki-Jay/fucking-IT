// 5.12 JSON 方法（JSON methods）
// 教程：https://zh.javascript.info/json
// Node 运行：node Study-JavaScript/04-data-types/12-json/01-json.js

// 1. stringify：对象 -> JSON 字符串
console.log(JSON.stringify({ name: "John", age: 30 })); // {"name":"John","age":30}
console.log(JSON.stringify([1, "a", true, null])); // [1,"a",true,null]
// 函数、undefined、Symbol 会被跳过（数组里变 null，单独转是 undefined）
console.log(JSON.stringify({ f() {}, u: undefined, s: Symbol("x"), a: 1 })); // {"a":1}
console.log(JSON.stringify([undefined, () => {}])); // [null,null]

// 2. 循环引用会报错
const room = { number: 23 };
const meetup = { title: "Conference", room };
room.occupiedBy = meetup;
try {
  JSON.stringify(meetup);
} catch (e) {
  console.log("循环引用：", e.constructor.name);
}

console.log("-".repeat(20));

// 3. replacer：第二个参数过滤字段
const user = { name: "John", age: 30, password: "secret", city: "Beijing" };
console.log(JSON.stringify(user, ["name", "age"])); // {"name":"John","age":30}
console.log(
  JSON.stringify(user, (key, value) => (key === "password" ? undefined : value))
);

// 4. space：第三个参数美化输出
console.log(JSON.stringify({ a: 1, b: { c: 2 } }, null, 2));

// 5. toJSON：自定义序列化
const event = {
  title: "Party",
  date: new Date(2026, 0, 1),
  toJSON() {
    return { title: this.title };
  },
};
console.log(JSON.stringify(event)); // {"title":"Party"}
// Date 自带 toJSON，所以日期会变成 ISO 字符串
console.log(JSON.stringify({ d: new Date(Date.UTC(2026, 0, 1)) }));

console.log("-".repeat(20));

// 6. parse：JSON 字符串 -> 值；reviver 还原日期
const text = '{"name":"John","birth":"1990-01-01T00:00:00.000Z"}';
const parsed = JSON.parse(text, (key, value) =>
  key === "birth" ? new Date(value) : value
);
console.log(parsed.birth instanceof Date); // true

// 7. 课后练习
const data = { name: "John", age: 30, city: "Beijing" };
const json = JSON.stringify(data);
console.log(JSON.parse(json)); // 深拷贝回对象

// 去掉循环引用的字段再序列化
const room2 = { number: 23 };
const meetup2 = { title: "Conference", room: room2, occupiedBy: { title: "x" } };
console.log(
  JSON.stringify(meetup2, (key, value) => (key === "occupiedBy" ? undefined : value))
);

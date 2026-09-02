// a ?? b 的结果是：

// 如果 a 是已定义的，则结果为 a，
// 如果 a 不是已定义的，则结果为 b。

let user;
console.log(user ?? "Anonymous"); // Anonymous

user = "Yuli";
console.log(user ?? "Anonymous"); // Yuli


// 要注意这两个例子不是同一个例子
// 假设我们在变量 firstName、lastName 或 nickName 中存储着一个用户的数据。如果用户决定不填写相应的值，则所有这些变量的值都可能是未定义的。

// 我们想使用这些变量之一显示用户名，如果这些变量的值都是 null/undefined，则显示 “匿名”。
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // "SuperCoder"
console.log(firstName || lastName || nickName || "Anonymous"); // "SuperCoder"
console.log("*".repeat(50));


firstName = "";
lastName = "";
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // "" (空字符串)
console.log(firstName || lastName || nickName || "Anonymous"); // "SuperCoder"
console.log("*".repeat(50));

// || 返回第一个 真 值。
// ?? 返回第一个 已定义的 值。

let height = null;
let width = null;

let area = height ?? 100 * width ?? 50; 
console.log(area); // 0，错误的写法，应该加括号

area = (height ?? 100) * (width ?? 50); // 正确的写法
console.log(area); // 5000


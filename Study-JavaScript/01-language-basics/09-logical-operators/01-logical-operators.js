let firstName = "";
let lastName = "";
let nickName = "SuperCoder";


//JavaScript 里的 || 不一定返回 true 或 false，它会返回参与运算的“某个原始值”。
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

console.log( "*".repeat(50) );
//JavaScript 里的 && 不一定返回 true 或 false，它会返回参与运算的“某个原始值”。
console.log( firstName && lastName && nickName && "Anonymous"); // "" (空字符串)

console.log( "*".repeat(50) );

// 与运算 && 在或运算 || 之前进行
// 与运算 && 的优先级比或运算 || 要高。

// 所以代码 a && b || c && d 跟 && 表达式加了括号完全一样：(a && b) || (c && d)。


console.log( null || 2 || undefined );
console.log(console.log( 1  ) || 2 || console.log( 3 ) );  // 对 alert 的调用没有返回值。或者说返回的是 undefined。

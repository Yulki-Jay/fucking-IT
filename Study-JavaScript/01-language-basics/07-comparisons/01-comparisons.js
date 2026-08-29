console.log(true ==1); // 输出: true
console.log(true ===1); // 输出: false


console.log(false ==0); // 输出: true
console.log(false ===0); // 输出: false

console.log(null == undefined); // 输出: true
console.log(null === undefined); // 输出: false

console.log(NaN == NaN); // 输出: false
console.log(NaN === NaN); // 输出: false

let a = true, b = 1;
console.log(a == 1); // 输出: true
console.log(a === 1); // 输出: false

console.log("-".repeat(40));

// 5 > 4
// "apple" > "pineapple"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

console.log(5 > 4); // 输出: true
console.log("apple" > "pineapple"); // 输出: false
console.log("2" > "12"); // 输出: true
console.log(undefined == null); // 输出: true, null 只与 undefined 相等。
console.log(undefined === null); // 输出: false
console.log(null == "\n0\n"); // 输出: false, null 只与 undefined 相等。
console.log(null === +"\n0\n"); // 输出: false
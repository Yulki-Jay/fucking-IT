let message = "Hello, World!";
message = 12345
console.log(message); // Output: 12345

// Numeber 类型
let num = 42;

console.log(Infinity); // 输出: Infinity
console.log(-Infinity); 


console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992


const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 输出: 1234567890123456789012345678901234567890n

//String 类型
let firstName = "Yulki"
let greeting = `Hello ${firstName}`
console.log(greeting); // 输出: Hello Yulki

//Boolean 类型  
let isJavaScript = true;
console.log(isJavaScript); // 输出: true
let isGreater = 10 < 5;
console.log(isGreater); // 输出: true

//Null 类型
let emptyValue = null;
console.log(emptyValue); // 输出: null

//Undefined 类型
let undefinedValue;
console.log(undefinedValue); // 输出: undefined
let age = 10;
console.log(age); // 输出: 10
age = undefined;
console.log(age); // 输出: undefined

//Symbol 类型
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");
console.log(symbol1 === symbol2); // 输出: false

//Symbol 类型的唯一性
console.log(typeof 0);
console.log(typeof undefined);
console.log(Math);
console.log(null);
console.log(typeof 123n);

console.log("-".repeat(40));
let name = "Ilya";

console.log( `hello ${1}` ); // ?

console.log( `hello ${"name"}` ); // ?

console.log( `hello ${name}` ); // ?
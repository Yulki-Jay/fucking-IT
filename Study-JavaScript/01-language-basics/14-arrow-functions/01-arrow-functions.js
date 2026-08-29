let sum = function(a, b) {
    return a + b;
};

console.log(sum(1, 2)); // 3

let sum2 = (a,b) => a + b;
console.log(sum2(1, 2)); // 3

console.log("*".repeat(50));

let double = a => a * 2;
console.log(double(3)); // 6

console.log("*".repeat(50));

let sayHi = () => console.log("Hi!");
sayHi(); // Hi!

console.log("*".repeat(50));

age = 20;
let welcome = age < 18 ?
    () => console.log("Bye!") :
    () => console.log("welcome!");
    
welcome(); // Greetings!

console.log("*".repeat(50));

let sum3 = (a, b) => {
    let result = a + b;
    return result; // 如果使用了大括号，则必须使用 return 来返回结果。
};

console.log(sum3(1, 2)); // 3   

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

console.log("*".repeat(50));

let ask = (question) => {
   return question ? ()=> console.log("You agreed.") : ()=> console.log("You canceled the execution.")
};
ask("123")() ;
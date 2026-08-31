let user = {
    name : "Yulki",
    age  : 27,
};
console.log(user.name);
console.log(user.age);

user.address = "Seoul";
console.log(user.address);

delete user.age;
console.log(user.age); // undefined

console.log("*".repeat(20));

let user2 = {};
user2["name"] = "Yulki";
console.log(user2.name);


console.log("*".repeat(20));
let fruit = "banana";

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};
console.log( bag.apple ); // undefined
console.log( bag.banana ); // 5 如果 fruit="banana"
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


function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}

function makeUser2(name, age) {
  return {
    name,
    age,
  }
}

let user3 = makeUser2("Yulki", 27);
console.log(user3.name);
console.log(user3.age);

console.log("key" in user3); // false
console.log("name" in user3); // true

console.log("*".repeat(20));

for (key in user3) {
  console.log(key,":",user3[key]);
}

console.log("==".repeat(20));
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  console.log( code ); // 49, 41, 44, 1
}

for (let code in codes) {
  console.log( + code ); // 49, 41, 44, 1
}
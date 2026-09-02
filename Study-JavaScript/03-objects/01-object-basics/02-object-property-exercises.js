let user = {
    name : "Yulki",
    surname : "Kim",
};
user.name = "Pete";
console.log(user.name); // Pete
delete user.name;
console.log(user.name); // undefined

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;    
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum); // 390

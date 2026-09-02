function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }

    // this.sayHi(){
    //     console.log(`Hi, I am ${this.name}`); // 这种“方法简写”只能写在对象字面量或者 class 里面，不能直接写在 this.xxx 后面。
    // }
}

let john = new User("John");
john.sayHi(); // Hi, I am John

let obj = {};

function A() {
    return obj;
 }
function B() {
    return obj;
}

let a = new A;
let b = new B;

console.log( a == b ); // true
console.log( a === b ); // true



function Calculator() {
    this.num1 = 0;
    this.num2 = 0;

    this.read = function(num1, num2) {
        this.num1 = +prompt("Enter first number:", 0);
        this.num2 = +prompt("Enter second number:", 0);
    }


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
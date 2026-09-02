function makeUser() {
    return {
        name: "John",
        ref : this
    };
}

let user = makeUser();
console.log(user.ref.name); // Error: Cannot read property 'name' of undefined

function makeUser2() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user2 = makeUser2();
console.log(user2.ref().name); // John


let calculator = {
    value1: 0,
    value2: 0,
    read(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    },
    sum(){
        return this.value1 + this.value2;
    },
    mul(){
        return this.value1 * this.value2;
    }
};

calculator.read(10,20);
console.log( calculator.sum() );
console.log( calculator.mul() );


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // 允许方法链式调用,默认返回值是 undefined,所以要返回 this
  },
  down() {
    this.step--;
    return this;
  },
  showStep(){ // 显示当前的 step
    console.log( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); 


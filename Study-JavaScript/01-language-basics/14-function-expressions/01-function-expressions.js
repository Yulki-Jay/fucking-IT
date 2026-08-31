let sayHi = function() {
    console.log("Hello");
};

sayHi();
console.log(sayHi); // 输出函数本身


let func = sayHi;
func(); // Hello

function ask(question, yes, no) {
    if(question){
        yes();
    }else{
        no();
    }
}

ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
)
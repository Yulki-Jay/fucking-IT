let i = 0;
while (i < 3){
    console.log(i);
    i++;
}
console.log("*".repeat(50));

i = 0;
do{
    console.log(i);
    i++;
}while (i < 3);
console.log("*".repeat(50));

for (let i = 0; i < 3; i++){
    console.log(i);
}
console.log("*".repeat(50));


i = 0;

for (; i < 3;) {
  console.log( i++ );
}

num = 23;
flag = true;
for(i=2;i<num;++i){
    if (num % i == 0){
        flag = false;
        break;
    }
}
if (flag){
    console.log(num + "是质数");
}else{
    console.log(num + "不是质数");
}

let yulki;
console.log(typeof(yulki));
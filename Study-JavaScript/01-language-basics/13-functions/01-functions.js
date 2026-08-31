function showMessage(fullName="Anonymous") {
    console.log(`Hello, ${fullName}`);
}

showMessage("Yulki");
result = showMessage();
console.log(result); // undefined, 因为函数没有返回值
console.log(typeof result); // undefined


function isPrime(n){
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function showPrimes(n){
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}
showPrimes(10);

function checkAge(age) {
    return (age > 18) ? console.log('You are old enough to enter.') : console.log('Do you have permission from your parents?');
}

checkAge(19); // true
checkAge(17); // Do you have permission from your parents?

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1


function pow(x, n) {
    return x ** n;
}
console.log(pow(3, 2)); // 9
console.log(pow(3, 3));

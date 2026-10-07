// anononymous function with input and with return

// 1. Sum of two numbers
let sum = function(a, b) {
    return a + b;
}

console.log(sum(10, 20));
// 2. Difference of two numbers
let diff = function(a, b) {
    return a - b;
}

console.log(diff(20, 10));
// 3. Product of two numbers
let product = function(a, b) {
    return a * b;
}

console.log(product(5, 4));
// find the average of two numbers
let avg = function(a, b) {
    return (a + b) / 2;
}

console.log(avg(10, 20));
// find the square of a number
let square = function(n) {
    return n * n;
}

console.log(square(5));
// 6.find the cube of a number
let cube = function(n) {
    return n * n * n;
}

console.log(cube(3));
// 7.check whether a number is even or odd
let check = function(n) {

    if(n % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(check(8));
// 8.display name
let display=function(fname){
    return "My name is"+fname;
}
let myName=display("Hero")
console.log(myName)
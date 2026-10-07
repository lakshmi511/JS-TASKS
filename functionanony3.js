// anonymous function without input and with return
let sum = function() {
    let a = 10;
    let b = 20;

    return a + b;
}

console.log(sum());
// 2.count the even and odd digits in a number
let count = function() {

    let n = 567894;
    let even = 0;
    let odd = 0;

    while(n != 0) {

        let ld = n % 10;

        if(ld % 2 == 0) {
            even++;
        }
        else {
            odd++;
        }

        n = parseInt(n / 10);
    }

    return [even, odd];
}

console.log(count());
// 3.find the first even digit from a number
let firstEven = function() {

    let n = 753914286;

    while(n != 0) {

        let ld = n % 10;

        if(ld % 2 == 0) {
            return ld;
        }

        n = parseInt(n / 10);
    }

    return "No even digit";
}

console.log(firstEven());
// 4.find the first prime numbers between 50 and 100
let prime = function() {

    for(let n = 50; n <= 100; n++) {

        let count = 0;

        for(let i = 1; i <= n; i++) {

            if(n % i == 0) {
                count++;
            }
        }

        if(count == 2) {
            return n;
        }
    }

    return "No prime number";
}

console.log(prime());
// 5.find the average of two numbers
let avg=function()
{
    let a1=11;
    let b=5;
    let c=6;
    let summ=a1+b+c;
    let average=summ/3
    return average;


}
console.log(avg());
// 6.find the smallest of two numbers
let smallest=function(){
    let n1=5;
    let n2=15;
    if(n1<n2){
        return " n1 is smallest" ;
    }
    else {
        return "n2 is smallest"
    }
}
console.log(smallest())
// 7.find the simple interest
let si = function() {

    let p = 5000;
    let r = 5;
    let t = 2;

    let simple = (p * r * t) / 100;

    return simple;
}

console.log(si());
// 8.find the factorial of a number
let fact = function() {

    let n = 5;
    let f = 1;

    for(let i = 1; i <= n; i++) {
        f = f * i;
    }

    return f;
}

console.log(fact());
// 9.count the digits of anumber
let digit = function() {

    let n = 5678;
    let count = 0;

    while(n != 0) {
        count++;
        n = parseInt(n / 10);
    }

    return count;
}

console.log(digit());
// 10.display the largest digit from a given number
let largest=function(){
    let n=498
    let large=0
    while(n!=0){
        let ld=n%10
        if(ld>large){
            large=ld
        }
        n=parseInt(n/10)
    }
    return large;
}
console.log(largest())
// 11..display the smallest digit from a given number
let small=function(){
    let n=498
    let smallest=9
    while(n!=0){
        let ld=n%10
        if(ld<smallest){
            smallest=ld
        }
        n=parseInt(n/10)
    }
    return smallest;
}
console.log(small())
// 12.find the difference b/w the large and small in a given number
let difference=function(){
    let b=2198
    let large=0
    let small=9
    while(b!=0){
        let ld=b%10
        if(ld>large){
            ld=large
        }
        if(ld<small){
            ld=small
        }
        b=parseInt(b/10)
    }
    let diff=large-small
    return diff;

}
console.log(difference())
// 13.print even numbers from 1 to 10
let even = function() {

    let n = 10;

    for(let i = 1; i <= n; i++) {

        if(i % 2 == 0) {
            console.log(i);
        }
    }

    return "even";
}

console.log(even());
// 14.print odd numbers from 1 to 10
let odd = function() {

    let n = 10;

    for(let i = 1; i <= n; i++) {

        if(i%2!=0) {
            console.log(i);
        }
    }

    return "odd";
}
console.log(odd())
// 14.display helloworld
let display=function(){
    return "Helloworld"
}
console.log(display())

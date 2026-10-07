for(let i=10;i>=5;i--){
    if(i%2!==0){
        console.log(i)
    }
}
//print the number in the range 10 to 15 which are divisible by 5
for(let i=10;i<=15;i++){
    if(i%5==0){
        console.log(i)
    }
}
//sum of even numbers 1 to 5
// let sum=0
// for(let i=1;i<=5;i++){
//     if(i%2==0){
//         sum=sum+i
//     }
// }
//console.log(sum)
//display the sum of numbers which are divisible by 4 in the range of 10 to 20
// let sum=0
// for(let i=10;i<=20;i++){
//     if(i%4==0){
//         sum=sum+i
//     }
// }
//  console.log("sum of numbers divisible by 4",sum)
//count the odd no in the range of 1 to 5
// let count=0
// for(let i=1;i<=5;i++){
//     if(i%2!==0){
//         count=count+1
//     }
// }
// console.log(count)
//factors of 6
// for(let i=1;i<=6;i++){
// if(6%i==0){
//     console.log(i);
//   }
// }
//count the factors of 6
// let count=0
// let n=6
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count=count+1
//     }
// }
// console.log(count)
//print print prime factors
let n=7;
let count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count=count+1
    }
}
console.log("count of factors=",count);
if(count==2){
    console.log(n,"Is is a prime Number")
}
else{
    console.log(n,"Is not a prime Number ")
}
//write the prgrm to find the sum of factors of given number
// let a=6;
// let sum=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         sum=sum+i
//     }
// }
// console.log(sum)
//print the n is perfect or not
let b=9
let sum=0;
for(let i=1;i<b;i++){
    if(b%i==0){
        sum=sum+i
    }
}
console.log(sum)
if(sum==b){
    console.log(b,"is a perfect number")
}
else{
    console.log(b,"is not a perfect number")
}
// let i=1
// while(i<=5){
//     console.log(i);
//     i=i+1
// }
//sequence 3,6,9,12
let c=3
while(c<=12){
    console.log(c)
    c=c+3
}
//10 9 8 7 6 5
let i=10
while(i>=5){
    console.log(i);
    i-=1
}
//120 100 80 60
let m=120
while(m>=60){
    console.log(m);
    m=m-20
}


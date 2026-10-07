//Find the average of numbers from 1 to N.
let n=5
let sum=0
for(let i=1;i<=n;i++){
    sum=sum+i
}
let avg=sum/n
console.log(avg)
// Find the sum of squares of numbers from 1 to N.
let n1=5
let sum1=0
for(let i=1;i<=n1;i++){
    sum1=sum1+(i*2)

}
console.log(sum1)
//3.Find the sum of cubes of numbers from 1 to N.
let n2=5
let sum2=0
for(let i=1;i<=n2;i++){
    sum2=sum2+(i**3)
}
console.log(sum2)
// Calculate the power of a number without using the ** operator.
let base=2
let power=5
let result=0
for(let i=1;i<=5;i++){
    result=base*power
}
console.log(result)
// Display the first N terms of the Fibonacci series.
let f=7
let a=0
let b=1
for(let i=1;i<=f;i++){
    console.log(a);
   let c=a+b
    a=b
    b=c
}
//6.Display the first N terms of the series:
//     1, 1/2, 1/3, 1/4, ...
//     Example: If N = 4, display 1, 1/2, 1/3, 1/4.
let e=4
for(let i=1;i<=4;i++){
    console.log("1/",i)
}

// 7.Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
//     Example: If N = 5, display 1, 11, 111, 1111, 11111.
let n6=5
let sum3=0
for(let i=1;i<=n6;i++){
   sum3=sum3*10+1
   console.log(sum3);
}

//8. Display the first N terms of the series:
    // 1, 3, 9, 27, 81, ...
    // Each term is obtained by multiplying the previous term by 3.
let n5=5
let n7=1
for(let i=1;i<=n5;i++){
    console.log(n6);
    n7=n7*3
    
}

//break
//1.Find the first even digit from the left in 753914286.
// let n=753914286
// let a=0
// while(n!=0){
//     let ld=n%10
//     a=a*10+ld
//     n=parseInt(n/10)
// }
// while(a!=0){
//     b=a%10
//     if(b%2==0){
//         console.log(b)
//         break
//     }
//     a=parseInt(a/10)
// }

//2.Find the first prime number between 50 and 100.
// for(let j=50;j<=100;j++){
//     let fac=0
//     for(let i=1;i<=j;i++){
//         if(j%i==0){
//             fac=fac+1
            
//         }
//     }
//     if(fac==2){
//     console.log(j)
//     break
// }

    // }

//3.Find the first number whose digit sum is 10.
// let b1=10
// let i=1
// while(b1!=0){
//     let sum=0
//     let x=i
//     while(x>0){
//         let ld=x%10
//         sum=sum+ld
//         x=parseInt(x/10)
//     }
//     if(sum==10){
//         console.log(i)
//         break
//     }
//     i++
// }

//4.Find the first number with exactly 3 divisors between 1 and 100.

// for(let j=1;j<=100;j++){
//     let count=0
//     for(let i=1;i<=j;i++){
//         if(j%i==0){
//             count++
//         }
//     }
//     if(count==3){
//         console.log(j)
//         break
//     }  
// }

//5.Stop when 3 consecutive odd numbers occur between 1 and 50.
// let count=0
// for(let i=1;i<=50;i++){
//     if(i%2!=0){
//         count++
//         console.log(i)
//     }
// if(count==3){
//      break
// }
// }

//6.Find the first palindrome between 10 and 500.
// for (let j=10;j<=500;j++){
//     let n=j
//     let on=n
//     let rev=0
//     while(n!=0){
//         let ld=n%10
//         rev=rev*10+ld
//         n=parseInt(n/10)
//     }
 
//     if(on==rev){
//         console.log(j)
//     break
//     }
// }

//7.Find the first perfect number between 1 and 1000.

// for(let j=1;j<=1000;j++){
//     let sum=0
//     for(let i=1;i<j;i++){
//         if(j%i==0){
//             sum=sum+i
//         }
//     }
//     if(sum==j){
//        console.log(j)
//      break
//     }
// }

//8.Print the first 5 even numbers.
// let count1=0
// for(i=1;i<=30;i++){
//     if(i%2==0){
//         count1++
//         console.log(i)
//     }
//     if(count1==5){
        
//         break
//     }
// }

//9.Print the first 5 prime numbers.
// let count2=0
// for(let j=50;j<=100;j++){
//     let fac=0
//     for(let i=1;i<=j;i++){
//         if(j%i==0){
//             fac=fac+1
            
//         }
//     }
//     if(fac==2){
//            console.log(j)
//            count2++
//         }
//     if(count2==5){
//         break
//     }

// }

//10.Print the first 3 numbers divisible by 7
// let c=0
// for(i=10;i<=50;i++){
//     if(i%7==0){
//         c++
//         console.log(i)
//     }
//     if(c==3){
//        break 
//     }
// }

//continue
//1.Print 1–30, skipping even numbers
// for(let i=1;i<=30;i++){
//     if(i%2==0){
//         continue
//     }
//     console.log(i)
// }

//2.Print 1–40, skipping multiples of 4.
// for(let i=1;i<=40;i++){
//     if(i%4==0){
//         continue
//     }
//     console.log(i)
// }

//3.Print 1–30, skipping numbers from 10–20
// for(let i=1;i<=30;i++){
//     if(i>=10 && i<=20){
//         continue
//     }
//     console.log(i)
// }

//4.Print 1–50, skipping multiples of 3
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue
//     }
//     console.log(i)
// }

//5.Extract 502304, skipping digit 0
// let m=502304
// for(let i=1;i<=m;i++){
//     let ld=m%10
//     m=parseInt(m/10)
//     if(ld==0){
//         continue
//     }
//     console.log(ld)

// }

//6.Extract 5832461, printing only even digits
// let m1=5832461
// let b=0
// while(m1!=0){
//     let ld=m1%10
//     m1=parseInt(m1/10)
//     if(ld%2!=0){
//         continue
//     }
//     b=b*10+ld
// }
// console.log(b)

//7. Extract 1432578, skipping odd digits
// let mm=1432578
// let c=0
// while(mm!=0){
//     let ld=mm%10
//     mm=parseInt(mm/10)
//     if(ld%2!=0){
//         continue
//     }
//     c=c*10+ld
// }
// console.log(c)

//8.Print 1–200, skipping multiples of 3 or 5
// for(let i=1;i<=200;i++){
//     if(i%3==0 || i%5==0){
//         continue
//     }
//     console.log(i)
// }

//9.Print 1–500, skipping numbers with odd digit sum
// for(let i=1;i<=500;i++){
//     let x=i
//     let sum=0
//     for(let j=1;j<=i;j++){
//         k=x%10
//         sum=sum+k
//         x=parseInt(x/10)
//     }
//     if(sum%2!=0){
//         continue
//     }
//     console.log(i)
// }

//10.Print 1–500, skipping numbers containing digit 0
// for(let i=1;i<=500;i++){
//     let x=i
//     let f=0
//     for(let j=1;j<=x;j++){
//         g=x%10
//         x=parseInt(x/10)
//      if(g==0){
//         f=1
//         }
//     }
//     if(f==1){
//         continue
//     }
// console.log(i)
// }

//continue+break

// 1.Print 1–50, skip multiples of 3, stop at 40
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue
//     }
//     if(i==40){
//         break
//     }
// console.log(i)
// }

//2.Print odd numbers, skip evens, stop at the first multiple of 7
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         continue
//     }
    
//     if(i%7==0){
//         break
//     }
// console.log(i)
// }

//3.Extract 5830421, skip odd digits, stop at 0
// let xy=5830421
// let m=1
// while(xy!=0){
//     let ld=xy%10
//     nb=parseInt(xy/10)
//     if(ld%2!=0){
//         continue
//     }
//     if(ld==0){
//         break
//     }
// console.log(ld)
// }

// 4.Extract 8325147, print digits until 5.
let nb1=8325147
let b=1
while(nb1!=0){
    let ld=nb1%10
    nb1=parseInt(nb1/10)
    if(ld==5){
        break
    }
console.log(ld)
}

// 5.Search from 51, skip non-multiples of 9, stop at the first multiple of 9
for(let i=51;i<=80;i++){
    if(i%9!=0){
        continue
    }
console.log(i)
break
}

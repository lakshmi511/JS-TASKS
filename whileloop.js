//find the sum of digits in a given number
let n=738
let sum=0
while(n!=0){
    let ld=n%10
    sum=sum+ld
    n=parseInt(n/10)
}
console.log(sum)
//find the average of digits in a given number
let a=624
let count=0
let summ=0
while(a!=0){
    let ld=a%10
    summ=summ+ld
    count=count+1

    a=parseInt(a/10)


}
let avg=summ/count;
console.log(avg)
//find the sum of the first digit and the last digit of a given number
// let n=936
// let firstdigit=n;
// let lastdigit=n%10
// while(firstdigit>=10){
//   firstdigit=parseInt(firstdigit/10)
// }
// let sum=firstdigit+lastdigit;
// console.log(sum)
// //find the average of digits that are divisible by 5 in a given number
// let a=12575
// let sum1=0
// let count1=0
// while(a!=0){
//     let ld=a%10
//     if(a%5==0){
//         sum1=sum1+ld
//         count1=count1+1
//     }
//     a=parseInt(a/10)
// }
// let avg=sum1/count1
// console.log(avg)
//find the difference b/w the largest digit and the smallest digit in a given number
let b=58321
let large=0
let small=9
while(b!=0){
    let ld=b%10
    if(ld>large){
        large=ld
    }
    if(ld<small){
        small=ld
    }
    b=parseInt(b/10)
}
let difference=large-small;
console.log(difference)



//display the digits in given number in reverse order
// let  n=342

// while(n!=0){
//     let ld=n%10
//     console.log("ld=",ld)
//     n=parseInt(n/10);
//     console.log("n=",n)
// }
//count the digits in given number
// let a=342
// let count=0
// while(a!=0){
//     let ld=a%10
//     count=count+1
//     a=parseInt(a/10);


// }
// console.log(count)
//find the sum of digits in given number
// let n=123
// let sum=0
// while(n!=0){
//     let ld=n%10;
//     sum=sum+ld;
//     n=parseInt(n/10)
// }
// console.log(sum)
//reverse the number and store the number in reverse
// let n=123
// let reverse=0
// while(n!=0){
//     let ld=n%10
//     reverse=reverse*10+ld
//     n=parseInt(n/10)
// }
// console.log(reverse)
//check given number is palindrome or not
// let n=68791;
// let newNum=n;
// let orginal=0;
// while(n!=0){
//     let ld=n%10;
//     orginal=orginal*10+ld
//     n=parseInt(n/10);
// }
// if(orginal==newNum){
//     console.log("palindrome");
// }
// else{
//     console.log("not a palindrome")
// }
//display even digits from given number
// let n=2569998643
// while(n!=0){
//     let ld=n%10
//     if(n%2==0){
//         console.log("ld")
//     }
//     n=parseInt(n/10)
// }
//count odd digits in given number
// let n=123568
// let count=0
// while(n!=0){
//     let ld=n%10
//     if(n%2!=0){
//         count=count+1
//     }
//     n=parseInt(n/10)
    
// }
// console.log(count)
//display the lagerest digit from the number
// let n=231
// let largestdigit=0
// while(n!=0){
//     let ld=n%10
//     if(ld>largestdigit){
//         largestdigit=ld
//     }
//     n=parseInt(n/10)
// }
// console.log(largestdigit)
//smallest digit
// let n=231
// let small=9
// while(n!=0){
//     let ld=n%10
//     if(ld<small){
//         small=ld
//     }
//     n=parseInt(n/10)
// }
// console.log(small)



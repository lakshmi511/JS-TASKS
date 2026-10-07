// Anonymous function without input and without return
let say=function(){
    console.log("My name is:Vara")
}
say()
// 2.count the digits in given number
let digit=function(){
    let a=367
    let count=0
    while(a!=0){
        let ld=a%10
        count+=1
        a=parseInt(a/10)

     }
     console.log(count)
}
digit()
// 3.find the sum of digits in given number
let sum=function(){
    let n=123
    let summ=0
    while(n!=0){
        let ld=n%10
        summ+=ld
        n=parseInt(n/10)
    }
    console.log(summ)

}
sum()
// 4.reverse the number
let reverse=function(){
    let n=521
    let rev=0
    while(n!=0){
        let ld=n%10
        rev=rev*10+ld
        n=parseInt(n/10)
    }
    console.log(rev)
}
reverse()
//5.write the prgm to find the sum of factors of given number
let number=function(){
    let n=6;
    let summm=0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            summm+=i
        }
    }
    console.log(summm)
}
number()
// 6.find the factorial of 4
let result=function(){
    let n=4
    let fact=1
    for(let i=1;i<=n;i++){
    
            fact*=i
        }
         console.log(fact)
    }
   

result()
// 7.check given value is postive ,negative or zero
let res=function(){
    let n=90
    if(n>0){
        console.log("positive")
    }
    else if(n<0){
        console.log("negative")
    }
    else{
        console.log("zero")
    }
}
res()
// 8.print the range from 1 to 20
let range=function(){
    for(let i=1;i<=20;i++){
        console.log(i)
    }
}
range()
// 9.print the range from 15 to 10
let ress=function(){
    for(let i=15;i>=10;i--){
        console.log(i)
    }
}
ress()
//10.find the largest among three numbers
let largest=function(){
    let a=25
    let b=45
    let c=35
    if(a>b && a>c){
        console.log(a,"is greatest")
    }
    else if(b>a && b>c){
        console.log(b,"is greatest")
    }
    else{
        console.log(c,"is greatest")
    }
}
largest()
//11.find the square of a number
let square=function(){
    let n=8
    for(let i=1;i<=n;i++){
        console.log(i**2)
    }
}
square()
// 12.find the cube of a number
let cube=function(){
    let n=3
    for(let i=1;i<=n;i++){
        console.log(i**3)
    }
}
cube()
// 13.check whether a number is a 3-digit number
let num=function(){
    let n=521
    if(n>99 && n<999){
        console.log(n,"is a 3-digit")
    }
    else{
        console.log(n,"is not a 3-digit number")
    }
}
num()
// 14.check whether a number is even or odd
let check=function(){
    let n=7

        if(n%2==0){
            console.log(even)
        }
        else{
            console.log("odd")
        }
    }

check()
// 15.check whether a number is divisible by 5 or not
let divisible=function(){
    let n = 45;

    if(n % 5 == 0) {
        console.log("divisible by 5");
    }
    else {
        console.log("not divisible by 5");
    }

}
divisible()
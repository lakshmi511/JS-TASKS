// anonymous function with input and without return
let displayName=function(name){
    console.log("my name is:"+name)
}
displayName("welcome")
// 2.check whether a year is a leap year
let checkyear=function(leapyear){
    if(leapyear%400==0||leapyear%4==0 &&leapyear%100!=0){
        console.log("year"+leapyear+"is a leap year")
    }
    else{
        console.log("year"+leapyear+"is not a leap year");
    }
}
checkyear("2020")
// 3.check whether a number is prime or not
let prime=function(n){
    let count=0
    for(let i=1;i<=n;i++){
        if(n%i==0){
            count+=1

        }
    }
if(count==2){
    console.log("prime")
}
else{
    console.log("not a prime")
}
}
prime(4)
// 4.find the number is palindrome or not
let pal=function(n){
    let reverse=0
    let temp=n
    while(temp>0){
        let ld=temp%10
        reverse=reverse*10+ld
        temp=parseInt(temp/10)

    }
    if(n==reverse){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}
pal(121)
// 5.check whether a number is perfect number
let perfect=function(n){
    
    let sum=0
    for(let i=1;i<n;i++){
        if(n%i==0){
            sum+=i
        }
    }
    if(sum==n){
        console.log(n,"is a perfect number")
    }
    else{
        console.log(n,"is not a perfect number")
    }
}
perfect(6)
// 6.find the sum of factors of a number
let summ=function(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            sum+=i
        }
    }
    console.log(sum)
}
summ(6)
// 7.find the largest among three numbers
let largest=function(n1,n2,n3){
    if(n1>n2 &&n1>n3){
        console.log(n1,"is greatest")
    }
    else if(n2>n1 && n2>n3){
        console.log(n2,"is greatest")
    }
    else{
        console.log(n3,"is greatest")
    }
}
largest(21,67,98)
// 8.reverse the number
let result=function(n){
    let reverse=0
    while(n!=0){
        let ld=n%10
        reverse=reverse*10+ld
        n=parseInt(n/10)
    }
    console.log(reverse)
    
}
result(521)
// 9.find the difference between two numbers
let difference=function(a,b){
    let diff=(a-b)
    console.log("difference=",diff)
}
difference(10,5)
// 10.find the cube of a number
let cube=function(n){
    for(let i=1;i<=n;i++){
        console.log(i**3)
    }
}
cube(3)
// 11.count the digits of a number
let digit=function(n){
    let count=0
    while(n!=0){
        let ld=n%10
        
            count+=1
            n=parseInt(n/10)
        }
        console.log(count)
      

    }


digit(5678)
// 12.print the range from 1 to 12
let range=function(n){
    for(let i=1;i<=n;i++){
        console.log(i)
    }
}
range(12)
// 13.print the even numbers from 10 t0 20
let even=function(n){
    for(let i=1;i<=n;i++){
        if(n%2==0){
            console.log("even")
        }
    }
}
even(20)
// 14.find the sum of two numbers
let two=function(c,d){
    console.log(c+d)
}
two(10,20)
//15.add three numbers

let add=function(g,h,i){
    let sum=g+h+i;
    console.log("add three numbers=",sum)
}
add(5,9,7)
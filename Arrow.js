//Arrow function
// Without Input & Without Return
// 1.Print numbers from 1 to 10
let a=()=>{
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
a()
//2.Print all even numbers from 1 to 20.
let b=()=>{
    for(let i=1;i<=20;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
b()
//3.Print the multiples of 5 from 5 to 50.
let c=()=>{
    for(let i=5;i<=50;i++){
        if(i%5==0){
            console.log(i)
        }
    }
}
c()
//4.Print the square of numbers from 1 to 5.
let d=()=>{
    for(let i=1;i<=5;i++){
        console.log(i**2)
    }
}
d()
//5.Print all odd numbers from 1 to 20.
let e=()=>{
    for(let i=1;i<=10;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
e()
// 2. With Input & Without Return
//6. Take a number and print whether it is positive or negative.
let f=(x)=>{
    if(x>0){
        console.log(x+"  is positive")
    }
    else{
        console.log(x+" is negative")
    }
}
f(3)
//7.Take a number and print whether it is even or odd.
let g=(x)=>{
    if(x%2==0){
        console.log(x+" is even")
    }
    else{
        console.log(x+" is odd")
    }
}
g(10)
//8.Take two numbers and print their sum.
let h=(x,y)=>{
    console.log(x," + ",y," = ",x+y)
}
h(13,28)
//9.Take a number and print its multiplication table.
let k=(x)=>{
    for(let i=1;i<=10;i++){
    console.log(x," x ",i," = ",x*i)
}
}
k(3)
//10.Take a number and print all its factors.
let l=(x)=>{
    for(let i=1;i<=x;i++){
        if(x%i==0){
            console.log(i)
        }
    }
}
l(5)
// 3. Without Input & With Return
// 11.Return the sum of numbers from 1 to 10.
let mm=()=>{
    let sum=0
    for(let i=1;i<=10;i++){
        sum+=i
    }
    return sum
}
console.log(mm())
//12.Return the largest number between 10 and 20.
let nn=()=>{
   let a=10
   let b=20
   if(a>b){
    return a+" is largest"
   } 
   else{
    return b+" is largest"
   }
}
console.log(nn())
//13.Return the first even number from 1 to 10.
let o=()=>{
    for(let i=1;i<=10;i++){
        if(i%2==0){
            return i
        }
    }
}
console.log(o())
//14.Return the sum of even numbers from 1 to 20.
let p1=()=>{
    let sum=0
    for(let i=1;i<=20;i++){
        sum+=i
    }
    return sum
}
console.log(p1())
// 15.Return the factorial of 5.
let q1=()=>{
    let n=6
    let fact=1
    for(let i=1;i<=n;i++){
        fact*=i
    }
    return fact
}
console.log(q1())
// 4. With Input & With Return
// 16.Take a number and return its square.
let r1=(x)=>{
    return x**2
}
console.log(r(3))
//17.Take two numbers and return the larger number.
let ss=(x,y)=>{
    if(x>y){
        return x+" is largest"
    }
    else{
        return y+" is largest"
    }
}
console.log(ss(5,19))
//18.Take a number and return whether it is even or odd.
let t=(x)=>{
    if(x%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(t(6))

//19.Take two numbers and return their multiplication.
let u=(x,y)=>{
    return x*y
}
console.log(u(3,4))
// 20.Take a number and return the sum of its digits.
let vv=(x)=>{
    let sum=0
    for(let i=1;i<=x;i++){
        a1=x%10
        sum+=a1
        x=parseInt(x/10)
    }
    return sum
}
console.log(vv(4637))
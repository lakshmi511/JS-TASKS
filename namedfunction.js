//named functiout without input without output
function sayHello(){
    console.log("SayHello");
    
}
sayHello()
//add three numbers
function addthree(){
    let a=11;
    let b=19;
    let c=5;
    let sum=a+b+c;
    console.log("sum of three numbers=",sum)
}
addthree()
//display the name by storing the variable
function displayName(){
let fname="vara"
console.log("name",fname)
}
displayName()
//named function with input and without return
function displayName(aname){
    console.log("my sister name is",aname)
}
displayName("Anjali")
//check the given number is even or not
function even(n1){
    if(n1%2==0){
        console.log(n1," is even")
    }
    else{
        console.log(n1,"is not even")
    }
}
even(5)
even(10)
//take 3 as arguments and display the avg of that
function average(n2,n3,n4){
    
    let avg=n2+n3+n4/3
    console.log("average of three",avg)
}
average(5,10,15)
//function without input &with return
// function displayName(){
//     let cname="nagaraju"
//     return cname;
// }
// let myname=displayName()
// console.log(myname)
//write the code factorial of 5
function factorial(){
    let b=5;
    let fact=1;
    for(let i=b;i>=1;i--){
        fact=fact*i;
    }
    return "factorial of"+b+"="+fact;
}
let value=factorial()
console.log(value)
//with input and with return
function displayName(dname){
    return dname;
}
let yname=displayName("lakshmi")
console.log("yname")

   
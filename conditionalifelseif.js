//check a number is positive,negative or zero
let n=21;
if(n>0){
    console.log(n,"positive");
    
}
else if(n<0){
    console.log(n,"negative");
}
else if(n==0){
    console.log(n,"zero")
}
else{
    console.log(n,"not a number");
}
//check given value is uppercase,lc,not a alphabet
let ch="a"
if(ch>="A" && ch<="Z"){
    console.log(ch,"Uppercase");
}
else if(ch>="a" && ch<="z"){
    console.log(ch,"lowercase");
}
else{
    console.log("not a alphabet");
}
//write the code to check alphabet digit or symbol
//Display the grade based on marks
let marks=98
if(marks>=90){
    console.log("O Grade");
}
else if(marks>=71 && marks<=90){
    console.log( marks,"A Grade")
}
else if(marks>=50 && marks<=70){
    console.log("B Grade")
}
else if(marks>=41 && marks<=50){
    console.log("C Grade")
}
else if(marks>=36 && marks<=40){
    console.log("pass")
}
else{
    console.log("fail")
}
// let n="@"
// if(n>="A" && n<="Z"){
//     console.log("alphabet")
// }
// else if(n>0 && n<=9){
//     console.log("digit")
// }
// else {
//     console.log("not a alphabet")
// }
//nested if
// 
//check given number is even or odd only if it is positive 
let m=8;
if(m>0){
    console.log(m,"positive");
    if(m%2==0){
    console.log("even")
    }
    else{
    console.log("odd")
    }
}
else{
    console.log("not positive")

}
//write code to display smallest number among two values only.if they are not equal
let n1=5;let n2=3;
if(n1!==n2){
    console.log("n1,n2 are not equal");
    if(n<0){
        console.log("n1 is smallest");
    }
    else{
        console.log("n2 is smallest");
    }
}
else{
    console.log("n1,n2 are equal")
}

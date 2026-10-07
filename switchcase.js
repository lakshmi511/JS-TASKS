let n1=11;
let n2=19;
let operator="-"
switch(operator){
    case "+":
        console.log("addition of n1 and n2 is", n1+n2);
        break;
    case "-":
        console.log("subtraction of n1 and n2 is", n1-n2);
        break;
    case "*":
        console.log("multiplication of n1 and n2 is", n1*n2);
        break;
    case "/":
        console.log("division of n1 and n2 is", n1/n2);
        break;
    case "%":
        console.log("modulus of n1 and n2 is",n1%n2);
        break;
    case "**":
        console.log("exponential of n1 and n2 is",n1**n2);
        break;
    default:
        console.log("error")
}
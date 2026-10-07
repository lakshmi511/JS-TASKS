function avgthree(){
let n1=parseInt(document.getElementById("n1").value);
let n2=parseInt(document.getElementById("n2").value);
let n3=parseInt(document.getElementById("n3").value);
let sum=n1+n2+n3
document.getElementById("sum").value=sum;
 let average=sum/3;
 document.getElementById("avg").value=average;
}

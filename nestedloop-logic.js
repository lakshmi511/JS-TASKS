//for the range of 1 to 5 .print the pairs whose sum is 5
// for(let j=1;j<=5;j++){
//     for(let i=1;i<=5;i++){
//         if(j+i==5){
//             console.log("j=",j," ","i=",i,"sum=",j+i)
//         }
//     }
// }
// write the codde to print even numbers in the range of 1 to 10
// for(let i=1;i<=10;i++){
//     let a=i
//     if(a%2==0){
//         console.log(a)
//     }
// }
// // write the codde to print odd numbers in the range of 1 to 10
// for(let i=20;i<=30;i++){
//     let a=i
//     if(a%2!==0){
//         console.log(a)
//     }
// }
//write the code to display the multiplication table for each number in the range.(1 to 5)
for(let j=1;j<=5;j++){
    let n=j
    console.log("-----",n,"'s multiplication table")

    for(let i=1;i<=10;i++){
       console.log(n,"x",i," = ",n * i)
}
}
// print the factorial of each number in the range(1 to 5)
for(let j=1;j<=5;j++){
    let n=j
    let fact=1
    for(let i=1;i<=n;i++){
        fact=fact*i

    }
    console.log(fact)
}
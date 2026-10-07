// if else logics
// check whether a given number is a 3-digit number or not
let n=900;
if(n>100 && n<999){
    console.log(n," is,3-digit number",);
}
else{
    console.log(n,"is not 3-digit number");
}
//2.Check whether a given number is divisible by both 3 and 5 or not.
let a=5;
if(a%3==0 && a%5==0){
    console.log(a, " is divisible by both 3 and 5");
}
else{
     console.log(a, " is not divisible by both 3 and 5");

}
  //3.Check whether a given triangle is a valid triangle or not
  //hint:the sum of any two sides should be greater than the third side.
  let d=60;
  let e=80;
  let f=40;
  if(d+e>f && e+f>d && f+d>e){
    console.log("valid triangle");
  }
  else{
    console.log("not a valid triangle")
  }
  // 4.check whether a given is a multiple of 10 or not/
  let c=5;
  if(c%10==0){
    console.log(c,"multiple of 10");
  }
  else{
    console.log(c," is not multiple of 10")
  }
  //if-elif-else
  //1.check the type of triangle on its sides.
  //equilateral,isosceles,or scalene
  let a1=70;
  let b1=60;
  let c1=10;
  if(a1==b1 && b1==c1){
    console.log("equilateral triangle");
  }
  else if(a1==b1||b1==c1||c1==a1){
    console.log("isoceles");
  }

  else{
    console.log("scalene");
  }
//calculate the electricity bill based on units consumed.
//0-100:2/unit,101-200:3/unit,201-300:5/unit,above 300:7 unit
let bill=230;
if(bill<=100){
  console.log(bill,"2 unit")
}
else if(bill>100 && bill<=200){
  console.log(bill,"3 unit");
}
else if(bill>200 && bill<=300){
  console.log(bill,"5 unit")
}
else{
  console.log(bill,"7 unit");
}
// 3.Display the age category.
    // Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
    let age=15
    if(age<13){
      console.log(age,"  child");
    }
    else if(age>=13 && age<=19){
      console.log(age,"Teenager");
    }
    else if(age>=20 && age<=59){
      console.log(age,"adult");
    }
    else{
      console.log(age,"Senior citizen")
    }
  //4.Calculate the discount based on shopping amount.
    //Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
    let amount=11000;
    let discount;
    if(amount<1000){
      console.log("no discount");
    
    }
    else if(amount>=1000 && amount<=4999){
      console.log("10% discount");
      discount=amount*10/100;
    }
    else if(amount>=5000 && amount<=9999){
      console.log("20% discount");
      discount=amount*20/100;
    }

    else{
      console.log("30%");
      discount=amount*30/100
    }
//.Display the season based on the month number.
    //3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
    let month=1;
    if(month>=3 && month<=5){
      console.log(month,"is spring")
    }
    else if(month>=6 && month<=8){
      console.log(month,"is Summer")
    }
    else if(month>=9 && month<=11){
      console.log(month,"is autumn")

    }
    else if(month=12 && month==1 && month==1){
      console.log(month,"is winter")
    }
    else{
      console.log("invalid");
    }
//6.Check whether a given year is a Leap Year or not.
    //Condition 1: year % 400 == 0
   // Condition 2: year % 4 == 0 and year % 100 != 0
   let year=2025;
   if(year%400==0){
    console.log(year,"is leap year");
   }
   else if(year%4==0 && year%100!=0){
    console.log(year,"is a leap year");
   }
   else{
    console.log(year ," is not a leap year");
   }
   //---------------------------
//Nested if – Tasks
//--------------------------
//1.Check whether a person is eligible to donate blood.
    //Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
    let Age=39;
    let weight=50;
    if(Age>=18 && Age<=60){
      if(weight<=50){
        console.log("age is eligible and weight is above 50 .so donate blood");
      }
      else{
        console.log(" age is eligible and weight is not above 50 because do not donate blood");
      }
    }
    else{
      console.log( "not eligible to donate blood");
    }
//2.Display the grade based on average only if the student has passed in all 4 subjects.
let sub1 = 95
let sub2 = 60
let sub3 = 80
let sub4 = 70
let avg = (sub1+sub2+sub3+sub4)/4
if(sub1>=35 && sub2>=35 && sub3>=35 && sub4>=35){
    if(avg>=90){
        console.log("grade is O :" ,avg);
    }
    else if(avg>=80 && avg<90){
        console.log("grade is A :" ,avg);
    }
    else if(avg>=60 && avg<70){
        console.log("grade is B :" ,avg);
    }
    else if(avg>=70 && avg<80){
        console.log("grade is C :" ,avg);
    }
     else if(avg>=50 && avg<35){
        console.log("grade is D :" ,avg);
    }
    else{
        console.log("student fail");
    }
}
else{
    console.log("fail");
    
}
//3.Check whether a student is eligible for a scholarship.
//Age should be above 18. If eligible by age, score should be above 86.
 let age1 = 38
 let score = 98
 if(age1>=18){
    if(score>=86){
        console.log("eglibile by age , score should be above 86");
    }
    else {
        console.log("eglibile by age , not score  should be above 86");
    }
 } 
 else{
    console.log("not eligibile");
 }


        




  

  
  
class Employee{
    work(){
        console.log("Employee is working")
    }
}
class Developer extends Employee{
    code(){
        console.log("Developer is coding")
    }
}
class Manager extends Employee{
    manage(){
        console.log("Manager is managing")
    }
}
let d=new Developer();
d.work()
d.code()
let m=new Manager();
m.work()
m.manage()
// example 2
class Vehicle{
    start(){
        console.log("Vehicle starts")
    }
}
class Car extends Vehicle{
    drive(){
        console.log("Car is driving")
    }
}
class Bike extends Vehicle{
    ride(){
        console.log("Bike is running")
    }
}
let car=new Car();
car.start()
car.drive()
let bike=new Bike();
bike.start();
bike.ride();
//Example 3.Animal
class Animal {
    eat() {
        console.log("Animals can eat");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog can bark");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Cat can meow");
    }
}
let a = new Dog();
a.eat();
a.bark();
let c = new Cat();
c.eat();
c.meow();
// example 4
class College{
    collegeName() {
        console.log("ABC college");
    }
}
class CSE extends College {
    depart() {
        console.log("Computer Science");
    }
}
class ECE extends College{
    depart1() {
        console.log("Electronics");
    }
}
let e = new CSE();
e.collegeName();
e.depart();
let n= new ECE();
n.collegeName();
n.depart1();
// example 5
class Bank {
    deposit() {
        console.log("Money Deposited");
    }
}
class Savings extends Bank {
    save() {
        console.log("Saving Money");
    }
}
class Current extends Bank {
    transaction() {
        console.log("Business transaction");
    }
}
let s= new Savings();
s.deposit();
s.save();
let p = new Current();
p.deposit();
p.transaction();



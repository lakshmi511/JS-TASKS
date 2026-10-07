// METHOD OVERRIDING
// 1.Single Inheritance-Method Overriding
class Vehicle{
    start(){
        console.log("Vehicle is starting")
    }
}
class Car extends Vehicle{
    start(){
        console.log("vehicle is car")
    }
}
let vehicle=new Vehicle();
vehicle.start();
let car=new Car();
car.start();
// 2.Multilevel Inheritance -Method Overriding
class Shopping{
    order(){
        console.log("order is placed")
    }
}
class Onlineshopping extends Shopping{
    order(){
        super.order();
        console.log("order is placed through Online shopping")
    }
}
class Amazon extends Shopping{
    order(){
        super.order();
        console.log("Order is placed through Amazon")
    }

}
let app=new Onlineshopping();
app.order();
let online=new Amazon();
online.order();
//3.Method Overriding with Hierarchical inheritance
class Animal{
    sound(){
        console.log("Animal make sounds")
    }
}
class cat extends Animal{
    sound(){//overriding
        console.log("Cat Meows")
    }
}
class Dog extends Animal{
    sound(){//overriding
        console.log("Dog barks")
    }
}
let Cat=new cat();
Cat.sound();
let dog=new Dog();
dog.sound();


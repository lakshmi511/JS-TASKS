
class college{
    constructor(name,area){
        this.name=name;
        this.area=area;
        console.log("My college",this.name)
        console.log("My college area",this.area)
    }
}
class std extends college{
    section(){
        console.log("CSE SECTION B")
    }
}
let m=new std("XYZ","bvrm")
m.section()

//using constructor
class library{
    constructor(libname,location){
        this.libname=libname;
        this.location=location;
    }
    displaylib(){
        console.log("library :",this.libname);
        console.log("library location :",this.location);
    }
}
class clg extends library{
    displaylibclg(){
        console.log("Books: Javascript,python,java")
    }
}
let m1=new clg("XYZ college","bvrm");
m1.displaylib();
m1.displaylibclg()

//using super
class FoodDelivery {
    constructor(restaurant,order) {
        this.restaurant = restaurant;
        this.order = order;
    }
    displayOrder() {
        console.log("Restaurant Name:", this.restaurant);
        console.log("Order ID:", this.order);
    }
}
class Customer extends FoodDelivery {
    constructor(restaurant,order,address) {
        super(restaurant,order);
        this.address = address;
    }
    displayCustomer() {
        console.log("DeliveryAddress:", this.address);
    }
}
let c = new Customer("Spice Hub",4567,"Bhimavaram,AndhraPradesh");
c.displayOrder();
c.displayCustomer();

//using super
class Hospital {
    display() {
        console.log("HospitalName:Apollo Hospital");
        console.log("Location:Hyderabad");
    }
}
class Doctor extends Hospital {
    displayDoctor() {
        super.display();
        console.log("Specialization:Cardiologist");
    }
}
let d = new Doctor();
d.displayDoctor();

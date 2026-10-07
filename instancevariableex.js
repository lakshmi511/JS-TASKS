class hospital {

    static hospitalName = "ABC Hospital"
    static location = "Bhimavaram"
    static department = "General"

    get_dataa(patient_name, patient_id, age, disease) {
        this.myname = patient_name;
        this.myId = patient_id;
        this.myage = age;
        this.mydisease = disease;
    }

    displaypatient() {
        console.log("My Hospital", hospital.hospitalName)
        console.log("My Location", hospital.location)
        console.log("My Department", hospital.department)
        console.log("My Name", this.myname)
        console.log("My ID", this.myId)
        console.log("My Age", this.myage)
        console.log("My Disease", this.mydisease)
    }
}

let patient1 = new hospital();

console.log("------patient1---------")
patient1.set_dataa("siri", 101, 21, "Fever")
patient1.displaypatient()


let patient2 = new hospital();

console.log("------patient2---------")
patient2.set_dataa("Sanju", 102, 22, "Cold")
patient2.displaypatient()


let patient3 = new hospital();

console.log("------patient3---------")
patient3.set_dataa("divya", 103, 20, "Headache")
patient3.displaypatient()
// example 2
class shopping {

    static shopName = "Trends"
    static location = "Bhimavaram"
    static category = "Clothing"

    set_dataa(customer_name, product, price, quantity) {
        this.myname = customer_name;
        this.myproduct = product;
        this.myprice = price;
        this.myquantity = quantity;
    }

    displayshopping() {
        console.log("My Shop", shopping.shopName)
        console.log("My Location", shopping.location)
        console.log("My Category", shopping.category)
        console.log("My Customer", this.myname)
        console.log("My Product", this.myproduct)
        console.log("My Price", this.myprice)
        console.log("My Quantity", this.myquantity)
    }
}

let customer1 = new shopping()

console.log("------customer1---------")
customer1.set_dataa("Aaradhya", "Dress", 1200, 2)
customer1.displayshopping()


let customer2 = new shopping()

console.log("------customer2---------")
customer2.set_dataa("Suresh", "Shirt", 800, 3)
customer2.displayshopping()


let customer3 = new shopping()

console.log("------customer3---------")
customer3.set_dataa("anjali", "Jeans", 1500, 1)
customer3.displayshopping()
// example 3
class collegebus {

    static collegeName = "DNR College"
    static route = "Bhimavaram"
    static busType = "College Bus"

    get_dataa(student_name, roll_num, bus_num, fee) {
        this.myname = student_name;
        this.myroll = roll_num;
        this.mybus = bus_num;
        this.myfee = fee;
    }

    displaystudent() {
        console.log("My College", collegebus.collegeName)
        console.log("My Route", collegebus.route)
        console.log("My Bus Type", collegebus.busType)
        console.log("My Name", this.myname)
        console.log("My Roll Number", this.myroll)
        console.log("My Bus Number", this.mybus)
        console.log("My Bus Fee", this.myfee)
    }
}

let student1 = new collegebus()

console.log("------student1---------")
student1.get_dataa("janu", 101, 5, 12000)
student1.displaystudent()


let student2 = new collegebus()

console.log("------student2---------")
student2.get_dataa("Sanju", 102, 6, 13000)
student2.displaystudent()


let student3 = new collegebus()

console.log("------student3---------")
student3.get_dataa("luckyn", 103, 7, 12500)
student3.displaystudent()
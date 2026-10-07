class Mobile{
    static category="Electronics"
    static warranty=" 1 year"
    constructor(brand,model,ram,storage,price,battery){

        this.mobBrand=brand;
        this.Mobmodel=model;
        this.mobRam=ram;
        this.mobStorage=storage;
        this.mobPrice=price;
        this.mobBattery=battery;

    }
    displayDetails(){
        console.log("Mobile Category is",Mobile.category);
        console.log("Mobile warranty is",Mobile.warranty);
        console.log("Mobile brand is",this.mobBrand);
        console.log("Mobile Model is",this.Mobmodel);
        console.log("Mobile Ram is",this.mobRam);
        console.log("Mobile Storage is",this.mobStorage);
        console.log("Mobile Price is",this.mobPrice);
        console.log("Mobile Battery is",this.mobBattery);

    }
}
let s=new Mobile("Samsung","s24","8GB","256",60000,"400mAh");
console.log("----Mobile 1 Details--------")
s.displayDetails();
let s1=new Mobile("vivo","Y28","5GB","64",19000,"200mAh");
console.log("_-------------Mobile Details 2-------------")
s1.displayDetails();
// example 2
class Online{
    static platform="Amazon"
    static Company="Blue"
constructor(orderId,cust_Name,product,price,Address,mystatus){

        this.myOrder=orderId;
        this.mycust=cust_Name;
        this.myproduct=product;
        this.mypr=price;
        this.myAdd=Address;
        this.onlinestat=mystatus;

    }
    display(){
        console.log("online platform is",Online.platform);
        console.log("online company is",Online.Company);
        console.log("online  order is",this.myOrder);
        console.log("online customeris",this.mycust);
        console.log("online product is",this.myproduct);
        console.log("online price is",this.mypr);
        console.log("online address is",this.myAdd);
        console.log("online status is",this.onlinestat);

    }
}
let s3=new Online("101","Nihira","laptop","50000","Bvrm","Delivered");
console.log("----online 1 Details--------")
s3.display();
let s4=new Online("102","sadvi","Headphone","3000","hyd","shipped");
console.log("_-------------Mobile Details 2-------------")
s4.display();
// example 3
class Movie{
    static industry="Tollywood"
    static country="India"
    constructor(movieName,hero,heroine,director,language,rating){

        this.movie=movieName;
        this.movhero=hero;
        this.movheroine=heroine;
        this.movdirector=director;
        this.movlang=language;
        this.movrt=rating;

    }
    displayDetails(){
        console.log("Movie industry is",Movie.industry);
        console.log("country is",Movie.country);
        console.log("Movie name is",this.movie);
        console.log("Movie heroine name is",this.movheroine);
        console.log("Movie director is is",this.movdirector);
        console.log("Movie language  is",this.movlang);
        console.log("Movie heroname  is",this.movhero);
        console.log("Movie rating is",this.movrt);

    }
}
let s6=new Movie("RRR","AliaBhatt","S.S.rajamouli","telugu","Ramcharan","8.0");
console.log("----Movie 1 Details--------")
s6.displayDetails();
let s7=new Movie("Irumudi","xyz","abc","tel","Raviteja","8.5");
console.log("_-------------Movie Details 2-------------")
s7.displayDetails();

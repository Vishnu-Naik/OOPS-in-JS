function Vehicle(wheel){
    this.type = "transport";
    this.wheel = wheel;
}

Vehicle.prototype.print = function(){
    console.log("type",this.type,"wheel",this.wheel);
}


function Four(w){
    Vehicle.call(this,w);
}

//Four.prototype.constructor = Vehicle;

Four.prototype = Object.create(Vehicle.prototype,{
   c:{
       configurable: false,
       value:5,
       enumarable:true,
       writable:true
   },
   d:{
       value:function(){console.log(this.type)},
       writable:true,
       configurable: true,
       enumerable:true
   } 
});
Four.prototype.constructor = Four;

//if u dont change a constructor of child it take the parent class's constructor
//in this case if u dont declare Four as constructor then it take Vehicle constructor
//it is not required to declare a parent constructor as it is parent of Four it is by default declared

var car = new Four(4);
var bike = new Vehicle(2);
//console.log(car.constructor);
//console.log(bike);
car.d();
car.c = "my";

class test{
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(this.name);
    }
}
var test1 = new test("vishnu");
test1.start();
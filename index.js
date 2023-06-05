//this includes the vehicle class as a module
const VehicleModule = require('./vehicleBaseClass').Vehicle

//this shows how to call from this module...
let v = new VehicleModule("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//The Car subclass extends bnb cashappthe Vehicle class defined in the ./vehicleBaseClass.js file
class A28Mercury extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numbOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.schedService = false;
    }

    //Defing the loadPassenger module
    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passengers = num;
                return this.passengers; 
            } else {
                console.log(this.model + " " + this.make + " " + " not enough space to take all passengers");
            }
        } else {
            console.log(this.model + " " + this.make + " is full.")  
        }
    }

    //Define the start function to determine if there's enough fuel to start the car
    start() {
        if (this.fuel > 0) {
            console.log('engine started');
            return this.started = true;
        } else {
            console.log('engine is out of fuel');
            return this.started = false;
        }
    }

    //Define the scheduleService module to determing if the vehicle needs to be serviced
    scheduleService() {
        if (this.mileage > 30000) {
            this.schedService = true;
            console.log(this.mileage + ' driven, time for service');
            return this.schedService;
        } else {
            console.log(this.mileage + ' driven, no service needed');
            this.schedService = false;
            return this.schedService;
        }
    }
}                                   


//Create an Instances of the A28Mercury class
let myCar = new A28Mercury('mercury', 'rad_sedan', '2002', 'white', 50000)

//call the functions defined as part of the A28Mercury class to test the script
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.scheduleService()

console.log(myCar)


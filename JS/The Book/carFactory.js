/* function Car (make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " robi: "+ "Brum wrrr!");
        } else {
            console.log("Najpierw musisz włączyć silnik!");
        }   
    };
}


var chevy = new Car("Chevy", "Bel Air", 1957, "czerwony", 2, false, 1021);

var cadi = new Car("GM", "Cadillac", 1955, "jasnobrązowy", 5, false, 12892);

var fiat = new Car("Fiat", "500", 1957, "szaroniebieski", 2, false, 88000);

var taxi = new Car ("SieMoCorp", "Taxi", 1955, "żółty", 4, false, 281341)

var testCar = new Car("SieMoCorp", "Auto testowe", 2018, "morski", 2, true, 21)

var cars = [chevy, cadi, fiat, taxi, testCar];

for (var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
    cars[i].drive();
    
}
*/

//INNY SPOSÓB - LITERAŁ OBIEKTOWY

var cadiParams = {make: "GM",
                    model: "Cadillac",
                    year: 1956,
                    color: "jasnobrązowy",
                    passengers: 5,
                    convertible: false,
                    mileage: 12892};
var cadi = new Car(cadiParams);
if (cadi instanceof Car) {
    console.log("Gratulujemy, to jest samochód!")
}
function Car (params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
        
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false
    };
    this.drive = function() {
        if (this.started) {
            console.log(this.make + " robi: "+ "Brum wrrr!");
        } else {
            console.log("Najpierw musisz włączyć silnik!");
        }   
    };

}

cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();
cadi.drive();
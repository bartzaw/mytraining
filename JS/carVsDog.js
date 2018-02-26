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

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 15) {
            alert(this.name + " szczeka hau!")
        } else {
            alert(this.name + " szczeka hiau!")
        }
    };
}
/*for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}
for (var i = 0; i < dogs.length; i++) {
    var size = "mały";
    if (dogs[i].weight > 10) {
        size = "duży";
    }
    console.log("Pies: " + dogs[i].name + " to " + size + " pies rasy " + dogs[i].breed);
}*/

var limoParams = {make: "SieMoCorp",
                    model: "Limo",
                    year: 1983,
                    color: "szary",
                    passengers: 12,
                    convertible: true,
                    mileage: 21120};
var limo = new Car(limoParams);
var limoDog = new Dog("Błękitna rapsodia", "Pudel", 40);

console.log(limo.make + " " + limo.model + " jest typu " + typeof limo);
console.log(limoDog.name + " jest typu " + typeof limoDog);


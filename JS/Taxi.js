var taxi = {
    make: "Ford",
    model: "The Old One",
    year: 1949,
    color: "Molten Orange",
    passengers: 4,
    convertible: false,
    mileage: 284000,
    started: false,
    start: function(){
            this.started=true;
        },
    stop: function(){
            this.started=false;
        },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " does: brum brum wrrr bebeep");
        } else {
            alert("You need to start engine first");
        }
    }
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "Jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function(){
            this.started=true;
        },
    stop: function(){
            this.started=false;
        },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " does: brum brum wrrr bebeep");
        } else {
            alert("You need to start engine first");
        }
    }
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function(){
            this.started=true;
        },
    stop: function(){
            this.started=false;
        },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " does: brum brum wrrr bebeep");
        } else {
            alert("You need to start engine first");
        }
    }
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "czerwony",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function(){
            this.started=true;
        },
    stop: function(){
            this.started=false;
        },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model + " does: brum brum wrrr bebeep");
        } else {
            alert("You need to start engine first");
        }
    }
};

function prequal(car) {
    if (car.mileage > 10000){
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;        
}

var worthALook = prequal(cadi);

if (worthALook) {
    console.log("Powinieneś zainteresować się tym" + cadi.make + " " + cadi.model);
} else {
    console.log("Ten " + cadi.make + " " + cadi.model + " możesz sobie podarować");
}

var worthALook = prequal(fiat);

if (worthALook) {
    console.log("Powinieneś zainteresować się tym" + fiat.make + " " + fiat.model);
} else {
    console.log("Ten " + fiat.make + " " + fiat.model + " możesz sobie podarować");
}
var worthALook = prequal(chevy);

if (worthALook) {
    console.log("Powinieneś zainteresować się tym" + chevy.make + " " + chevy.model);
} else {
    console.log("Ten " + chevy.make + " " + chevy.model + " możesz sobie podarować");
}
var worthALook = prequal(taxi);

if (worthALook) {
    console.log("Powinieneś zainteresować się tym" + taxi.make + " " + taxi.model);
} else {
    console.log("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować");
}

cadi.start();
cadi.drive();
cadi.stop();
fiat.start();
fiat.drive();
fiat.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();
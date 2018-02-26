var taxi = {
    make: "Ford",
    model: "Stary Ford",
    year: 1949,
    color: "Molten Orange",
    passengers: 4,
    convertible: false,
    mileage: 284000
};

function prequal(car) {
    if (car.mileage > 10000){
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;        
}

var worthALook = prequal(taxi);

if (worthALook) {
    console.log("Powinieneś zainteresować się tym" + taxi.make + " " + taxi.model);
} else {
    console.log("Ten " + taxi.make + " " + taxi.model + " możesz sobie podarować");
}

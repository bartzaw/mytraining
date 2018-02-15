var fiat = {
    make: "Fiat",
    model: 500,
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000
}

alert(fiat.mileage);

var miles = fiat.mileage;
if (miles < 20000) {
    buyIt();
}
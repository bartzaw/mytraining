var passengers = [ {name: "Janka Pętlicka", paid: true, ticket: "turystyczna"},
    {name: "Dr Zatan", paid: true, ticket: "pierwsza klasa"},
    {name: "Stefa Właściwa", paid: false, ticket: "pierwsza klasa"},
    {name: "Janek Funkcyjniak", paid: true, ticket: "premium"} ];
function processPassengers (passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return passenger.name === "dr. Zatan";
}
function checkNotPaid(passenger) {
    return (!passenger.paid)
}
function printPassenger (passenger) {
    var message = passenger.name;
    if (passenger.paid === true) {
        message = message + " zapłacił(a).";
    } else {
        message = message + " nie zapłacił(a).";
    }
    console.log(message);
    return false;
}
processPassengers(passengers, printPassenger);

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (allCanFly) {
    console.log("Samolot nie może wystartować: na pokładzie jest pasażer objęty zakazem lotów.");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if (checkNotPaid) {
    console.log("Samolot nie może wystartować: nie wszyscy zapłacili za przelot.");
}

function serverCustomer (passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
}

function createDrinkOrder(passenger) {
    var orderFunction;

    if(passenger.ticket === "pierwsza klasa") {
        orderFunction = function() {
            alert("Podać koktajl czy wino?")
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Podać wodę, colę czy wino?")
        };
    } else {
        orderFunction = function() {
            alert("Podać wodę czy colę?")
        }
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "pierwsza klasa") {
        orderFunction = function() {
            alert("Podać kurczaka czy makaron?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Podać przekąskę czy talerz serów?")
        };
    } else {
        orderFunction = function() {
            alert("Podać orzeszki czy precelki?")
        };
    }
    return orderFunction;
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serverCustomer(passengers[i]);
    }
}
servePassengers(passengers);

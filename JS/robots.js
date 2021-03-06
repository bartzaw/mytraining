function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "Robotico Industries Inc.";

Robot.prototype.speak = function () {
    console.log(this.name + " mówi: Dzień dobry!");
};

Robot.prototype.makeCoffee = function () {
    console.log(this.name + " umie podać kawę!");
};

Robot.prototype.blinkLights =  function () {
    console.log(this.name + " miga światełkami!")
};

var robby = new Robot("Robik", 1956, "Dr. Morbius");

var rossie = new Robot("Robusia", 1962, "George Washington");


robby.onOffSwitch = function () {
    console.log(this.name + " posiadą przełącznik on/off")
}
robby.makeCoffee = function () {
    console.log(this.name + " umie przynieść kawę ze Starbucks'a!")
}
rossie.cleanHouse = function () {
    console.log(this.name + " umie sprzątać!");
}
console.log("Robot " + robby.name + " został wyprodukowany przez " + robby.maker + " w roku "+ robby.year + ", a teraz jego właścicielem jest " + robby.owner);
robby.makeCoffee();
robby.blinkLights();

console.log("Robot " + rossie.name + " został wyprodukowany przez " + rossie.maker + " w roku " + rossie.year + ", a teraz jego właścicielem jest "+ rossie.owner);
rossie.cleanHouse();
rossie.speak();
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "Ob.Fa.Ro";
Robot.prototype.errorMessage = "Wszystkie systemy sprawne";
Robot.prototype.reportError = function() {
    console.log(this.name + " mówi " + this.errorMessage);
}
Robot.prototype.spillWater = function() {
    this.errorMessage = "Chyba mam zwarcie!";
};

var robby = new Robot("Robik", 1956, "Dr. Morbius");
var rossie = new Robot("Robusia", 1962, "George Washington");

rossie.reportError();
robby.reportError();
robby.spillWater();
rossie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rossie.hasOwnProperty("errorMessage"));
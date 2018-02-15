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

var fido = new Dog("Burek", "mieszaniec", 20);
var fluffy = new Dog("Dino", "pudel", 16);
var spot = new Dog("Kieł", "chihuahua", 4);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}
for (var i = 0; i < dogs.length; i++) {
    var size = "mały";
    if (dogs[i].weight > 10) {
        size = "duży";
    }
    console.log("Pies: " + dogs[i].name + " to " + size + " pies rasy " + dogs[i].breed);
}
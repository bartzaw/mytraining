function dogCatcher(obj) {
    if (obj instanceof Dog) {
        return true;
    } else {
        return false;
    }
}

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat("Filemon", "syjamski", 5);
var whiskers = new Cat("Rojber", "dachowiec", 6);

var fido = {name: "Burek", breed: "mieszaniec", weight: 20};

function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 15) {
            alert(this.name + " szczeka hau!")
        } else {
            alert(this.name + " szczeka hiauu!!");
        }
    };
}

var fluffy = new Dog("Dino", "pudel", 16);
var spot = new Dog("Kieł", "chihuahua", 4);
var dogs = [meow, whiskers, fido, fluffy, spot];

for(var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " to pies!");
    }
}
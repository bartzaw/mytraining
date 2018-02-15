function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Psowate";
Dog.prototype.bark = function() {
    if (this.weight > 10) {
        console.log(this.name + " szczeka HAHAHAU!");
    } else {
        console.log(this.name + " szczeka hihiau?!")
    }
};
Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " już siedzi")
    } else {
        console.log(this.name + " wykonał siad");
        this.sitting = true;
    }
};

Dog.prototype.run = function() {
    console.log(this.name + " biega!");
};
Dog.prototype.wag = function() {
    console.log(this.name + " merda ogonem!");
};

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Sieciowice";
ShowDog.prototype.stack = function() {
    console.log("Stoi i uważa!");
};
ShowDog.prototype.bait = function() {
    console.log("Prosi o smakołyk");
};
ShowDog.prototype.gait = function(kind) {
    console.log("Trenuje " + kind + ".");
};
ShowDog.prototype.groom = function() {
    console.log("Czas pielęgnacji sierści.")
};

var scotty = new ShowDog("Szatan", "terier szkocki", 8, "Grzesiu");
if (scotty instanceof Dog) {
    console.log("Szatan jest obiektem Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Szatan jest obiektem ShowDog")
}
var fido = new Dog("Burek", "mieszaniec", 20);
if (fido instanceof Dog) {
    console.log("Burek jest obiektem Dog");
}
if (fido instanceof ShowDog) {
    console.log("Burek jest obiektem ShowDog")
}
var barnaby = new Dog("Barnaba", "basset", 27);
var beatrice = new ShowDog("Beatrycze", "szpic miniaturowy",3, "Henryk");
var fluffy = new Dog("Dino", "pudel", 16);
var spot = new Dog("Kieł", "chihuahua", 4);
spot.bark = function() {
    console.log(this.name + " szczeka HAU HAU HAU")
}

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("marsz");
beatrice.groom();
/*
fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();
fluffy.sit();
fluffy.sit();

spot.bark();
spot.run();
spot.sit();
spot.wag();
spot.sit();

barnaby.sit();
barnaby.bark();
barnaby.run();
barnaby.wag();

scotty.stack();
scotty.bark();
scotty.bait();
console.log(scotty.league);
console.log(scotty.species);*/
//spot.hasOwnProperty("species");
//fido.hasOwnProperty("species");

console.log("Konstruktor Burka to " + fido.constructor);
console.log("Konstruktor Szatana to " + scotty.constructor);
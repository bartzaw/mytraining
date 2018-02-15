var dog = {
    name: "Burek",
    weight:  20.2,
    age: 4,
    breed: "mieszaniec",
    activity: "przynoszenie piłki"
};
var bark;
if (dog.weight > 20) {
    bark = "HAU HAU!";
} else {
    bark = "hau hau";
}
var speak = dog.name + " szczeka " + bark + " kiedy ma ochotę na " + dog.activity;
console.log(speak);
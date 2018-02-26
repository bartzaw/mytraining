function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound)};
}
var toy = new Duck('kwa kwa');
toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);
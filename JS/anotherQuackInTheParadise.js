var migrating = true;
var fly = function(num) {
    var sound = "Latam";
    function wingFlapper() {
        console.log(sound);
    }
    for (var i = 0; i < num; i++) {
        wingFlapper();
    }
};
function quack(num) {
    var sound = "Kwak!"
    var quacker = function() {
        console.log(sound);
    }
    for (var i = 0; i < num; i++) {
        quacker();
    }
}
if (migrating) {
    quack(4);
    fly(4);
}
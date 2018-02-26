var justAVar = "Och, nie przejmuj się, jestem zmienną globalną!";

function whereAreYou() {
    var justAVar = "Szara, zwyczajna zmienna lokalna.";

    function inner() {
        return justAVar;
    }
    return inner;
}

var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);
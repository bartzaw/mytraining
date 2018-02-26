String.prototype.cliche = function() {
    var cliche = ["wygrać w cuglach", "być w kontakcie", "gwóźdź do trumny"];

    for (var i = 0; i < cliche.length; i++) {
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

var sentences = ["Zaraz wyślę po niego samochód.",
    "Jeśli będzie tak grał, przeciwnik powinien wygrać w cuglach",
    "Te wyniki finansowe to gwóźdź do trumny obecnego zarządu."];
for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences [i];
    if (phrase.cliche()) {
        console.log("WYKRYTO ZWROT: " + phrase);
    }
}
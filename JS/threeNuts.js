var winner = function() {alert("Farciarz!")};
var loser = function() {alert("Leszczu!")};

var a = winner;
var b = loser;
var c = loser;
c=a;
a=b;
b=c;
c=a;
a=c;
a=b;
b=c;
a();
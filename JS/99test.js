if (99 == "99") {
    console.log("Liczba jest równa łańcuchowi znaków!");
} else {
    console.log("Przecież liczba nie będzie równa łańcuchowi znaków!");
}

function factorial(n) {

    var nval = 1;
    for(var i = 2; i<=n; i++) {
        if (n < 0 || n > 12) {
            throw new RangeError('Value must be smaller than ' + 12 + ' and larger than ' + 0);
        }
        nval = nval*i;

    }
    return nval;
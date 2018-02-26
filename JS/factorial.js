function factorial(n) {

    var nval = 1;
    if (n < 0 || n > 12) {
        throw new RangeError('Value must be smaller than ' + 12 + ' and larger than ' + 0);}
    for(var i = 2; i<=n; i++) {

        nval = nval*i;
    }
    return nval;
};

console.log(factorial(-4));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));
console.log(factorial(11));
console.log(factorial(12));
console.log(factorial(13));
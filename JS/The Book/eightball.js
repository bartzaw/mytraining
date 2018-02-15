var eightBall = {
    index:0,
    advice: ['tak', 'nie', 'może', 'nie ma szans'],
    shake: function() {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            eightBall.index = 0;
        }
    },
    look: function () {
        return eightBall.advice[this.index];
    }
}

eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
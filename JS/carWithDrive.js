var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'ciemnoniebieski',
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("Bak jest pusty, zatankuj przed jazdą");
            this.started = false;
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0 ) {
                alert('Brum brum brum, pibeep');
                this.fuel = this.fuel - 1;
            } else {
                alert("osz... brak paliwa!");
                this.stop();
            }
        } else {
            alert('Najpierw musisz włączyć silnik');
        }
    },
    addFuel(amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

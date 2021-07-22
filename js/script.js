
const tama = {
    name: 'pippo',
    age: 0,
    stomaco: [],
    happy: 5,
    vivo: true,
    slotInterval: null,
    nascita: function () {

        this.slotInterval = setInterval(() => {
            this.incrementAge();
        }, 1000);

    },
    incrementAge: function () {
        console.log(this.slotInterval)
        this.age++;
        if (this.age > 3) {
            this.vivo = false;
            console.log('Cancello il this.slotInterval')
            clearInterval(this.slotInterval);
        }
    },
    daiDelCibo: function (ciboType) {
        this.stomaco.push(ciboType);
        // se lo stomaco è pieno tra 5 e 8 aggiungiamo alla felicità 1
        // se stomaco è pieno 9 in su, la felicità si azzera
        if (this.stomaco.length >= 5 && this.stomaco.length <= 8) {
            this.happy++;
        }
        
        if (this.stomaco.length >= 9) {
            this.happy = 0;
        }
    }
}




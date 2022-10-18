const Band = require ('./band.js')

class BandList {
    constructor() {
        this.bands   = [
            new Band('Metallica'),
            new Band('Bon Jovi'),
            new Band('Heroes del Silencio'),
            new Band('Breaking Benjamin')
        ]
    }

    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }

    removeBands(id) {
        this.bands = this.bands.filter( band => band.id !== id );
    }

    getBands() {
        this.bands;
    }

    increaseVotes(id) {
       this.bands = this.bands.map((band) => {
         if (band.id === id) {
            band.votes += 1;
          }
          return band
       })
    }

    changeBandName(id, newName) {
        this.bands = this.bands.map((band) => {
          if (band.id === id) {
             band.name = newName;
           }
           return band
        })
     }
}

module.export = BandList
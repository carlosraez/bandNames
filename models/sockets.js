const BandList = require('./band-list')

class Sockets {

    constructor( io ) {

        this.io = io;
        this.bandlist = new BandList()
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Emitir al cliente conectado todas las bandas actuales
            console.log('cliente conectado');
            socket.emit('current-bands', this.bandlist.getBands())
            
            //Votar Banda
            socket.on('vote-band', ({id}) => {
                 this.bandlist.increaseVotes(id)
                 //this.emit 1 dispositive
                 //socket.io all dispositives
                 socket.emit('current-bands', this.bandlist.getBands())
            })

            //Delete Banda
            socket.on('delete-band', ({id}) => {
                this.bandlist.removeBands(id)
                //this.emit 1 dispositive
                //socket.io all dispositives
                socket.emit('current-bands', this.bandlist.getBands())
           })

           //Change Name off band
           socket.on('changeName-band', ({id, name}) => {
            console.log(id, name);
            this.bandlist.changeBandName(id, name)
            //this.emit 1 dispositive
            //socket.io all dispositives
            socket.emit('current-bands', this.bandlist.getBands())
         })

         socket.on('create-band', ({name}) => {
            this.bandlist.addBand(name)
            //this.emit 1 dispositive
            //socket.io all dispositives
            socket.emit('current-bands', this.bandlist.getBands())
         })
           

        });
    }


}


module.exports = Sockets;
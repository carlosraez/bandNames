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
            
        
        });
    }


}


module.exports = Sockets;
//https://codepen.io/gabrieleromanato/pen/Jgoab?
function IDGenerator() {
	 
    this.length = 8;
    this.timestamp = +new Date;
    
    var _getRandomInt = function( min, max ) {
       return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
    this.generate = function() {
        var ts = this.timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";
        
        for( var i = 0; i < this.length; ++i ) {
           var index = _getRandomInt( 0, parts.length - 1 );
           id += parts[index];	 
        }
        
        return id;
    }    
}

class StorageService {

    static _instance = null;
    idGenerator = null;

    constructor() {
        this.idGenerator =  new IDGenerator();
    }

    static getInstance() {
        if (this._instance == null) {
            this._instance = new StorageService();
        }
        return this._instance;
    }

    updateStatistics(numOfCards, score) {

    }

    getDecks() {
        return [
            {
                id: this.idGenerator.generate(),
                name: "Test1",
                numCards: 5
            },
            {
                id: this.idGenerator.generate(),
                name: "Test2",
                numCards: 2
            },

        ];
    }
}
export default StorageService;
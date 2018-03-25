class UtilsService {

    static _instance = null;
    static _idGenerator = null;

    constructor() {
        this._idGenerator = new IDGenerator();
    }

    static getInstance() {
        if (this._instance == null) {
            this._instance = new UtilsService();
        }
        return this._instance;
    }

    generateID(){
        return this._idGenerator.generate();
    }


}
export default UtilsService;


//https://codepen.io/gabrieleromanato/pen/Jgoab?
function IDGenerator() {

    this.length = 8;
    this.timestamp = +new Date;

    var _getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.generate = function () {
        var ts = this.timestamp.toString();
        var parts = ts.split("").reverse();
        var id = "";

        for (var i = 0; i < this.length; ++i) {
            var index = _getRandomInt(0, parts.length - 1);
            id += parts[index];
        }

        return id;
    }
}
import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards';
const DECKS_STORAGE_KEY = FLASHCARDS_STORAGE_KEY + ':decks';

class StorageService {

    static _instance = null;
    idGenerator = null;

    constructor() {
        this.idGenerator = new IDGenerator();
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
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(DECKS_STORAGE_KEY)
                .then(json => {
                    //when no items at storage, json object is null
                    json ? resolve(JSON.parse(json)): resolve({});
                })
                .catch(err => {
                    console.warn(err);
                });
        });
    }

    getDeck(id) {

    }

    removeDeck(id) {

        return new Promise((resolve, reject) => {
            //get the current state
            this.getDecks()
                .then(decks => {
                    //delete the item
                    decks[id] = null;
                    delete decks[id];
                    
                    //save the state
                    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
                        .then(() => {
                            //return the state
                            resolve(decks);
                        })
                        .catch(err => {
                            reject(err);
                        });
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    addDeck(title) {
        return new Promise((resolve, reject) => {
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
                [this.idGenerator.generate()]: {
                    title,
                    numCards: 0,
                }
            }))
                .then(() => {
                    resolve(this.getDecks());
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    addCardToDeck(deck_id, question, answer) {

    }

    clearData() {
        return AsyncStorage.removeItem(DECKS_STORAGE_KEY);
    }
}
export default StorageService;


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

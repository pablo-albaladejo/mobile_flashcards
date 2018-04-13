import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards';
const DECKS_STORAGE_KEY = FLASHCARDS_STORAGE_KEY + ':decks';
const CARDS_STORAGE_KEY = FLASHCARDS_STORAGE_KEY + ':cards';
const STATS_STORAGE_KEY = FLASHCARDS_STORAGE_KEY + ':stats';

class StorageService {

    static _instance = null;

    constructor() {
    }

    static getInstance() {
        if (this._instance == null) {
            this._instance = new StorageService();
        }
        return this._instance;
    }

    getEntity(entity) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(entity)
                .then(json => {
                    //when no items at storage, json object is null
                    json ? resolve(JSON.parse(json)) : resolve({});
                })
                .catch(err => {
                    console.warn(err);
                });
        });
    }

    /* Cards */
    getCards() {
        return this.getEntity(CARDS_STORAGE_KEY);
    }

    removeCards(card_ids) {
        return new Promise((resolve, reject) => {

            //load current stored cards
            this.getCards()
                .then(cards => {

                    //delete cards by id
                    card_ids.forEach(card_id => {
                        cards[card_id] = null;
                        delete cards[card_id];
                    });

                    //save current state
                    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(cards))
                        .then(() => {
                            resolve(cards);
                        }).catch(err => {
                            reject(err);
                        });

                }).catch(err => {
                    reject(err);
                });
        });
    }

    /* Decks */
    getDecks() {
        return this.getEntity(DECKS_STORAGE_KEY);
    }

    getDeck(id) {
        return new Promise((resolve, reject) => {
            this.getDecks()
                .then(decks => {
                    resolve(decks[id]);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    removeDeck(id) {

        return new Promise((resolve, reject) => {
            //get the current state
            this.getDecks()
                .then(decks => {

                    //delete associated cards
                    let removeCardsPromise = this.removeCards(decks[id].cards);

                    //delete the item
                    decks[id] = null;
                    delete decks[id];

                    let removeDecksPromise = AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));

                    Promise.all([removeDecksPromise, removeCardsPromise])
                        .then(result => {
                            resolve({
                                decks,
                                cards: result[1]
                            });
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

    addDeck(id, title) {
        return new Promise((resolve, reject) => {
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
                [id]: {
                    title,
                    cards: [],
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

    addCardToDeck(deck_id, card_id, question, answer) {
        return new Promise((resolve, reject) => {

            this.getDeck(deck_id)
                .then(deck => {

                    //create the card object
                    let card = {
                        question,
                        answer
                    };

                    //link card_id to deck
                    deck.cards.push(card_id);

                    //save at the storage                    
                    let saveCardPromise =
                        AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
                            [card_id]: card,
                        }));

                    let saveDeckPromise =
                        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
                            [deck_id]: deck,
                        }));

                    Promise.all([saveDeckPromise, saveCardPromise])
                        .then(() => {
                            //load current state
                            Promise.all([this.getDecks(), this.getCards()])
                                .then(results => {
                                    resolve({
                                        decks: results[0],
                                        cards: results[1],
                                    });
                                }).catch(err => {
                                    reject(err);
                                });

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

    /* Stats */
    getStats() {
        return this.getEntity(STATS_STORAGE_KEY);
    }

    updateStats(answered, correct) {
        return new Promise((resolve, reject) => {
            
            //Load previous stats
            this.getStats()
                .then(stats => {
                    
                    //Generate new stats
                    stats.times_played = stats.times_played ? stats.times_played + 1 : 1;
                    stats.answered = stats.answered ? stats.answered + answered : answered;
                    stats.correct = stats.correct ? stats.correct + correct : correct;

                    //Save stats
                    AsyncStorage.mergeItem(STATS_STORAGE_KEY, JSON.stringify(stats))
                        .then(() => {
                            resolve(stats);
                        })
                        .catch(err => {
                            reject(err);
                        })
                
                }).catch(err => {
                    reject(err);
                });
        });
    }

    /* Common */
    loadData() {
        return new Promise((resolve, reject) => {
            Promise.all([this.getDecks(), this.getCards(), this.getStats()])
                .then(results => {
                    resolve({
                        decks: results[0],
                        cards: results[1],
                        stats: results[2],
                    });
                }).catch(err => {
                    reject(err);
                });
        });
    }

    clearData() {

        return Promise.all([
            AsyncStorage.removeItem(DECKS_STORAGE_KEY),
            AsyncStorage.removeItem(CARDS_STORAGE_KEY),
            AsyncStorage.removeItem(STATS_STORAGE_KEY),
            AsyncStorage.removeItem(FLASHCARDS_STORAGE_KEY),
        ]);
    }
}
export default StorageService;

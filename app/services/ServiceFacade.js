import i18nService from './i18nService';
import StorageService from './StorageService';

class ServiceFacade {

    static initServices() {
        /* i18n */
        Expo.Util.getCurrentLocaleAsync().then(currentLocale => {
            this.setLocale(currentLocale.substring(0, 2));
        });
    }

    /* i18n */
    static setLocale(locale) {
        return i18nService.getInstance().setLocale(locale);
    }
    static getTranslation(literal) {
        return i18nService.getInstance().get(literal);
    }
    static getCurrentLocale() {
        return i18nService.getInstance().getLocale();
    }

    static updateStatistics(numOfCards, score) {
        return StorageService.getInstance().updateStatistics(numOfCards, score);
    }

    /* Decks */
    static getDecks() {
        return StorageService.getInstance().getDecks();
    }
    static getDeck(id) {
        return StorageService.getInstance().getDeck(id);
    }
    static addDeck(title) {
        return StorageService.getInstance().addDeck(title);
    }
    static removeDeck(id) {
        return StorageService.getInstance().removeDeck(id);
    }
    static addCardToDeck(deck_id, question, answer) { 
        return StorageService.getInstance().addCardToDeck(deck_id, question, answer);
    }

    /* Settings */
    static clearData(){
        return StorageService.getInstance().clearData();
    }
}
export default ServiceFacade;
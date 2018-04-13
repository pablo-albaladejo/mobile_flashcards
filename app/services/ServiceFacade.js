import i18nService from './i18nService';
import StorageService from './StorageService';
import UtilsService from './UtilsService';

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

    /* Decks */
    static getDecks() {
        return StorageService.getInstance().getDecks();
    }
    static getDeck(id) {
        return StorageService.getInstance().getDeck(id);
    }
    static addDeck(id, title) {
        return StorageService.getInstance().addDeck(id, title);
    }
    static removeDeck(id) {
        return StorageService.getInstance().removeDeck(id);
    }
    static addCardToDeck(deck_id, card_id, question, answer) { 
        return StorageService.getInstance().addCardToDeck(deck_id, card_id, question, answer);
    }

    /* Stats */
    static updateStats(answered, correct) {
        return StorageService.getInstance().updateStats(answered, correct);
    }

    /* Common */
    static loadData(){
        return StorageService.getInstance().loadData();
    }
    static clearData(){
        return StorageService.getInstance().clearData();
    }

    /* Utils */
    static generateID(){
        return UtilsService.getInstance().generateID();
    }

}
export default ServiceFacade;
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

    static getDecks() {
        return StorageService.getInstance().getDecks();
    }
}
export default ServiceFacade;
import i18nService from './i18nService';

class ServiceFacade {

    static initServices(){

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
}
export default ServiceFacade;
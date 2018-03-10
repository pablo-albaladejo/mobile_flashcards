import I18n from 'ex-react-native-i18n';
import * as translations from '../config/translations'

class i18Service {

    static _instance = null;

    constructor() {
        I18n.initAsync();
        I18n.fallbacks = true;
        I18n.translations = translations;
        if (__DEV__) {
            I18n.missingTranslation = function (value) {
                console.warn(value + " translation is missing");
                return value;
            };
        }
    }

    static getInstance() {
        if (this._instance == null) {
            this._instance = new i18Service();
        }
        return this._instance;
    }

    setLocale(locale) {
        I18n.locale = locale;
    }

    getLocale() {
        return I18n.locale;
    }

    get(literal) {
        return I18n.t(literal);
    }

}
export default i18Service;
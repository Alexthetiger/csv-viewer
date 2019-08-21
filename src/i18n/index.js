import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from 'src/store'

import enLocale from './en'
import ruLocale from './ru'

Vue.use(VueI18n);

const messages = {
  en: {...enLocale},
  ru: {...ruLocale},
}

let lang = localStorage.getItem('app-language');
store.commit('setLanguage', lang);

const i18n = new VueI18n({
  locale: lang || 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n

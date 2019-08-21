import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    langData: null,
    languages: [
      {
        title: 'English',
        value: 'en',
        icon: './static/img/us.png',
      },
      {
        title: 'Русский',
        value: 'ru',
        icon: './static/img/ru.png',
      },
    ],
    defaultLangValue: 'en',
  },
  mutations: {
    setLanguage(state, langValue) {
      let langData = state.languages.find((language) => language.value === langValue);
      if (!langData) {
        langData = state.languages.find((language) => language.value === state.defaultLangValue);
      }
      state.langData = langData;
      localStorage.setItem('app-language', langData.value);
    }
  },
  actions: {
  },
  getters: {
    languages: (state) => state.languages,
    langData: (state) => {
      if (state.langData) {
        return state.langData;
      } else {
        return state.languages.find((language) => language.value === state.defaultLangValue);
      }
    },
    defaultLangValue: (state) => state.defaultLangValue,
  }
}

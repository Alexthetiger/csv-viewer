import Vue from 'vue';
import Vuex from 'vuex';

import file from './file';
import lang from './lang';

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    file,
    lang,
  },
});

export default store;

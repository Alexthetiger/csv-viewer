import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawFileData: null,
    hasParsedData: false,
    parsedDataHeader: null,
    parsedDataBody: null,

  },
  mutations: {
    setRawFileData(state, data) {
      state.rawFileData = data;
    },
    setParsedFileData(state, data) {
      if (data && data.data) {
        state.parsedDataHeader = data.data[0];
        state.parsedDataBody = data.data.filter((item, i) => i > 0);
        state.hasParsedData = true;
      } else {
        state.parsedDataHeader = null;
        state.parsedDataBody = null;
        state.hasParsedData = false;
      }
    },
    dropFile(state) {
      state.rawFileData = null;
    },
  },
  actions: {

  },
  getters: {
    rawFileData: (state) => state.rawFileData,
    parsedDataHeader: (state) => state.parsedDataHeader,
    parsedDataBody: (state) => state.parsedDataBody,
    hasParsedData: (state) => state.hasParsedData,
  }
})

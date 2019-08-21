import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    fileName: '',
    rawFileData: null,
    hasParsedData: false,
    parsedDataHeader: null,
    parsedDataBody: null,

  },
  mutations: {
    setFileName(state, data) {
      state.fileName = data;
    },
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
    dropFileData(state) {
      state.rawFileData = null;
      state.fileName = '';
      this.commit('setParsedFileData', null);
    },
  },
  actions: {

  },
  getters: {
    fileName: (state) => state.fileName,
    rawFileData: (state) => state.rawFileData,
    parsedDataHeader: (state) => state.parsedDataHeader,
    parsedDataBody: (state) => state.parsedDataBody,
    hasParsedData: (state) => state.hasParsedData,
  }
}

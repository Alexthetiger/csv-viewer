import Vue from 'vue'
import Vuex from 'vuex'

export const STATE_INIT = 'STATE_INIT';
export const STATE_LOADING = 'STATE_LOADING';
export const STATE_RESULT = 'STATE_RESULT';
export const STATE_ERROR = 'STATE_ERROR';

Vue.use(Vuex)

export default {
  state: {
    appState: STATE_INIT,
    errorMessage: null,
    fileName: '',
    rawFileData: null,
    hasParsedData: false,
    parsedDataHeader: null,
    parsedDataBody: null,

  },
  mutations: {
    setAppState(state, value) {
      state.appState = value;
      if (value !== STATE_ERROR) {
        this.commit('setErrorMessage', null);
      }
    },
    setErrorMessage(state, text) {
      state.errorMessage = text;
      if (text !== null) {
        this.commit('setAppState', STATE_ERROR);
      }
    },
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
        this.commit('setAppState', STATE_RESULT);
      } else {
        state.parsedDataHeader = null;
        state.parsedDataBody = null;
        state.hasParsedData = false;
        this.commit('setAppState', STATE_INIT);
      }
    },
    dropFileData(state) {
      state.rawFileData = null;
      state.fileName = '';
      this.commit('setParsedFileData', null);
      this.commit('setAppState', STATE_INIT);
    },
  },
  actions: {

  },
  getters: {
    appState: (state) => state.appState,
    errorMessage: (state) => state.errorMessage,
    fileName: (state) => state.fileName,
    rawFileData: (state) => state.rawFileData,
    parsedDataHeader: (state) => state.parsedDataHeader,
    parsedDataBody: (state) => state.parsedDataBody,
    hasParsedData: (state) => state.hasParsedData,
  }
}

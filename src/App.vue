<template>
  <v-app id="app">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop=""></v-app-bar-nav-icon>
      <v-toolbar-title>CSV viewer</v-toolbar-title>
      <v-spacer></v-spacer>
      <lang-selector></lang-selector>
      <v-tooltip bottom  v-if="stateResult || stateError" >
        <template v-slot:activator="{ on }">
          <v-btn icon @click="restart" v-on="on">
            <v-icon>mdi-folder-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>{{$t('app.restart')}}</span>
      </v-tooltip>

    </v-app-bar>

    <v-content>
      <v-container
      >
        <v-row
          align="start"
          justify="center"
        >
          <v-col class="text-center">
            <FileUploader v-if="stateInit"/>
            <div v-if="stateResult">
              <Grid />
            </div>
            <div v-if="stateLoading">
              <v-progress-circular
                :size="64"
                :width="6"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
            <div v-if="stateError">
              <v-alert type="error">
                {{errorMsg}}
              </v-alert>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {
    mapMutations,
    mapGetters,
  } from 'vuex';

  import FileUploader from './components/FileUploader';
  import Grid from './components/Grid';
  import LangSelector from "./components/lang-selector";
  import {
    STATE_INIT,
    STATE_LOADING,
    STATE_RESULT,
    STATE_ERROR,
  } from "./store/file";

  export default {
    name: 'app',
    props: [],
    components: {
      LangSelector,
      FileUploader,
      Grid,
    },
    data() {
      return {};
    },
    watch: {},
    computed: {
      ...mapGetters([
        'appState',
        'errorMessage',
        'hasParsedData',
      ]),
      stateInit() {
        return this.appState === STATE_INIT;
      },
      stateResult() {
        return this.appState === STATE_RESULT;
      },
      stateLoading() {
        return this.appState === STATE_LOADING;
      },
      stateError() {
        return this.appState === STATE_ERROR;
      },
      errorMsg() {
        return this.errorMessage;
      },
      isFileLoaded() {
        return this.hasParsedData;
      }
    },
    methods: {
      ...mapMutations([
        'dropFileData',
      ]),
      restart() {
        this.dropFileData();
      }
    },
  }
</script>
<style>
</style>

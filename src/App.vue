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
      <v-tooltip bottom  v-if="isFileLoaded" >
        <template v-slot:activator="{ on }">
          <v-btn icon @click="restart" v-on="on">
            <v-icon>mdi-folder-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>Restart</span>
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
            <div v-if="isFileLoaded">
              <Grid />
            </div>
            <FileUploader v-else/>
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

  export default {
    name: 'app',
    props: [],
    components: {
      FileUploader,
      Grid,
    },
    data() {
      return {};
    },
    watch: {},
    computed: {
      ...mapGetters([
        'hasParsedData',
      ]),
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

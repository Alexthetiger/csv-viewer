<template>
    <div id="app">
        <div v-if="isFileLoaded">
            <div class="apply-outer">
                <input class="tool-name-input" placeholder="Enter tool name">
                <button class="apply-btn">Apply</button>
            </div>
            <Grid />
        </div>
        <FileUploader v-else />
    </div>
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
    },
  }
</script>
<style>
    .apply-outer{
        padding: 10px 0;
        text-align: center;
    }
    .tool-name-input {
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        margin-right: 10px;
        padding: 8px 10px;
        width: 500px;
    }
    .apply-btn{
        background: #ddd;
        border: 1px solid #bfcbd9;
        border-radius: 4px;
        cursor: pointer;
        padding: 8px 20px;
    }
</style>

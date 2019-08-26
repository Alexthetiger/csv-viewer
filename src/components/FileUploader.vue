<template>
  <div>
    <vue-dropzone
      ref="dropzone"
      id="dropzone"
      :options="dropzoneOptions"
      @vdropzone-file-added="fileAdded"
      @vdropzone-error="uploadError"
    ></vue-dropzone>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapGetters,
  } from 'vuex';
  import vueDropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';
  import Papa from 'papaparse';
  import {
    STATE_LOADING,
    STATE_ERROR,
  } from "src/store/file";

  export default {
    name: 'FileUploader',
    props: [],
    components: {
      vueDropzone,
    },
    data() {
      return {
        dropzoneOptions: {
          url: "fake",
          autoProcessQueue: false,
          acceptedFiles: '.csv',
          dictDefaultMessage: this.$t('upload.message'),
        }
      };
    },
    watch: {},
    computed: {
      ...mapGetters([
        'errorMessage',
      ]),
    },
    methods: {
      ...mapMutations([
        'setAppState',
        'setErrorMessage',
        'setFileName',
        'setRawFileData',
        'setParsedFileData',
      ]),
      fileAdded(file) {
        if (this.isCsvFile(file)) {
          this.setAppState(STATE_LOADING);
          let fr = new FileReader();
          fr.readAsText(file)
          this.setFileName(file.name);
          fr.onload = (e) => {
            let raw = e.target.result;
            this.setRawFileData(raw);
            this.parseFile(raw);
          }
          fr.onerror = (e) => {
            this.showError(this.$t('upload.error.readError'));
          }
        } else {
          this.showError(this.$t('upload.error.wrongFileType'));
        }
      },
      uploadError(file) {
        if (file.status === 'error' && !this.errorMessage) {
          this.showError(this.$t('upload.error.uploadError'));
        }
      },
      parseFile(raw) {
        const config = {
          error: (error, file) => {
            this.showError(this.$t('upload.error.readError'));
          },
          complete: (results, file) => {
            this.setParsedFileData(results);
          }
        }
        let parsed = Papa.parse(raw, config);
      },
      isCsvFile(file) {
        return file && /\.csv$/.test(file.name);
      },
      showError(msg) {
        this.setErrorMessage(msg);
      },
    },
  };
</script>

<style>
    .vue-dropzone{
        text-align: center;
    }
    .dz-progress{
        display: none;
    }
</style>

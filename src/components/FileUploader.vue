<template>
    <vue-dropzone
            ref="dropzone"
            id="dropzone"
            :options="dropzoneOptions"
            @vdropzone-file-added="fileAdded"
    ></vue-dropzone>
</template>

<script>
  import {
    mapMutations,
  } from 'vuex';
  import vueDropzone from 'vue2-dropzone';
  import 'vue2-dropzone/dist/vue2Dropzone.min.css';
  import Papa from 'papaparse';

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
    computed: {},
    methods: {
      ...mapMutations([
        'setFileName',
        'setRawFileData',
        'setParsedFileData',
      ]),
      fileAdded(file) {
        let fr = new FileReader();
        fr.readAsText(file)
        this.setFileName(file.name);
        fr.onload = (e) => {
          let raw = e.target.result;
          this.setRawFileData(raw);
          this.parseFile(raw);
        }
      },
      parseFile(raw) {
        const config = {
          error: (error, file) => {
            alert(error);
          },
          complete: (results, file) => {
            this.setParsedFileData(results);
          }
        }
        let parsed = Papa.parse(raw, config);
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

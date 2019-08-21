<template>
  <v-card v-if="hasParsedData">
    <v-card-title>
      {{tableTitle}}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        :label="$t('grid.search.label')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :footer-props="footerProps"
      :headers="header"
      :items="content"
      :items-per-page="20"
      :search="search"
      class="elevation-10"
    ></v-data-table>
  </v-card>
</template>

<script>
  import {
    mapMutations,
    mapGetters,
  } from 'vuex';

  export default {
    name: 'Grid',
    props: [],
    components: {
    },
    data() {
      return {
        search: '',
        footerProps: {
          'items-per-page-all-text': this.$t('grid.footer.items-per-page-all-text'),
          'items-per-page-text': this.$t('grid.footer.items-per-page-text'),
          'items-per-page-options': [10, 20, 50, 100, -1],
          'show-current-page': true,
          'show-first-last-page': true,
        }
      };
    },
    watch: {},
    computed: {
      ...mapGetters([
        'fileName',
        'hasParsedData',
        'parsedDataHeader',
        'parsedDataBody',
      ]),
      tableTitle() {
        return this.fileName || '';
      },
      header() {
        let header = [];
        if (this.parsedDataHeader) {
          this.parsedDataHeader.forEach((text, i) => {
            header.push({
              text: text,
              value: '' + i,
            })
          })
        }
        return header;
      },
      content() {
        let content = [];
        if (this.parsedDataBody) {
          this.parsedDataBody.forEach((item, i) => {
            if (item) {
              let itemObj = {};
              item.forEach((value, pos) => {
                itemObj['' + pos] = value;
              })
              content.push(itemObj);
            }
          });
        }
        return content;
      }
    },
    methods: {},
  };
</script>

<style scoped>
</style>

<template>
    <div v-if="hasParsedData">
        <table style="margin: 0 auto;">
            <thead>
                <tr>
                    <th v-for="h in header">
                        <td>{{h}}</td>
                    </th>
                </tr>
                <tr v-for="row in content">
                    <td v-for="col in row" v-text="col"></td>
                </tr>
            </thead>
        </table>
    </div>
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
      return {};
    },
    watch: {},
    computed: {
      ...mapGetters([
        'hasParsedData',
        'parsedDataHeader',
        'parsedDataBody',
      ]),
      header() {
        return this.parsedDataHeader;
      },
      content() {
        return this.parsedDataBody;
      }
    },
    methods: {},
  };
</script>

<style scoped>
</style>
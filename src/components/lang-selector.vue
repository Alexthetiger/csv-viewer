<template>
  <v-menu bottom left min-width="180">
    <template v-slot:activator="{ on }">
      <v-btn
        dark
        icon
        v-on="on"
      >
        <v-img
          :src="langIcon"
          aspect-ratio="1"
          contain
          max-width="24"
        ></v-img>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in langList"
        :key="item.value"
        @click="changeLanguage(item)"
      >
        <v-img
          :src="item.icon"
          contain
          max-width="24"
        ></v-img>
        <v-list-item-title class="ma-2">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    name: 'lang-selector',
    props: [],
    components: {},
    data() {
      return {};
    },
    watch: {},
    computed: {
      ...mapGetters([
        'languages',
        'langData',
      ]),
      langList() {
        return this.languages || [];
      },
      langIcon() {
        return this.langData && this.langData.icon;
      },
    },
    methods: {
      ...mapMutations([
        'setLanguage',
      ]),
      changeLanguage(item) {
        this.setLanguage(item.value);
        location.reload();
      },
    },
  };
</script>

<style scoped>

</style>

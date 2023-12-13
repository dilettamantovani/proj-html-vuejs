<script>
import { store } from './store.js';

// components
import AppHeader from './components/AppHeader.vue'
import AppJumbo from './components/AppJumbo.vue'
import AppMain from './components/AppMain.vue'
import AppReview from './components/AppReview.vue'
import AppArticles from './components/AppArticles.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppJumbo,
    AppMain,
    AppReview,
    AppArticles,
    AppFooter
  },
  data() {
    return {
      store
    }
  },

  mounted() {
    this.doThings();
  },

  methods: {
    doThings() {
      console.log("App.vue does things");
    }
  }
}

</script>

<template>
  <AppHeader />
  <AppJumbo />
  <AppMain />
  <AppReview />
  <AppArticles />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
@use "./styles/partials/variables";
</style>








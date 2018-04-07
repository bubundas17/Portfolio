import Vue from 'vue'
Vue.mixin({
  computed: {
    user() {
      return this.$store.getters.user
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
});

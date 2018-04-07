import Vue from 'vue'

Vue.mixin({
  methods: {
    showAlert(color, message){
        this.$store.dispatch("alert/show", {color, message})
    },
    hideAlert(){
      this.$store.dispatch("alert/hide")
    }
  }
});

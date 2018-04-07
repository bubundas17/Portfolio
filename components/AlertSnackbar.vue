<template>
  <v-snackbar
    :timeout="alertinfo.timeout"
    :color="alertinfo.color"
    :multi-line="false"
    v-model="alertinfo.show"
  >
    {{ alertinfo.message }}
    <v-btn dark flat @click.native="hideAlert">Close</v-btn>
  </v-snackbar>
</template>
<script>
  export default {
    computed: {
      alertinfo() {
        return this.$store.state.alert
      }
    }
  }
</script>

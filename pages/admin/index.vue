<template>
  <h1>{{ msg }}</h1>
</template>
<script>
  export default {
    middleware: "isAdmin",
    async asyncData({app}){
      let data = await app.$axios.get("/admin");
      return {
        msg: data.data
      }
    }
  }
</script>

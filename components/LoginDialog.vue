<template>
  <v-menu :close-on-content-click="false" bottom offset-y>
    <v-btn slot="activator" flat>
      <v-icon left>account_circle</v-icon>
      Login
    </v-btn>
    <v-card width="350px">
      <v-form action="/signup" @submit.prevent="login" ref="loginforum">
        <v-card-text>
          <h1 class="headline">Login To This Site.</h1>
          <v-text-field label="Username Or Email" v-model="username" name="username"/>
          <v-text-field label="Password" type="password" v-model="password" name="password"/>
          <nuxt-link to="/signup"><h5>Create An Account</h5></nuxt-link>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="success" :loading="loading" :disabled="loading" @click="login">Login</v-btn>
          <v-btn flat color="info">Can't Login?</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-menu>
</template>
<script>
  export default {
    data(){
      return{
        loading: false,
        username: "",
        password: "",
      }
    },
    methods: {
      async login() {
        try {
          this.loading = true;
          let user = await this.$axios.$post("/login", {
            username: this.username,
            password: this.password
          });
          this.loading = false;
          this.$store.commit("user", user.user);
          this.$store.commit("loggedIn", true);
          this.$router.push("/");
          this.showAlert("success", "Welcome Back " + user.user.name)
        } catch (error) {
          this.loading = false;
          if (error.response.status === 401) return this.showAlert("error", error.response.data.message);
        }
      }
    }
  }
</script>
<style scoped>

</style>

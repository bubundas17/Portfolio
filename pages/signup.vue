<template>
  <div class="signup-bg">
    <v-breadcrumbs>
    </v-breadcrumbs>
    <v-card class="signup-form">
      <v-form action="/signup" @submit.prevent="signup">
        <v-card-title>
          <v-layout column>
            <h1 class="headline">Create An Account</h1>
            <v-text-field label="Name" v-model="name" name="name"/>
            <v-text-field label="Email" v-model="email" name="email"/>
            <v-text-field label="Choose Username" v-model="username" name="username"/>
            <v-text-field label="Choose Password" v-model="password" name="password"/>
          </v-layout>
        </v-card-title>
        <v-card-actions>
          <v-btn color="green" dark @click="signup" :loading="loading">Signup</v-btn>
          <v-btn outline color="teal">Already have an account?</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>
<script>
  export default {
    middleware: "IfNotLoggedIn",
    data() {
      return {
        loading: false,
        password: "",
        email: "",
        username: "",
        name: ""
      }
    },
    methods: {
      async signup() {
        try {
          this.loading = true;
          let user = await this.$axios.$post("/signup", {
            username: this.username,
            password: this.password,
            email: this.email,
            name: this.name
          });
          this.loading = false;
          this.$store.commit("user", user.user);
          this.$store.commit("loggedIn", true);
          this.$router.push("/");
          this.showAlert("success", "Welcome Back " + user.name)
        } catch (error) {
          this.loading = false;
          if (error.response.status === 401) return this.showAlert("error", error.response.data.message);
        }
      },

      alert() {
        this.showAlert("error", "ok")
      }
    },
  }
</script>
<style scoped>
  .signup-bg {
    background: #27ae60;
    height: 100vh;
  }

  .signup-form {
    max-width: 500px;
    margin: 50px auto;
  }
</style>

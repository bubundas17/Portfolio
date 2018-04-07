<template>
  <v-menu :close-on-content-click="false" bottom offset-y>
    <v-btn slot="activator" flat>
      <v-icon left>account_circle</v-icon>
      {{ user.name }}
    </v-btn>
    <v-card width="350px">
      <v-list>
        <v-list-tile avatar two-line>
          <v-list-tile-avatar>
            <v-avatar class="indigo">
              <v-icon dark>account_circle</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <h2 class="title">{{ user.name }}</h2>
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Server Admin
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon :loading="loading" @click="logout"><v-icon>exit_to_app</v-icon></v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
  export default {
    data() {
      return {
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
      },
      async logout() {
        if (!this.loading) {
          try {
            this.loading = true;
            let user = await this.$axios.$get("/logout");
            this.loading = false;
            this.$store.dispatch("logout");
            this.showAlert("success", user.message)
          } catch (error) {
            this.loading = false;
            if (error.response.status === 401) return this.showAlert("error", error.response.data.message);
          }
        }

      }
    }
  }
</script>
<style scoped>

</style>

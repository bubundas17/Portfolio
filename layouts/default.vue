<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped" class="navbar" dark>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in items" :key="item.title" :to="item.to" :exact="item.exact">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <LoginDialog v-if="!isLoggedIn"/>
        <ProfileDialog v-if="isLoggedIn"/>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nuxt/>
    </v-content>
    <AlertSnackbar/>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,

        items: [
          {icon: 'mdi-home', title: 'Home', to: '/', exact: true},
          {icon: 'mdi-eye-outline', title: 'Showcase', to: '/showcase', exact: false},
          {icon: 'mdi-contact-mail', title: 'Contact Me', to: '/contact', exact: false},
          {icon: 'mdi-rss', title: 'Blog', to: '/blog', exact: false},
        ],
        miniVariant: false,
        rightDrawer: false,
        title: 'Bubun Das'
      }
    },
    methods: {},
    comments: {
    }
  }
</script>


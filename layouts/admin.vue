<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-toolbar dark flat class="teal">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Admin Panel
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list>
          <v-list-group
            v-model="item.active"
            v-for="item in admin"
            :key="item.title"
            :prepend-icon="item.icon"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.to" exact>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
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
        drawer: true,
        fixed: false,

        items: [
          {icon: 'mdi-home', title: 'Home', to: '/', exact: true},
        ],
        admin: [
          {
            icon: 'rss_feed',
            title: 'Posts',
            items: [
              {title: 'New Post', to: '/admin/blog/posts/new'},
              {title: 'All Posts', to: '/admin/blog/posts'},
            ]
          }, {
            icon: 'merge_type',
            title: 'Categories',
            items: [
              {title: 'New'},
              {title: 'Manage Categories', to: '/'},
            ]
          }, {
            icon: 'photo_library',
            title: 'Images',
            items: [
              {title: 'Gallery', to: '/'},
            ]
          },{
            icon: 'comment',
            title: 'Comments',
            items: [
              {title: 'List', to: '/admin/comments'},
            ]
          },
        ],
        miniVariant: false,
        rightDrawer: false,
        title: 'Bubun Das'
      }
    },
    methods: {},
    comments: {}
  }
</script>


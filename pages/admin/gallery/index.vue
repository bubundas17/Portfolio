<template>
  <v-layout row wrap>
    <v-flex xs3 v-for="image in images" :key="image.name">
      <v-card class="ma-1">
        <v-card-media :src="image.url" height="100px"></v-card-media>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    layout: "admin",
    data(){
      return {
        images: [
          { name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },{ name: "A",
            url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8aa38437c9b977558f5b430d68773742&auto=format&fit=crop&w=1052&q=80"
          },
        ]
      }
    }
  }
</script>
<style>

</style>

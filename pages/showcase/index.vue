<template>
  <v-layout row wrap>
    <v-jumbotron
      :src="conerImage" dark height="60vh"
      gradient="to top left, rgba(34, 193, 195, 0.5), rgba(253, 187, 45, 0.5)">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3 text">Welcome To Showcase</h3>
            <v-divider/>
            <h5 class="subheading text"> Here you will find some of the work i have done so far. </h5>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-layout row wrap>
      <v-flex xs12>
        <v-container class="pb-0">
          <h1>Showcase</h1>
        </v-container>
      </v-flex>
      <v-flex xs12>
        <v-container>
          <v-layout row wrap>
            <template v-for="item in showcaseItems">
              <v-flex d-flex xs12 sm6 md4 lg4>
                <v-card class="ma-1">
                  <v-card-media :src="item.cover" height="200px"></v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h1 class="headline">{{ item.title }}</h1>
                      <h2 class="subheading"> {{ item.description.slice(0, 70) }}</h2>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="teal">Read More</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        conerImage: require("@/assets/images/showcase-cover.jpg"),
        showcaseItems: [
          {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }, {
            title: "Placeholder Title",
            cover: "https://images.unsplash.com/photo-1494322296366-b46227baa318?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82a416dbad9ccc2239b010a2be63d6f3&auto=format&fit=crop&w=1055&q=80",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          },
        ]
      }
    }
  }
</script>
<style scoped>
  .text {
    text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.75);
    font-size: 51px;
  }
</style>

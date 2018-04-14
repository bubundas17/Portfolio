<template>
  <v-container fluid>
    <v-card>
      <v-card-media>
        <no-ssr>
          <v-container fluid>
            <quill-editor
              ref="quill"
              class="editor"
              v-model="content"
              :options="editorOption"
            >
            </quill-editor>
          </v-container>
        </no-ssr>
      </v-card-media>
      <v-card-actions>
        <v-btn color="teal">Post</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

  export default {
    layout: 'admin',
    data() {
      return {
        content: "",
        editorOption: {
          modules: {
            toolbar: {
              container: [
                [{'size': ['small', false, 'large', 'huge']}],
                [{'header': [1, 2, 3, 4, 5, 6, false]}],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'script': 'sub'}, {'script': 'super'}],
                [{'indent': '-1'}, {'indent': '+1'}],
                [{'direction': 'rtl'}],
                [{'font': []}],
                [{'color': []}, {'background': []}],
                [{'align': []}],
                ['clean'],
                ['link', 'image', 'video']
              ],
              handlers: {
                'image': this.imageHandler
              }
            },
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: ['Resize', 'DisplaySize', 'Toolbar'],
            },

          }
        }
      }
    },
    methods: {
      imageHandler() {
        let range = this.editor.getSelection();
        let value = prompt('What is the image URL');
        if (value) {
          this.editor.insertEmbed(range.index, 'image', value, "user");
        }
      }
    },
    computed: {
      editor() {
        return this.$refs.quill.quill
      },
    }
  }
</script>
<style scoped>
  .editor {
    height: 300px;
    display: block;
  }
</style>

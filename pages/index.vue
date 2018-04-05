<template>
  <div>
    <v-layout wrap class="top" row>
      <div id="particles-js">
      </div>
      <div class="welcome">
        <div class="message">
          <h1>Hi, I am Bubun</h1>
          <h2>Web App Developer from West Bengal, India</h2>
          <v-btn lang outline large class="white white--text mt-4">How Can I Help?</v-btn>
        </div>
      </div>
    </v-layout>
    <!--Bio Data-->
    <v-layout wrap row class="blue-grey lighten-5">
      <v-container>
        <v-layout wrap row class="mt-5">
          <v-flex xs12 sm12 md4 lg4>
            <v-container>
              <v-card tile flat class="transparent">
                <v-card-title>
                  <div>
                    <h1 class="mb-4">About Me</h1>
                    <span class="body-2 mb-2">
                    Hi, i'm Bubun, a Web Developer from West Bengal, India. I mostly code for web applications.
                    I have a great interest in programming and latest tech. I write code and build something new every single day!
                  </span>
                    <span class="body-2">
                    And yes, If you want to see some of the projects made by me, You can check the "Showcase" Area Of this Site. See you There!
                  </span>
                    <span class="body-2">
                      And Yes, If want to hear from me, please use the Contact Me section.
                    </span>
                  </div>
                </v-card-title>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex d-flex xs12 sm12 md4 lg4>
            <v-container fluid>
              <v-card tile fill-height>
                <v-card-media height="200px" :src="bgImage">
                  </v-card-media>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex d-flex xs12 sm12 md4 lg4>
            <v-container>
              <v-card tile flat class="transparent">
                <v-card-text>
                  <v-container fluid class="pa-0">
                    <h1 class="title mb-3">PERSONAL INFORMATION</h1>
                    <template v-for="info in personalInfo">
                      <h2 class="subheading pt-2 pb-2" :key="info.key">
                        <span class="personInfo">{{ info.key }}:</span> {{ info.value }}
                      </h2>
                      <v-divider/>
                    </template>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex xs12>
            <v-container fluid align-center>
              <a href="tel:+919093769664"><v-btn dark color="orange darken-4"> <v-icon left>mdi-phone-outgoing</v-icon> Phone</v-btn></a>
              <a href="mailto:hello@bubundas.com"><v-btn dark color="teal darken-2"> <v-icon left>mdi-at</v-icon> Email</v-btn></a>
              <a href="https://fb.me/bubundas17" target="_blank"><v-btn dark color="blue darken-4"> <v-icon left>mdi-facebook</v-icon> Facebook</v-btn></a>
              <a href="https://github.com/bubundas17" target="_blank"><v-btn dark color="black"> <v-icon left>mdi-github-circle</v-icon> GitHub</v-btn></a>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>

    <v-layout>
      <div id="wrap">

      </div>
    </v-layout>
  </div>

</template>

<script>
  import bgImage from "~/assets/images/bubun.jpg"
  if (typeof window !== 'undefined') {
    require("particles.js")
  }
  export default {
    data() {
      return {
        bgImage,
        personalInfo: [
          {key: "Name", value: "Bubun Das", icon: "user"},
          {key: "Age", value: "18 Years"},
          {key: "Phone", value: "+91-9093-7696-64"},
          {key: "Email", value: "hello@bubundas.com"},
          {key: "Address", value: "North 24 Pgs, West Bengal, India"},
        ]
      }
    },
    mounted() {

      if (typeof window !== 'undefined') {
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {"enable": true, "value_area": 500}
            },
            "color": {"value": "#ffffff"},
            "shape": {
              "type": "circle",
              "stroke": {"width": 0, "color": "#000000"},
              "polygon": {"nb_sides": 5},
              "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
              "value": 0.3,
              "random": false,
              "anim": {"enable": false, "speed": 0.5, "opacity_min": 0.1, "sync": false}
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {"enable": false, "speed": 10, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.3, "width": 1},
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {"enable": true, "mode": "repulse"},
              "onclick": {"enable": true, "mode": "push"},
              "resize": true
            },
            "modes": {
              "grab": {"distance": 10, "line_linked": {"opacity": 1}},
              "bubble": {"distance": 100, "size": 40, "duration": 2, "opacity": 8, "speed": 1},
              "repulse": {"distance": 100, "duration": 0.4},
              "push": {"particles_nb": 4},
              "remove": {"particles_nb": 2}
            }
          },
          "retina_detect": true
        });
      }
    },
    head () {
      return {
        title: "Bubun Das",
        meta: [
          { hid: 'description', name: 'description', content: 'Bubun\'s Personal Website'  }
        ]
      }
    }

  }
</script>
<style scoped>
 a{
   text-decoration: none;
 }
  span{
    display: block;
  }

  .personInfo {
    display: inline-block;
    min-width: 65px;
  }

  .welcome {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: white;
  }

  .welcome .message {
    text-align: center;
  }

  .message h1 {
    text-transform: uppercase;
    font-size: 72px;
  }

  .message h2 {
    text-transform: uppercase;
    font-size: 15px;
  }

  #particles-js {
    background: linear-gradient(to left top, rgba(0, 153, 255, 0.61), rgba(255, 0, 154, 0.63)), url("~/assets/images/home-top-image.jpg") no-repeat center;
    position: absolute;
    background-size: cover;
  }

  .top, #particles-js {
    height: 55vw;
    width: 100vw;
  }

  @media screen and (max-width: 600px) {
    .top, #particles-js {
      height: 100vw;
      width: 100vw;
    }

    .message h1 {
      font-size: 50px;
    }

    .message h2 {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 1200px) {
    .top, #particles-js {
      height: 90vh;
      width: 100vw;
    }
  }

  @media screen and (max-width: 380px) {

    .message h1 {
      font-size: 30px;
    }

    .message h2 {
      font-size: 10px;
      max-width: 213px;
    }
  }

</style>

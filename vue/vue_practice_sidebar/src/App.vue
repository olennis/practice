<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur aliquam
      totam incidunt sunt, amet nobis facere assumenda? Excepturi praesentium
      nesciunt rerum in quisquam aliquam eligendi commodi quas labore? Ad,
      accusantium.
    </p>
    <h3>Title</h3>
    <div><span>date</span></div>
    <div id="sky">
      <img />
      <ul class="list_mail">
        <li v-for="(mail, idx) in mailList" :key="idx" :style="mail.style">
          {{ mail.idx }}
        </li>
      </ul>
      <button type="button" @click="makeMail">click</button>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae
      culpa similique, pariatur facere corporis quo aspernatur accusantium
      maiores nulla error, ipsum magni voluptate. Placeat dolores facilis libero
      eius quia.
    </p>
    <a href="#none">go!</a>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      mailList: [],
    };
  },
  mounted() {
    setInterval(this.makeMail, 1000);
  },
  methods: {
    makeMail() {
      let mail = {
        style: {
          transform: `rotate(${
            Math.floor(Math.random() * 180) + 0
          }deg) translateX(${Math.floor(Math.random() * 180) + 0}px)`,
        },
      };
      this.mailList.push(mail);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  max-width: 1024px;
  margin: 0 auto;
}
#sky {
  background: blue;
  height: 400px;
}
ul {
  padding: 0;
  list-style: none;
}
.red {
  width: 200px;
  height: 200px;
  background: red;
}
.item {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: red;
}
.list_mail {
  position: relative;
  height: 200px;
}
.list_mail li {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 48%;
  background: green;
  animation: mail 1s ease-in 0s 1 forwards;
}
@keyframes mail {
  0% {
    bottom: 200px;
  }
  50% {
  }

  100% {
    bottom: 0px;
  }
}
</style>

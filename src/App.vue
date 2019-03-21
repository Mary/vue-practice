<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> replacing this with router view-->
    <!-- <hello-world msg="Welcome to your Vue js App" /> -->
    <router-view/>
    <!-- use npm install --save vue-router to save it in the package-lock 
    (which is global) as well as the package.json -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    NavBar
  }
  // components: { 'hello-world': HelloWorld, 'navbar': NavBar}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

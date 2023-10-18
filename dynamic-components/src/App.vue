<template>
  <div>
    <select v-model="componentName">
      <!-- <option value="">select page</option> -->
      <option value="Home">Home</option>
      <option value="About">About</option>
    </select>
    <!-- unmounted lifecycle not work when we use <keep-alive> -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>
<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
  },
  data() {
    return {
      componentName: "Home",
    };
  },
};
</script>

<template>
  <div id="app">
    <!-- use  shorthand property for v-slot -->
    <!-- user,favorite will represent every property to the slot component -->
    <hello-world #default="{ user, favorites }">
      <p>Hello {{ user.name }}. I like {{ favorites[0] }}.</p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

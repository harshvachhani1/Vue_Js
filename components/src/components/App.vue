<template>
  <greeting></greeting>
  <!-- <p>{{ msg }}</p> -->
</template>
<script>
// module
// name : anyone
import Greeting from "@/components/Greeting.vue";
export default {
  name: "App",
  components: {
    // key(Greeting) : value(Greeting)
    Greeting,
  },
};

/* export default{
name: "App";
data(){
  return{
    msg : "Hello World"
  }
}
 }*/
</script>

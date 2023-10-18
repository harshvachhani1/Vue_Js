<template>
  <div>
    <greeting :age="age"></greeting>
    <!-- <p>{{ msg }}</p> -->
    <user :age="age" @ageChange="updateAge" :ageChangeFn="updateAgeCB"></user>
  </div>
</template>
<script>
// module
// name : anyone
import Greeting from "@/components/Greeting.vue";
import User from "./components/User.vue";
export default {
  name: "App",
  components: {
    // key(Greeting) : value(Greeting)
    Greeting,
    User,
  },
  data() {
    return {
      age: 14,
    };
  },
  methods: {
    updateAgeCB(ageNumber) {
      this.age += ageNumber;
    },
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

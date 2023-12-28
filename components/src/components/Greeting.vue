<template>
  <div>
    <p v-if="age > 18">{{ msg }}</p>
    <p v-else>Your age {{ age }} you are not eligible for vote.</p>
  </div>
  <!-- component name : Greeting -->
</template>
<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "You are eligible for vote",
    };
  },
};
</script>

<style scoped lang="scss">
p:hover {
  color: darken(#cc4444, 15%);
}
</style>

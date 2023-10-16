const vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() function called!", this.message);
  },
  created() {
    console.log("create() function called!", this.message);
  },
  beforeMount() {
    console.log("beforeMount() function called!", this.$el);
  },
  mounted() {
    console.log("mounted() function called!", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate() function called!");
  },
  updated() {
    console.log("updated() function called!", this.message);
  },
  beforeUnmount() {
    console.log("beforeUnmount() function called!", this.message);
  },
  unmounted() {
    console.log("unmounted() function called!");
  },
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount("#app");
// }, 3000);

// vm.unmount()

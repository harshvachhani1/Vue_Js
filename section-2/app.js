let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectColor: "",
      size: 150,
    };
  },
  computed: {
    circleClasses() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");

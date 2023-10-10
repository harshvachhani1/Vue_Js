// Mounting is the process of adding a Vue.js component to the DOM (Document Object Model) for the first time.

//The mount method is used to create an instance of the component in a virtual DOM.

//The create app function will return an object with a method called mounts.

//we created a new application by calling the create app function

//data function that returns an object with firstName and lastName properties.

const lastName = "mehta";
// Create the first Vue instance
const vm = Vue.createApp({
  data() {
    return {
      firstName: "raj",
      lastName: "mehta",
      city: "",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      // event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateCityName(event) {
      this.city = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log(`computed property call`);
      return `${this.firstName} ${this.lastName} ${this.city}`;
    },
  },
  watch: {
    age(newValue, oldValue) {
      setTimeout(() => {
        this.age = 30;
      }, 2000);
      // console.log(newValue);
      // console.log(oldValue);
    },
  },
  // Mount the first Vue instance
}).mount("#app");

//mount('#app');is component to an element in the dom

//use direct data with proxy
/*
setTimeout(() => {
  vm.firstName = "kishan";
}, 2000);
*/

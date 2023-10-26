const vm = Vue.createApp({
  data() {
    return {
      birds: ["Pigeons", "Eagles", "Doves", "Parrots"],
      people: [
        { name: "ram", age: 20 },
        { name: "Meet", age: 19 },
        { name: "Raj", age: 33 },
      ],
    };
  },
}).mount("#app");

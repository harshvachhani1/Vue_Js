<template>
  <div>
    <p>The user is {{ age }} years old</p>
    <button type="button" @click="onClickAge">Update Age</button>
    <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
    <p>{{ ageDoubled }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      validator(value) {
        return value < 40;
      },
      // default: 20,
      // required: true, //Indicates if the prop is required
      // type: [Number, String],
    },
    ageChangeFn: Function,
  },
  emits: ["ageChange"],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      // this.$emit("ageChange");
      this.$emit("ageChange", 1);
    },
  },
};
</script>

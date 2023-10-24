<template>
  <div>
    <div class="result">
      <div class="title">{{ results[resultIndex].title }}</div>
      <div class="desc">{{ results[resultIndex].desc }}</div>
      <!-- <div class="desc">your Total currect answer {{ totalCorrect }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["results", "totalCorrect"],
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((currentItem, currentIndex) => {
        if (
          currentItem.min <= this.totalCorrect &&
          currentItem.max >= this.totalCorrect
        ) {
          index = currentIndex;
        }
      });

      return index;
    },
  },
};
</script>

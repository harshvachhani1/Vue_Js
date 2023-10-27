<template>
  <div>
    <button type="button" @click="flag = !flag">Click Here!</button>

    <!-- <transition name="fade" mode="out-in">
      <h2 v-if="flag" key="main">First Line.</h2>
      <h2 v-else key="secondary">Second Line</h2>
    </transition> -->

    <!-- <transition name="zoom" type="animation" appear>
      <h2 v-if="flag">Animation with transition applied.</h2>
    </transition> -->

    <!--<transition
      @beforeEnter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
      @beforeLeave="beforeLeave"
      @leave="leave"
      @afterLeave="afterLeave"
      name="fade"
    >
      <h2 v-if="flag">Hooks method use.</h2>
    </transition>
    -->

    <button @click="addItem">Insert Number</button>
    <ul>
      <transition-group
        name="fade"
        enter-active-class="animate__animated animate__flipInX"
        leave-active-class="animate__animated animate__flipOutX"
      >
        <li
          v-for="(number, index) in numbers"
          :key="number"
          @click="removeItem(index)"
        >
          {{ number }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
      numbers: [],
    };
  },
  methods: {
    addItem() {
      const getRandomNumber = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, getRandomNumber);
    },

    removeItem(index) {
      this.numbers.splice(index, 1);
    },

    beforeEnter(getElement) {
      console.log("beforeEnter event fired", getElement);
    },
    enter(getElement) {
      console.log("enter event fired", getElement);

      /*
      const animation = getElement.animate(
        [{ transform: "scale3d(0,0,0)" }, {}],
        {
          duration: 1000,
        }
      );

      animation.onfinish = () => {
        done();
      };
      */
    },
    afterEnter(getElement) {
      console.log("afterEnter event fired", getElement);
    },
    beforeLeave(getElement) {
      console.log("beforeLeave event fired", getElement);
    },
    leave(getElement) {
      console.log("leave event fired", getElement);

      /*
      const animation = getElement.animate(
        [{}, { transform: "scale3d(0,0,0)" }],
        {
          duration: 1000,
        }
      );

      animation.onfinish = () => {
        done();
      };
      */
    },
    afterLeave(getElement) {
      console.log("afterLeave event fired", getElement);
    },
  },
};
</script>

<style>
.animate__flipOutX {
  position: absolute;
}

.animate__animated {
  animation-duration: 1.5s;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

li {
  font-size: 22px;
  cursor: pointer;
}

.fade-enter-from {
  opacity: 0;
  font-size: 22px;
}
.fade-enter-active {
  transition: all 1s linear;
}
.fade-leave-to {
  transition: all 1s linear;
  font-size: 22px;
  opacity: 0;
}
.fade-move {
  transition: all 1s linear;
}
.fade-leave-active {
  position: absolute;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}
@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>

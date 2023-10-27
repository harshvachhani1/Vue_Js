<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthenticationModal"
              >Login / Register</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'

export default {
  name: 'MusicHeader',
  computed: {
    // use spread Operator
    ...mapStores(useModalStore)
  },
  methods: {
    toggleAuthenticationModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      // console.log(this.modalStore.isOpen)
    }
  }
}
</script>

<template>
  <main-navbar />
  <header class="bg-white shadow-sm">
    <div class="mx-auto py-4 container">
      <h1 class="text-lg font-semibold leading-6 text-gray-900">Marvel</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto container py-6">
      <brick-items :profiles="profiles" />
    </div>
  </main>
</template>

<script lang="js">
import MainNavbar from './MainNavbar.vue';
  import BrickItems from './BrickItems.vue';
  import { useMarvelStore } from '../stores/marvel';

  export default {
  components: {BrickItems,MainNavbar},
    data() {
      return {};
    },
    methods: {},
    mounted() {
    },
    watch: {},
    setup() {
  		const userStore = useMarvelStore();
      return { profiles: userStore.profiles}
    },
  };
</script>

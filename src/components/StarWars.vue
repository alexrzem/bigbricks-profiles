<template>
  <header class="bg-white shadow-sm">
    <div class="mx-auto py-4 container">
      <h1 class="text-lg font-semibold leading-6 text-gray-900">Star Wars</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto container py-6">
      <brick-items :profiles="profiles" />
    </div>
  </main>
</template>

<script lang="js">
import BrickItems from './BrickItems.vue';
import { useStarWarsStore } from '../stores/starwars';

export default {
  components: {BrickItems},
  data() {
    return {};
  },
  methods: {},
  mounted() {
  },
  watch: {},
  setup() {
		const userStore = useStarWarsStore();
    return { profiles: userStore.profiles}
  },
};
</script>

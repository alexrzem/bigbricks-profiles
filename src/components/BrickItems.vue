<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="profile in profiles" :key="profile.key" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      <brick-item :profile="profile"/>
    </li>
  </ul>
</template>

<script setup>
  import BrickItem from './BrickItem.vue';
  const props = defineProps(['profiles']);
</script>

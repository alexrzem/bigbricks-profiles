<template>
  <div class="flex flex-col p-8">
    <img class="mx-auto flex-shrink-0 rounded-full" :src="profile.imageUrl" alt="" />
    <h3 class="mt-6 text-sm font-medium text-gray-900">{{ profile.name }}</h3>
    <dl class="mt-1 flex flex-grow flex-col justify-between">
      <dt class="sr-only">Title</dt>
      <dd class="text-sm text-gray-500">
        <a :href="profile.linkUrl" target="_thangs">{{ profile.linkUrl }}</a>
      </dd>
    </dl>
  </div>
  <div>
    <div class="divide-x divide-gray-200">
      <div class="">
        <div v-for="colour in colours" :key="colour" class="flex flex-row border-2 rounded-md m-1 text-left">
          <div :class="['swatch-' + colour.name, 'w-10 rounded-l flex-none border-r-2']"></div>
          <div class="grow pl-1 text-sm">{{ colour.title }}</div>
          <div class="flex-none pr-1 font-mono text-xs leading-5">{{ colour.hex }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import _ from 'lodash';
  const props = defineProps(['profile']);
  const colours = _.get(props, 'profile.colours', []);
</script>

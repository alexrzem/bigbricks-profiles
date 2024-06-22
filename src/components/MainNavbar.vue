<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto container">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0 text-gray-300">
            <fa :icon="['fal', 'user-bounty-hunter']" class="block h-6 w-6" aria-hidden="true" alt="BigBricks" />
          </div>
          <div class="hidden lg:ml-6 lg:block">
            <div class="flex space-x-4">
              <template v-for="item in navigation" :key="item.name">
                <router-link v-if="item.show" :to="item.to" v-slot="{ isActive, isExactActive }" class="">
                  <div
                    :class="[
                      isExactActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    ]">
                    {{ item.name }}</div
                  >
                </router-link>
              </template>
            </div>
          </div>
        </div>
        <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="w-full max-w-lg lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <fa :icon="['far', 'magnifying-glass']" class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                disabled="true"
                class="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search" />
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <fa :icon="['far', 'bars']" class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="hidden lg:ml-4 lg:block">
          <div class="flex items-center"> </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Star Wars</DisclosureButton
        >
        <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Marvel</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

  import _ from 'lodash';
  import { computed } from 'vue';

  export default {
    components: { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems },
    data() {
      return {};
    },
    methods: {},
    mounted() {},
    watch: {},
    setup() {
      return {
        navigation: computed(() => {
          return [
            { name: 'Star Wars', to: { name: 'starwars' }, show: true },
            { name: 'Marvel', to: { name: 'marvel' }, show: true },
            { name: 'Miscellaneous', to: { name: 'misc' }, show: true },
          ];
        }),
      };
    },
  };
</script>

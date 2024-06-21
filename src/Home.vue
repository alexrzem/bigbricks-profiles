<template>
  <main-navbar />
  <router-view />
  <div class="container mx-auto p-4"> </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import MainNavbar from './components/MainNavbar.vue';

import _ from 'lodash';
import { computed } from 'vue';

export default {
  components: { MainNavbar, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems },
  data() {
    return {};
  },
  methods: {},
  mounted() { },
  watch: {},
  setup() {
    return {};
  },
};
</script>

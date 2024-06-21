import { createApp } from 'vue';
import { createPinia } from './pinia.js';
import { createRouter } from './router.js';

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';

import './style.css'
import App from './App.vue'

library.add(fab);
library.add(fad);
library.add(fal);
library.add(far);
library.add(fas);

const app = createApp(App);

app //
  .component('fa', FontAwesomeIcon) // //
  .component('fal', FontAwesomeLayers) //
  .component('fat', FontAwesomeLayersText) //
  .use(createPinia(app))
  .use(createRouter(app))
  .mount('#app');

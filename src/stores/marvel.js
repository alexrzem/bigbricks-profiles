import _ from 'lodash';
import { defineStore, acceptHMRUpdate } from 'pinia';

import COLOURS from './colours.json';
import PROFILES from './marvel.json';

export const useMarvelStore = defineStore({
  id: 'marvel',
  state: () => ({}),

  actions: {},
  getters: {
    profiles(state) {
      const profiles = [];

      for (const profile of PROFILES) {
        const colours = _.map(_.get(profile, 'colours', []), (colour) => {
          return _.find(COLOURS, { name: colour }, {});
        });

        profiles.push({ ...profile, colours });
      }

      return profiles;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMarvelStore, import.meta.hot));
}

import _ from 'lodash';
import { defineStore, acceptHMRUpdate } from 'pinia';

import COLOURS from './colours.json';
import PROFILES from './misc.json';

export const useMiscStore = defineStore({
  id: 'misc',
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
  import.meta.hot.accept(acceptHMRUpdate(useMiscStore, import.meta.hot));
}

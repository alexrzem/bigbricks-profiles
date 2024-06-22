import { createRouter as createVueRouter, createWebHistory, createWebHashHistory } from 'vue-router';

export function createRouter(app) {
  let router = {};

  try {
    router = createVueRouter({
      //history: createWebHashHistory(import.meta.env.BASE_URL),
      history: createWebHashHistory(),
      routes: [
        {
          path: '/',
          name: 'root',
          component: () => import('./Home.vue'),
          redirect: { name: 'starwars' },
          children: [],
        },
        {
          name: 'marvel',
          path: '/marvel',
          component: () => import('./components/Marvel.vue'),
          meta: { requiresAuth: false },
        },
        {
          name: 'starwars',
          path: '/starwars',
          component: () => import('./components/StarWars.vue'),
          meta: { requiresAuth: false },
        },
        {
          name: 'misc',
          path: '/misc',
          component: () => import('./components/Misc.vue'),
          meta: { requiresAuth: false },
        },
      ],
    });
  } catch (error) {
    console.log('createVueRouter:', error);
  }

  try {
    router.beforeEach(async (to, from) => {
      // console.log("beforeEach");
      // canUserAccess() returns `true` or `false`
      //const canAccess = await canUserAccess(to)
      //if (!canAccess) return '/login'

      if (to.matched.some((record) => record.meta.requiresAuth)) {
      }
    });
  } catch (error) {
    console.log('beforeEach:', error);
  }

  /*
  router.beforeCreate = (async (to, from, next) => {
    console.log('beforeCreate');
  });
  */

  /*
  router.beforeResolve = ((to, from, next) => {
    console.log('beforeResolve');
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      Auth.currentAuthenticatedUser()
        .then(() => {
          next();
        })
        .catch(() => {
          next({
            name: 'auth',
          });
        });
    }
    next();
  });
  */

  return router;
}

import { createPinia as createVuePinia} from 'pinia';

export function createPinia(app) {
    const pinia = createVuePinia();

    return pinia;
};

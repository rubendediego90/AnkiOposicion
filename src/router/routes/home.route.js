import { routes} from '../../constants/routes.constants';
export default {
  path: routes.DEFAULT,
    name: 'Home',
    component: () => import("../../views/Home.vue"),
    meta: {
      requiresAuth: true
    }
  };
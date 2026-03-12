import { createRouter, createWebHashHistory } from 'vue-router'
import HomeRoute from './routes/home.route';

const routes = [
  HomeRoute
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

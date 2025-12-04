import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import ReviewsPage from '../views/ReviewsPage.vue';
import ReviewDetailsPage from '../views/ReviewDetailsPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'ReviewsPage', component: ReviewsPage },
  { path: '/review/:id', name: 'ReviewDetailsPage', component: ReviewDetailsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


import { createRouter, createWebHistory } from "vue-router";

import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import AboutPage from "@/pages/AboutPage";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
import {createRouter, createWebHistory, RouterView} from 'vue-router'
import HomeView from "../views/HomeView.vue";
import Tr from "@/i18n/services"

const router = createRouter({
  history: createWebHistory("/"),
  linkActiveClass: "active",
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'homeViewBlocks',
          component: HomeView
        },
        {
          path: 'competition',
          name: 'competitionView',
          component: () => import(/* webpackChunkName: "about" */ '../views/CompetitionView.vue')
        },
        {
          path: 'rules',
          name: 'rulesViewBlocks',
          component: () => import(/* webpackChunkName: "about" */ '../views/RulesView.vue')
        },
        {
          path: 'about',
          name: 'aboutViewBlocks',
          component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        },
        {
          path: 'charities',
          name: 'charitiesView',
          component: () => import(/* webpackChunkName: "about" */ '../views/CharitiesView.vue')
        },
        {
          path: 'past-winner',
          name: 'pastWinnerViewBlocks',
          component: () => import(/* webpackChunkName: "about" */ '../views/PastWinnerView.vue')
        },
        {
          path: 'faqViewBlocks',
          name: 'faqViewBlocks',
          component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
        },
      ]
    },
  ]
})

export default router
import { createRouter, createWebHistory } from "vue-router"
import EverybodyCanSee from "@/EverybodyCanSee.vue"
import OnlyLoggedInCanSee from "@/OnlyLoggedInCanSee.vue"

const routes = [
  { path: '/', component: EverybodyCanSee },
  { path: '/locked', component: OnlyLoggedInCanSee },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export { router }

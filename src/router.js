import { createRouter, createWebHistory } from "vue-router"
import { uid } from "@/auth"
import EverybodyCanSee from "@/EverybodyCanSee.vue"
import OnlyLoggedInCanSee from "@/OnlyLoggedInCanSee.vue"

const routes = [
  { path: '/', component: EverybodyCanSee },
  { path: '/locked', 
    component: OnlyLoggedInCanSee,
    beforeEnter: (to, from) => {
      // block access if user is not logged in
      if (!uid.value) {
        return '/'
      }
    },
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export { router }

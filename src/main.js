import { createApp } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/auth'
import App from './App.vue'
import { router } from "@/router"

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.mount('#app')
  }
})



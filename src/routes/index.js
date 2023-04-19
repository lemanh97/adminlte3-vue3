import { createRouter,createWebHistory } from "vue-router";
import auth from "./authrouter";
import dashboard from "./dashboard"

const routes = [...auth,...dashboard]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next) => {
   document.title = to.meta.title
   next()
})
export default router
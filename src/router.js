import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import MyPage from "./views/MyPage.vue";

Vue.use(Router);

const requireAuth = () => (from, to, next) => {

  console.log("call requireAuth.")

  const isAuthenticated = false
  if (isAuthenticated) {
    return next()
  }
  
  next('/login?returnPath=mypage')
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/mypage",
      name: "MyPage",
      component: MyPage,
      beforeEnter: requireAuth()
    }
  ]
});

import Vue from 'vue'
import Router from 'vue-router'
import router from "../../../learnvuerouter/src/router";

const Home = () => import("../views/home/Home")
const CateGory = () => import("../views/category/CateGory")
const ShopCart = () => import("../views/shopcart/ShopCart")
const Profile = () => import("../views/profile/Profile")

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: CateGory,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
]



// export default new Router({
//   routes: [
//     {
//       path: '',
//       redirect: '/home'
//     },
//     {
//       path: '/home',
//       component: Home,
//       meta: {
//         title: '首页'
//       }
//     },
//     {
//       path: '/category',
//       component: CateGory,
//       meta: {
//         title: '分类'
//       }
//     },
//     {
//       path: '/shopcart',
//       component: ShopCart,
//       meta: {
//         title: '购物车'
//       }
//     },
//     {
//       path: '/profile',
//       component: Profile,
//       meta: {
//         title: '我的'
//       }
//     }
//   ],
//   mode: 'history',
// })

// const beforeEach = () => {
//   router.beforeEach((to, from, next) => {
//     document.title = to.matched[0].meta.title
//     next()
//   })
// }

export default new Router({
  routes,
  mode: 'history'
})







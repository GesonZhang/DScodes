import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/picture/Photo'
import PhotoDetail from '@/components/picture/PhotoDetail'
import Cart from '@/components/cart/Cart'
import Music from '@/components/music/Music'
import FirstPage from '@/components/index/FirstPage'
import Information from '@/components/index/Information'
import Product from '@/components/index/Product'
import IndexNav from '@/components/index/IndexNav'
import LadyGaga from '@/components/music/LadyGaga'
import Mars from '@/components/music/Mars'
import Weeknd from '@/components/music/Weeknd'
import MusicNav from '@/components/music/MusicNav'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      redirect:'/index/infor'
    },
    {
      path: '/photo',
      component: Photo
    },
    {
      path: '/photo/photo_detail/:index',
      component: PhotoDetail
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path:'/music',
      redirect:'/music/music-nav'
    },
    {
      path: '/music',
      component: Music,
      children: [
        { path: "/music/music-nav", component: MusicNav },

        { path: "/music/ladygaga", component: LadyGaga },
        { path: "/music/mars", component: Mars},
        { path: "/music/weeknd", component: Weeknd}

      ]
    },
    {
      path: '/index',
      component: FirstPage,
      children: [
        {path: '/index/nav', component: IndexNav},
        { path: "/index/infor", component: Information },
        { path: "/index/pro", component: Product}
      ]
    },
  ]
})

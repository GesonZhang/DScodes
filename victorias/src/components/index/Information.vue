<template>
  <div class="information">
    <swipe class="my-swipe">
      <swipe-item class="item1"></swipe-item>
      <swipe-item class="item2"></swipe-item>
      <swipe-item class="item3"></swipe-item>
      <swipe-item class="item4"></swipe-item>
      <swipe-item class="item5"></swipe-item>
    </swipe>
    <div class="small-title">品牌分类</div>
    <ul class="product-list">
      <router-link to="/index/pro"><li v-for="product in productlist">
        <img :src="product.bg" alt="">
      </li></router-link>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  import {Swipe, SwipeItem } from 'vue-swipe'
  Swipe.auto= false;

  export default {
    data () {
      return {
        productlist:[]
      }
    },
    components: {
      Swipe,
      SwipeItem
    },
    mounted(){
      Axios.get('../../../static/productList.json').then((res)=>{
        this.productlist = res.data.productlist;
      });
    }
  }

</script>
<style>
  @import "../../assets/css/vue-swipe.css";

  .information{
    margin-top: 1.8rem;

  }
  .my-swipe {
    height: 4rem;
    font-size: 30px;
    text-align: center;
    margin-top: 1rem;
    z-index: -1;
  }
  .my-swipe .mint-swipe-item{
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .item1 {
    background: url('../../../static/img/swipeimg/big.jpg');
  }

  .item2 {
    background: url('../../../static/img/swipeimg/hesui.jpeg');
  }

  .item3 {
    background: url('../../../static/img/swipeimg/weimi1.jpg');
  }
  .item4 {
    background: url('../../../static/img/swipeimg/product.jpg');
  }
  .item5 {
    background: url('../../../static/img/swipeimg/beauty.jpg');
  }
  .small-title{
    height: 0.5rem;
    margin-top: 1px;
    background: rgb(252,222,230);
    color: #ffffff;
    font-weight: 500;
    line-height: 0.5rem;
  }
  .product-list{
    margin-bottom: 1rem;
  }
  .product-list li{
    margin-bottom: 1px;
  }

</style>

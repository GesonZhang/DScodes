<template>
  <div class="footer">
    <ul>
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/photo">图片</router-link></li>
      <li><router-link to="/music">音乐</router-link></li>
      <li><router-link to="/cart">购物车</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
  @import "../../assets/css/reset.css";
  .footer{
    height: 1rem;
    color: #fff;
    background:  rgb(252,222,230);
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    flex: 1;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .footer a{
    color: #ccc;
    outline: none;
    font-weight: 500;
  }
  .footer a.router-link-active{
    color: #fff;
  }
</style>

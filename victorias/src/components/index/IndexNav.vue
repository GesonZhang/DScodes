<template>
  <div class="nav">
    <ul>
      <li><router-link to="./infor">介绍</router-link></li>
      <li><router-link to="./pro">产品</router-link></li>
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
  .nav{
    height: 0.8rem;
    color: darkslategray;
    background: rgb(252,222,230);
  }
  .nav ul{
    display: flex;
  }
  .nav ul li{
    flex: 1;
    height: 1rem;
    text-align: center;
    line-height: 0.8rem;
  }
  .nav{
    border-top: 1px solid #fff;
    position: fixed;
    top: 1rem;
    width: 100%;

  }
  .nav a{
    color: #ccc;
    outline: none;
    font-weight: 500;
  }
  .nav a.router-link-active{
    color: #fff;
  }

</style>

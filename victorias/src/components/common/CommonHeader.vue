<template>
  <div class="header">
  <button>首页</button>
    <h2>Victoria's secret </h2>
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
  .header{
    display: flex;
    height: 1rem;
    color: #fff;
    background:  rgb(252,222,230);
  }
  .header button{
    width: 1rem;
    height: 1rem;
    color: #fff;
    font-weight: 500;
  }
  .header h2{
    flex: 1;
    font-weight: 500;
    text-align: center;
    text-indent: -1rem;
    line-height: 1rem;
    font-size: 0.5rem;
  }
  .header{
    position: fixed;
    top: 0;
    width: 100%;
  }

</style>

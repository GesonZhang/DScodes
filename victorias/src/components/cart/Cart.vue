<template>
  <div class="cart">
    <common-header></common-header>
    <div class="price">
      <span>商品数量:</span><span>0</span>
      <span style="color: red">总价:</span><span>0</span>
    </div>
    <button>结算</button>

    <common-footer></common-footer>

  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'

  export default {
    data() {
      return {

      }
    },
    components:{
      CommonFooter,
      CommonHeader
    }


  }
</script>

<style>
.price{
  position: absolute;
  bottom: 1.6rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  /*height: 1rem;*/
}
.price span{
  margin-left: 0.3rem;
  float: left;
}
.cart button{
  display: block;
  position: absolute;
  bottom: 1.05rem;
  height: 0.5rem;
  width: 1rem;
  border: 1px solid transparent;
  border-radius: 10%;
  background: rgb(252,222,230);
  color: #fff;
  right: 2px;

}

</style>

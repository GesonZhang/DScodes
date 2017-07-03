<template>
  <div class="product">
    <ul>
      <li class="panties">
        <span class="pro-title">panties</span>
        <ul class="sub-t">
          <li><img src="../../assets/img/paint/1.jpg" alt=""></li>
          <li><img src="../../assets/img/paint/2.jpg" alt=""></li>
          <li><img src="../../assets/img/paint/3.jpg" alt=""></li>
          <li><img src="../../assets/img/paint/4.jpg" alt=""></li>
          <li><img src="../../assets/img/paint/5.jpg" alt=""></li>
          <li><img src="../../assets/img/paint/6.jpg" alt=""></li>
        </ul>
      </li>
      <li class="lingerie">
        <span class="pro-title">lingerie</span>
        <ul class="sub-t">
          <li><img src="../../assets/img/lingerie/1.jpg" alt=""></li>
          <li><img src="../../assets/img/lingerie/2.jpg" alt=""></li>
          <li><img src="../../assets/img/lingerie/3.jpg" alt=""></li>
          <li><img src="../../assets/img/lingerie/4.jpg" alt=""></li>
          <li><img src="../../assets/img/lingerie/5.jpg" alt=""></li>
          <li><img src="../../assets/img/lingerie/6.jpg" alt=""></li>
        </ul>
      </li>
      <li class="sport">
        <span class="pro-title">sport</span>
        <ul class="sub-t">
          <li><img src="../../assets/img/sport/1.jpg" alt=""></li>
          <li><img src="../../assets/img/sport/2.jpg" alt=""></li>
          <li><img src="../../assets/img/sport/3.jpg" alt=""></li>
          <li><img src="../../assets/img/sport/4.jpg" alt=""></li>
          <li><img src="../../assets/img/sport/5.jpg" alt=""></li>
          <li><img src="../../assets/img/sport/6.jpg" alt=""></li>
        </ul>
      </li>
      <li class="beauty">
        <span class="pro-title">beauty</span>
        <ul class="sub-t">
          <li><img src="../../assets/img/beauty/1.jpg" alt=""></li>
          <li><img src="../../assets/img/beauty/2.jpg" alt=""></li>
          <li><img src="../../assets/img/beauty/3.jpg" alt=""></li>
          <li><img src="../../assets/img/beauty/4.jpg" alt=""></li>
          <li><img src="../../assets/img/beauty/5.jpg" alt=""></li>
          <li><img src="../../assets/img/beauty/6.jpg" alt=""></li>
        </ul>
        <span></span>
      </li>

    </ul>

  </div>
</template>

<script>
import Axios from 'axios'

  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
  .product{
    margin-top: 1.8rem;
  }
  .product img{
    width: 100%;
    height: 100%;
  }
  .panties{
    width: 100%;
    height: 0.5rem;
    background: url("../../../static/img/productlist/061917-panties-ftr.jpg") no-repeat -40% / cover;
  }

  .pro-title{
      display: inline-block;
    height: 0.5rem;
    text-align:left;
    text-indent: 0.7rem;
    color: #fff;
    font-size: 18px;
    width: 100%;
    font-weight: 800;
    /*margin-left: 0.5rem;*/
  }
  .panties .pro-title{
    background: url("../../../static/img/productlist/061917-panties-ftr.jpg") no-repeat -40% / cover;

  }
  .lingerie .pro-title{
    background: url("../../../static/img/productlist/061917-lingerie-ftr.jpg") no-repeat center / cover;

  }
  .sport .pro-title{
    background: url("../../../static/img/productlist/061217-sport-bra-ftr.jpg") no-repeat center  / cover;

  }
  .beauty .pro-title{
    background: url("../../../static/img/productlist/062117-beauty-ftr.jpg") no-repeat center -2rem  / cover;

  }
  .sub-t li{
    width: 50%;
    float: left;
    height: 3.2rem;
  }
  .sub-t{
    /*height: 9.6rem;*/
    /*margin-top: rem;*/
    /*overflow: hidden;*/
  }

</style>

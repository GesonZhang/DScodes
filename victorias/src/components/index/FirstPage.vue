<template>
  <div id="nav">
    <common-header></common-header>
   <index-nav></index-nav>
   <router-view></router-view>
    <common-footer></common-footer>

  </div>
</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Information from './Information'
  import Product from './Product'
  import IndexNav from './IndexNav'


  export default {
    data() {
      return {

      }
    },
    components:{
      CommonFooter,
      CommonHeader,
      Information,
      Product,
      IndexNav
    }


  }
</script>

<style>


</style>

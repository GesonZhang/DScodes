<template>
  <div class="music">
    <common-header></common-header>
      <router-view></router-view>
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

</style>

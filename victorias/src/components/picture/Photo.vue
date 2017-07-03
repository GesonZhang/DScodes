<template>
  <div class="photo">
    <common-header></common-header>
    <ul class="photo-box">
      <li v-for="(photo,index) in $store.state.photoList">
        <router-link :to="'photo/photo_detail/'+index"><img :src="photo.src" alt=""></router-link>
      </li>
    </ul>
    <common-footer></common-footer>

  </div>

</template>

<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import Axios from 'axios'
  export default {
    data () {
      return {

      }
    },
    components: {
      CommonFooter,
      CommonHeader
    },
    mounted(){
//      this.$store.dispatch('changeTitle',['图片','#696969']);
      Axios.get('static/photo-data.json').then((res)=>{
        this.$store.dispatch('photoList',res.data.photoData);
      });
//      Axios.get('static/photoBig-data.json').then((res)=>{
//        this.$store.dispatch('photodetailList',res.data.photoData);
//      });
    }
  }

</script>
<style>
  @import "../../assets/css/reset.css";
  .photo-box{
    margin:1rem 0;
    overflow: hidden;
  }
  .photo-box li{
    box-sizing: border-box;
    width: 50%;
    float: left;
    border: 1px solid rgb(252,222,230);
  }
  .photo-box li img{
    width: 100%;
    height: 100%;
  }

</style>

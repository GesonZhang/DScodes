<template>
  <div class="photo-box">
    <common-header> </common-header>

    <!--<div class="photo-box">-->
    <!--<img :src="$store.state.photoList[index].src" alt="">-->
    <!--</div>-->
    <v-touch @swipeleft="next" @swiperight="prev" class="photo" :style="bgStyle">
      <img src="../../assets/img/VS .png" class="title-img" alt="">




    </v-touch>
  </div>
</template>
<script>
  import CommonHeader from '../common/CommonHeader'
  import Axios from 'axios'
  export default {
    data () {
      return {
        index: this.$route.params.index,
        photodetailList:[]
      }
    },
    components: {
      CommonHeader
    },
    methods:{
      next(){
        this.index++;
      },
      prev(){
        this.index--;
      }
    },
    created(){
      Axios.get('static/photoBig-data.json').then((res)=>{
        this.photodetailList = res.data.photoData;
        console.log(res.data.photoData);
        console.log(this.index);
      });
    },

    computed: {
      bgStyle(){
          if(this.photodetailList.length == 0){
              return {};
          }else{
            return {
              background: "url('" + this.photodetailList[this.index].src + "') no-repeat center / contain rgb(252,222,230)"
            }
          }
      }
    }
  }
</script>
<style scoped>
  .photo{
    position: absolute;
    top:1rem;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .photo-box .title-img{
    height: 0.8rem;
    /*width: 100%;*/
  }

</style>

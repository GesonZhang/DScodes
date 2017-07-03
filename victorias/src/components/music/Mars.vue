<template>
  <div class="music-list">
    <a-player :music="musicList" :narrow="false" :autoplay="true" v-if="isShow"  theme="#e6d0b2"
              listmaxheight="513px" mode="random">

    </a-player>
  </div>
</template>

<script>
  //https://www.npmjs.com/package/aplayer
  import Axios from 'axios'
  import APlayer from 'vue-aplayer'

  export default {
    data() {
      return {
        musicList:[
          {
            "title":"Chunky",
            "author":"Bruno Mars",
            "url": "../../../static/Bruno Mars - Chunky.mp3",
            "pic": "../../../static/img/detail/chunky.jpg",
          },
          {
            "title":"24K Magic - 2016维多利亚的秘密泳装秀现场",
            "author":"Bruno Mars",
            "url": "../../../static/Bruno Mars - 24K Magic.mp3",
            "pic": ".../../../static/img/detail/24k.jpg",
          }],
        isShow:false
      }
    },
    components:{
      APlayer
    },
    mounted(){
//      console.log(this.$route.params.id);
//    this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);


      this.isShow = true;


    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .aplayer{
    margin-top: 1rem;
  }

</style>

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
            "title":"Million reasons",
            "author":"Lady Gaga",
            "url": "../../../static/Million Reasons-Lady Gaga.mp3",
            "pic": "../../../static/img/detail/millionreasons.jpg",
          },
          {
            "title":"A-Yo",
            "author":"Lady Gaga",
            "url": "../../../static/A-Yo-Lady Gaga.mp3",
            "pic": ".../../../static/img/detail/A-Yo.jpg",
          },
          {
            "title":"Jhon Wayne",
            "author":"Lady Gaga",
            "url": "../../../static/John Wayne-Lady Gaga.mp3",
            "pic": "../../../static/img/detail/jhon.jpg",
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

<template>
  <div id="course">
   <common-header>
     <div class="page-title">我的课程表</div>
   </common-header>

    <ul class="nav">
      <li><router-link to="/course/Class" @click.native="flushCom">正在上课 &nbsp({{aa?$store.state.sentlength:0}})</router-link></li>
      <li><router-link to="/course/waiting" @click.native="flushCom">等待上课&nbsp({{aa?$store.state.sentlengthw:0}})</router-link></li>
      <li><router-link to="/course/finish" @click.native="flushCom">已结束&nbsp({{aa?$store.state.sentlengthf:0}})</router-link></li>
    </ul>
    <transition :name="transitionName">
      　<router-view class="Router">

    </router-view>
    </transition>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import $ from 'jquery'
  import CommonHeader from '@/components/common/CommonHeader'
  import CommonFooter from '@/components/common/CommonFooter'

  export default {
    data () {
      return {
        aa:localStorage.id,
        transitionName: 'slide-right'

      }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    },
    components:{
        CommonHeader,
        CommonFooter,
    },methods:{

      flushCom:function(){
//        this.$router.go(1);

       }
      }
//    mounted(){
//        $('#course').load(function(){
////          $('.nav > li').click();
//        })
//    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-title{
    background-color: skyblue;
    width: 6.4rem;
    text-align: center;
    height: 1rem;
    z-index: 100;
  }
 .nav{
   display: flex;
   height: 1rem;
   position: fixed;
   top: 1rem;
   width: 100%;
   z-index: 100;
   background: #fff;
 }
  .nav li{
    height: 1rem;
    flex: 1;
    text-align: center;
    line-height: 1rem;
  }
  .nav li a{
    padding: 0;
  }
  .nav li a{
    display: block;
    width: 100%;
    height: 100%;
    color: #ccc;
    outline: none;
  }
  .nav li a.router-link-active{
    background: #fff;
    color:deepskyblue;
    border-bottom: 1px solid deepskyblue;

  }
  .Router {
    position: absolute;
    /*top:1rem;*/
    width: 100%;
    transition: all .8s ease;
    /*top: 40px;*/
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }


</style>

<template>
  <div class="course">
    <div class="unlog" v-show="login">
      <router-link to="/login"><input type="button" value="请登录" class="btn"></router-link>
      <p>您还未登录，请登录后查看</p>
    </div>
    <ul class="course-info" v-show="!login">
      <li class="one" @click = "upshow($event)" v-for="(info,index) in classtea_list" :style="{top:(2.1+index*0.7)+'rem'}">
        <div class="course-content">
         <div class="course-headpic">
           <div class="course-bgtop">
           </div>
           <div class="course-title">
             {{info.c_subject}}
             <img class="img-circle" :src=info.j_img alt="">
           </div>
         </div>
          <div class="course-detail">
            <img src="../../assets/img/course-class.png" alt="">
            <span class="subject">{{info.c_subject}}</span>
          </div>
          <div class="course-detail">
            <img src="../../assets/img/coursete.png" alt="">
            <span class="coursete"> {{info.t_name}}</span>
          </div>
          <div class="course-detail">
            <img src="../../assets/img/course-date.png" alt="">
            <span class="course-date">{{info.start_time}}</span>
          </div>
          <div class="course-detail">
            <img src="../../assets/img/course_place.png" alt="">
            <span class="course-place">{{info.c_address}}</span>
          </div>
          <div class="course-detail">
            <img src="../../assets/img/coursephone.png" alt="">
            <span class="coursephone">{{info.t_tel}}</span>
          </div>
        </div>
      </li>
    </ul>


    </div>
</template>

<script>
  import $ from 'jquery'
  import Axios from 'axios';
//  import'../../assets/bootstrap/js/jquery.min.js'
//  import '../../assets/bootstrap/css/bootstrap.css'
//  import'../../assets/bootstrap/js/bootstrap.min.js'
//  import '../../../node_modules/iview/dist/styles/iview.css'


  export default {
    data () {
      return {
            flag:true,
            iTop:'',
            classtea_list:[],
            classtea_listw:[],
            classtea_listf:[],
            login:false,
            state:1,
            state_w:2,
            statef:3
        }

      },
    methods: {
//      lishow:function(){
//            $('.one').$('#clickme').click(function() {
//                $('#book').animate({
//                  opacity: 0.25,
//                  left: '+=50',
//                  height: 'toggle'
//                },
//        },
//      $('.one').load(function(event)){
//        event.preventDefault();
//        let target = event.target
//        console.log(target.getAttribute("data-index"));
//        document.getElementById('index').value = target.getAttribute("data-index");
//      },
      upshow:function(e){
          var iTop = $(e.target).parents('.one').css('top');
          this.flag = !this.flag;
          if(!this.flag){
            $(e.target).parents('.one').animate({
             zIndex:'10',
              top: '2.5rem'
          });
            $(e.target).parents('.one').siblings().css('display','none');
            this.iTop=iTop;

          }else{
            $(e.target).parents('.one').animate({
//              zIndex:'0',
              top: ''+this.iTop+''
            },function(){
            $(e.target).parents('.one').css('z-index','0');
          });
             $(e.target).parents('.one').siblings().css('display','block');
          }
      }
    },
    mounted(){
      if (localStorage.id) {
        this.login = false;
      }else{
        this.login = true;
      };
        Axios.get('http://localhost:3000/courseList_teacher',{params:{
          studentid:localStorage.id,
          studentstate:this.state
//          studentstatew:2,
//          studentstatef:3,
//          courseList_teacherw:courseList_teacherw,
//          courseList_teacherf:courseList_teacherf

        }}).then((res)=>{

          this.classtea_list = JSON.parse(res.data);
          this.$store.dispatch('sentlength',this.classtea_list.length);

        });
      Axios.get('http://localhost:3000/courseList_teacherw',{params:{
        studentid:localStorage.id,
        studentstatew:2
      }}).then((res)=>{
        this.classtea_listw = JSON.parse(res.data);
        this.$store.dispatch('sentlengthw',this.classtea_listw.length);

      });
      Axios.get('http://localhost:3000/courseList_teacherf',{params:{
        studentid:localStorage.id,
        studentstatef:3

      }}).then((res)=>{

        this.classtea_listf = JSON.parse(res.data);
        this.$store.dispatch('sentlengthf',this.classtea_listf.length);

      })
    }
  }
</script>


<style scoped>
  @import "../../assets/css/reset.css";
  /*import '../assets/bootstrap/css/bootstrap.css';*/

  .course{
    text-align: center;
  }

 .btn{
   height: 0.8rem;
   width: 2.5rem;
   margin-top: 4rem;
   background: #ccc;
   color: #fff;
   outline: none;
   border: 0;
   border-radius: 0.2rem;
   text-align: center;
 }
  .course p{
    margin-top: 0.4rem;
  }
  .course-info{
    margin-top: 1.2rem;
    /*display: flex;*/
    text-align: center;
    margin-bottom: 1rem;

    /*overflow: hidden;*/
  }
  .course-info li{
    margin:0 auto;
    list-style: none;
    display: block;
    width: 94%;
    height: 7.7rem;
    background:#d9edf7;
    /*border: 1px solid #bce8f1;*/
    border: 2px solid #fff;

    border-radius: 0.2rem;
    overflow: hidden;
    position: absolute;
    left: 3%;
    margin-bottom: 1rem;



  }
  .course-info .course-title{
    width: 100%;
    text-indent:0.5rem;
    text-align: center;
    font-size: 0.4rem;
    height: 0.5rem;
    color:#ffffff;
    letter-spacing: 0.5rem;
    position: absolute;
    top: 0;

  }
  .course-info .course-headpic{
    /*border-radius: 0.2rem;*/
    height: 3rem;
    background: #fff;
    background: url("../../assets/img/maozi.jpg") no-repeat;
    background-size: 100%;
    background-position: -20% 0;
  }
  .course-info .course-bgtop{
    background: #000;
    opacity:0.2;
    height: 100%;
    /*position: absolute;*/

  }
  .course-title img{
    display: block;
    margin:0.1rem auto;
    width: 2rem;
  }
.course-detail{
  padding-top:0.2rem;
  padding-bottom:0.5rem ;
  margin-bottom: 0.2rem;
    margin-top: 0                 ;
    width:100%;
    height: 0.5rem;
    text-align: center;
    color: #31708f;
    font-size: 0.4rem;
    line-height: 0.5rem;
  border-top: 1px solid #fff;
  }
.course-detail img{
    height: 0.5rem;
    float: left;
    margin-left: 1.5rem;
  }
  .course-detail span{
    float: left;
    margin-left: 0.5rem;
  }

</style>

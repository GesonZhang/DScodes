<template>
  <div class="music-nav">
    <ul class="singer">
      <li><h3>LadyGaga</h3><router-link to="/music/ladygaga"><img src="../../assets/img/ladygaga2.jpg" alt=""></router-link></li>
      <li><h3>Bruno Mars</h3><router-link to="/music/mars"><img src="../../assets/img/mars.jpg" alt=""></router-link></li>
      <li><h3>Taylor Swift</h3><router-link to="/music/weeknd"><img src="../../assets/img/Taylor.jpg" alt=""></router-link></li>
    </ul>
  </div>
</template>

<script>


  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
  .singer{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .singer li{
    width: 100%;
    /*height: 3.1rem;*/
  }
  .singer img{
    width: 100%;
    height: 100%;
  }

</style>

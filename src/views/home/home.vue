<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>Dan购物</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper"/>
    <recommend-view :recommends="recommends"/>
  </div>  
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'

  import NavBar from '../../components/common/navbar/NavBar'
    export default {
      name:"home",
      components: {
          NavBar,
          HomeSwiper,
          RecommendView
      },
      data(){
        return{
          banners:[
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg1.jpg" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg2.jpg" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg3.jpg" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg4.jpg" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg5.jpg" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg6.jpg" },
          ],
          recommends: [
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend1.webp",title: "Dan超市" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend2.webp",title: "数码电器" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend3.webp",title: "Dan服饰" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend4.webp",title: "Dan生鲜" },
            { url : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend5.webp",title: "领红包" },
          ]
        }
      }
    }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: #ff8198;
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .home-swiper{
    top:44px
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>


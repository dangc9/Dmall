<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-header">
      <template v-slot:left>
        <span class="home-header-icon" @click="categroyIconBtn" title="分类"></span>
      </template>
      <template v-slot:center>
        <div class='header-search-box' @click="goSearch">
          <i class="home-header-logo"></i>
          <i class="search-box-icon"></i>
          <div class='search-box-input-div'>
            <input type="text" placeholder="手机">
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div class="home-header-login" v-if='!isLogin' @click="goLogin">
          <span>登录</span>
        </div>
        <div class="home-header-prefile" v-else @click="goProfile">
          <i></i>
        </div>
      </template>
    </nav-bar>
    <scroll class="content-scroll" :options="scrollOptions">
      <swiper :content="swiperbanners" :options="swiperOptions" class="home-swiper"></swiper>
      <recommend-view :recommends="recommends"/>
      <feature-view :featureview="featureview"/>
      <tab-control class="tab-control"
                    :titles="['猜你喜欢', '新款', '精选']"
                    @tabClick="tabClick"/>
      <good-list :goods="goods"/>
    </scroll>
  </div>  
</template>

<script>
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import Scroll from 'components/common/scroll/scroll'
  import Swiper from 'components/common/swiper/swiper'
  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodList from '../../components/content/goods/GoodsList'

  export default {
    name: "home",
    components: {
      RecommendView,
      FeatureView,

      Swiper,
      Scroll,
      NavBar,
      TabControl,
      GoodList, 
    },
    data(){
      return{
        currentType: 'like',
        isLogin: false,
        scrollOptions: {
          click : true,
          // disableMouse: false,
          // disableTouch: false //鼠标无法滚动，只支持touch
        },
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '" style="margin-right: 5px;"></span>';  //增加style控制swiper分页器的bullet的间隔
            }, 
            bulletActiveClass: 'my-swiper-bullet-active', //修改分页器bullet的active样式
          },    
          loop : true,
          autoplay:{
            delay: 3000,   //3秒切换一次
          },   
        },
        
        swiperbanners:[],
        recommends: [],
        featureview: {},
        goods: []
      }
    },
    methods: {
      categroyIconBtn () {
        this.$router.push('/category')
      },
      goLogin( ) {
        this.$router.push('/home')
      },
      goProfile () {
        this.$router.push('/prefile')
      },
      goSearch () {
        console.log('SERACH');
      },
      tabClick (index) {
        switch (index) {
          case 0:
            this.currentType = 'like'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      }
    },
    created () {
      //实际情况回调函数应该在created后异步请求数据再初始化
      this.swiperbanners = [
        { link : "",image : "http://192.168.1.100/danmall/view/homeimg/rollimg1.jpg" },
        { link : "",image : "http://192.168.1.100/danmall/view/homeimg/rollimg2.jpg" },
        { link : "",image : "http://192.168.1.100/danmall/view/homeimg/rollimg3.jpg" },
        { link : "",image : "http://192.168.1.100/danmall/view/homeimg/rollimg4.jpg" },
        { link : "",image : "http://192.168.1.100/danmall/view/homeimg/rollimg5.jpg" },
        { link : "",image : "http://192.168.1.100/danmall/view/homeimg/rollimg6.jpg" },
      ];
      this.recommends = [
        { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend1.webp",title: "Dan超市" },
        { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend2.webp",title: "数码电器" },
        { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend3.webp",title: "Dan服饰" },
        { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend4.webp",title: "Dan生鲜" },
        { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend5.webp",title: "领红包" },
      ];
      this.featureview = { 
        link : "",image : "http://192.168.1.100/danmall/view//homeimg/featureView.png" 
      };
      this.goods = [
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike1.webp",
          title: "FRANZLISZT 防蓝光近视眼镜框男女复古超轻圆框眼镜架变色防辐射平光手机电脑护目镜可配 黑银 单买镜框配0度防蓝光防辐射镜片丨免费配镜",
          price: "￥ 88.8",
          nums:88
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike2.webp",
          title: "兰叶源 马桶刷无死角洗厕所硅胶刷子神器挂墙的卫生间家用清洁带盖壁挂式 夹缝落地款-白色",
          price: "￥ 46",
          nums:432
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike3.webp",
          title: "兰叶源  情侣轻奢洗漱套装牙刷杯陶瓷漱口杯牙具家用五件套浴室卫生间北欧 新款杯一杯一架小盘 带金架",
          price: "￥ 146",
          nums:2
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike4.webp",
          title: "蒙牛纯甄 常温风味酸牛奶 送礼推荐 200g*24 自营礼盒装 ",
          price: "￥ 90.9",
          nums:865
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike5.webp",
          title: "天梭(TISSOT)瑞士手表  2020年俊雅系列皮带石英男士经典复古腕表T063.610.16.047.00   ",
          price: "￥ 2300",
          nums:16
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike6.webp",
          title: "女士复古轻奢小绿表文艺时尚孔雀石纹理表盘方形手表 玫壳绿面黑皮带 ",
          price: "￥ 288",
          nums:80
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike7.webp",
          title: "堡梵希 休闲短裤男士五分裤子夏季新品速干透气印花潮流薄款宽松大码沙滩运动大裤衩半截中裤 米色 XL ",
          price: "￥ 79",
          nums:2142
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike8.webp",
          title: "加多宝 加多宝250ml*6盒 凉茶夏季清爽解渴饮品",
          price: "￥ 12",
          nums:2354
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike9.webp",
          title: "漫步者 （EDIFIER） LolliPods 真无线蓝牙耳机 半入耳式耳机 音乐耳机 通用苹果华为小米手机 萝莉pods 白色",
          price: "￥ 168",
          nums:561
        },
        {
          link: "",
          image: "http://192.168.1.100/danmall/view/homeimg/goodslike10.webp",
          title: "小米路由器4A千兆版 双核CPU 双千兆 1200M双频无线速率 5G 家用智能路由器 四天线穿墙 双频合一",
          price: "￥ 1214",
          nums:1214
        },
      ]
    },
  }
</script>

<style lang="postcss">
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-header {
    background-color: #ff8198;
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  
  .home-header-icon{
    margin: 14px 0 0 15px;
    width: 20px;
    height: 18px;
    display: block;
    background: url('http://192.168.1.100/danmall/view/icon/home-header-left-icom.png');
    background-size: 100% 100%;
  }

  .header-search-box{
    margin: 9px -10px auto -15px;
    height: 28px;
    position: relative;
    background-color: #fff;
    border-radius: 1em;
  }
  .search-box-input-div{
    display: inline-block;
    width: 100%;
    border: none;
    border-radius: 15px;
    height: 30px;
    overflow: hidden;
    background: #f7f7f7;
    font-size: 12px;
    -webkit-box-align: center;
    line-height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 50px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .header-search-box input {
    border: 0;
    background: 0 0;
    font-size: 12px;
    padding-left: 5px;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    height: auto;
    margin: 0 0 0 5px;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    line-height: 16px;
  }
  .header-search-box input[type=text]:focus{
    outline: none;    
    border: 0px
  }
  .search-box-icon{
    display: block;
    width: 18px;
    height: 15px;
    background: url('http://192.168.1.100/danmall/view/icon/dmall-sprites.png') no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    margin: 8px 0 0 2px;
    position: relative;
    z-index: 1;
    float: left;
    border-right: 1px  solid ;
  }
  .home-header-logo {
    display: block;
    width: 20px;
    height: 15px;
    background: url('http://192.168.1.100/danmall/view/icon/Dmall-logo.png') no-repeat;
    background-size: 16px 13px;
    margin: 9px 2px 0 12px;
    position: relative;
    z-index: 1;
    float: left;
  }
  /* ::after 伪元素实现i标签之间的i|i */
  .home-header-logo::after{
    content: "";
    position: absolute;
    border-right: 1px solid #ddd;
    top: 0;
    left: 21px;
    height: 14px;
  }
  .home-header-login{
    padding-left: 10px;
    font-size: 14px;
  }
  .home-header-prefile{
    padding-left: 10px;
  }
  .home-header-prefile i {
    display: inline-block;
    margin: 10px 12px 12px 10px;
    width: 20px;
    height: 22px;
    background: url('http://192.168.1.100/danmall/view/icon/home-header-prefile.png') no-repeat 50%;
    background-size: 20px;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .content-scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
  .my-swiper-bullet-active{
    background-color: #da0303;
    width: 16px;
    height: 5px;
    border-radius: 35%;
    opacity:0.8
  }
  .home-swiper{
    padding: 10px 15px;
  }
  .home-swiper img  {
    border-radius: 0.6em;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 8;
  }
</style>


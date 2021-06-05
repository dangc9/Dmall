<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>Dan购物</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper"/>
    <recommend-view :recommends="recommends"/>
    <feature-view :featureview="featureview"/>
    <tab-control class="tab-control"
                   :titles="['猜你喜欢', '新款', '精选']"
                   @tabClick="tabClick"/>
    <good-list :goods="goods"/>
    <div class="test"></div>
  </div>  
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from '../../components/common/navbar/NavBar'
  import TabControl from '../../components/content/tabControl/TabControl'
  import GoodList from '../../components/content/goods/GoodsList'


    export default {
      name:"home",
      components: {

          HomeSwiper,
          RecommendView,
          FeatureView,

          NavBar,
          TabControl,
          GoodList
      },
      data(){
        return{
          banners:[
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg1.jpg" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg2.jpg" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg3.jpg" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg4.jpg" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg5.jpg" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/rollimg6.jpg" },
          ],
          recommends: [
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend1.webp",title: "Dan超市" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend2.webp",title: "数码电器" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend3.webp",title: "Dan服饰" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend4.webp",title: "Dan生鲜" },
            { link : "",image : "http://192.168.1.100/danmall/view//homeimg/recommend5.webp",title: "领红包" },
          ],
          featureview: { 
            link : "",image : "http://192.168.1.100/danmall/view//homeimg/featureView.png" 
          }, 
          currentType: 'like',
          goods: [
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
        }
      },
      methods: {
        tabClick(index) {
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
      }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 8;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .test {
    height: 60px;
  }
</style>


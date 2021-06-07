<template>
  <div>
    <nav-bar class="categroy-nav">
      <template v-slot:center>
        <div>分类查看</div>
      </template>
    </nav-bar>
    <left-tabbar :category="category"></left-tabbar>
    
  </div>
</template>

<script>
  import LeftTabbar from "../../components/common/lefttabbar/LeftTabbar"
  import NavBar from "../../components/common/navbar/NavBar"

  export default {
    name:"category",
    data(){
      return {
        category: [
          {name : "热门推荐"},
          {name : "手机数码"},
          {name : "电脑办公"},
          {name : "家用电器"},
          {name : "美妆护肤"},
          {name : "汽车生活"},
          {name : "京东超市"},
          {name : "男装"},
          {name : "男鞋"},
          {name : "女装"},
          {name : "女鞋"},
          {name : "户外运动"},
          {name : "内衣配饰"},
          {name : "酒水饮料"},
          {name : "家具家装"},
          {name : "家具出具"},
          {name : "箱包手袋"},
          {name : "钟表珠宝"},
          {name : ""},
        ]
      }
    },
    components: {
      LeftTabbar,
      NavBar
    }
  }
</script>

<style scoped>
.categroy-nav{
  background-color: #ff8198;
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>

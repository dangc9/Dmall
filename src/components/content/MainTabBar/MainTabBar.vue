<template>
  <div>
    <tab-Bar>
        <tab-bar-item path="/home"> 
          <template v-slot:img >
            <img  src="../../../assets/img/tabbar/home.png" alt="">
          </template>
          <template v-slot:imgActive>
            <img  src="~assets/img/tabbar/home_active.png" alt="">
          </template>
        </tab-bar-item>
        <tab-bar-item path="/category"> 
          <template v-slot:img >
            <img  src="~assets/img/tabbar/category.png" alt="">
          </template>
          <template v-slot:imgActive>
            <img  src="~assets/img/tabbar/category_active.png" alt="">
          </template>
        </tab-bar-item>
        <tab-bar-item path="/shopcart">
          <template v-slot:img >
            <img  src="~assets/img/tabbar/shopcart.png" alt="">
          </template>
          <template v-slot:imgActive>
            <img  src="~assets/img/tabbar/shopcart_active.png" alt="">
          </template>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <template v-slot:img >
            <img  src="~assets/img/tabbar/profile.png" alt="">
          </template>
          <template v-slot:imgActive>
            <img  src="~assets/img/tabbar/profile_active.png" alt="">
          </template>
        </tab-bar-item>
      </tab-Bar>
  </div>
</template>

<script>

// import tabBar from "~components/common/tabbar/TabBar";
import tabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: 'MainTabBar',
  components: {
    tabBar,
    TabBarItem
  },

}
</script>

<style>
</style>
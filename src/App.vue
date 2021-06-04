<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import maintabbar from "./components/content/MainTabBar/MainTabBar"

export default {
  name: 'App',
  components: {
    mainTabbar:maintabbar,
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>

<template>
  <div>
    <nav-bar class="home-nav">
        <template v-slot:center>
          <div>购物街</div>
        </template>
        
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from '../../components/common/navbar/NavBar'
    export default {
        name:"home",
        components: {
            NavBar,
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


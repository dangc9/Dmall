<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!IsActive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="imgActive"></slot>
    </div> 
  </div> 
</template>

<script>
export default {
  name: 'TabBarItem',
  computed: {
    IsActive(){
      // console.log(this.$route.path); 
      // console.log(this.path);
      // console.log(this.$route.path.indexOf(this.path) !== -1);
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  props: ["path"],
  methods: {
    itemclick(){
       this.$router.push(this.path);
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1px;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item img{
    height: 51px;
    width: 65px;
  }
</style>
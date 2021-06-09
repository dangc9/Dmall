<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import scroll from 'better-scroll'

//scroll组件封装
export default {
  name : 'scroll',
  data(){
    return {
      scroll: null,
    }
  },
  mounted () {
    // 直接用$attrs获取父组件传递的参数，测试的时候用props在mounted拿不到。
    // console.log(this.$attrs.options);
    this.scroll = new scroll(this.$refs.wrapper,this.$attrs.options)  
  },
}
</script>

<style scoped>

</style>
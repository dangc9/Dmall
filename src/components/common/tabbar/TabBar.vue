<template>
  <div id="app">
    <div id="tabbar">
      <slot/> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tabbar{
    background-color: #f6f6f6;
    display: flex;
    position: fixed;
    right: 0px;
    left: 0px;
    bottom: 0px;
    box-shadow: 0px -1px 1px rgb(100, 100,100,.2);

    z-index: 100;
  }

</style>
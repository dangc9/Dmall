<template>
  <div class="categroy-item">
    <a :href="content.link">
      <img :src="content.image" alt="">
      <span>{{content.goodstype}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name : "CategoryItem",
    props: {
      content: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.categroy-item{
  text-align: center;
}
.categroy-item img{
  width: 70px;
  height: 70px;
}
.categroy-item span{
  color: #333;
  height: 35px;
  margin-top: 2px;
  -webkit-box-pack: start;
  font-size: 12px;
  
}
</style>
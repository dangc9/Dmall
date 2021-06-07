<template>
  <div class="left-tabbar">
    <ul>
      <li v-for="(item,index) in category"  
          :key="index" 
          :class="{active : index === currentIndex,
                  aboveActive : index === currentIndex-1,
                  belowActive : index === currentIndex+1
          }"
          @click="barclick(index)">
          <!-- 模仿京东app的分类 在li标签内加一个容器,实现active右上角，右下角圆弧效果 -->
        <div>
          {{item.name}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftTabbar",
  data(){
    return{
      currentIndex:0,
    }
  },
  props: {
    category: {
      type: Array
    }
  },
  created () {
    // console.log(this.category);
  },
  methods: {
    barclick(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
.left-tabbar{
  overflow:hidden;
  /* height: 1000px; */
  margin-top:44px
}
.left-tabbar ul{
  width: 100px;
  background: #f8f8f8;
}
.left-tabbar ul .left-tabbar li {
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
  
}
.left-tabbar li {
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  text-align: center;
  position: relative;
}
.aboveActive{
  background: #fff;
}
.aboveActive div{
  background: #f8f8f8;
  border-bottom-right-radius: 15px;
}
.belowActive{
  background: #fff;
}
.belowActive div{
  background: #f8f8f8;
  border-top-right-radius: 15px;
}
.active div{
  background: #fff !important;
  border-top-left-radius:15px;
  border-bottom-left-radius:15px
}
</style>
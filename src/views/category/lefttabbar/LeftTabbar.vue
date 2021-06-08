<template>
  <div class="category">
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
    <div class="branch">
      <!-- 项目比较大的话，每个分类内容应该有一个独立组件，能个性化设计 -->
      <div v-for="(a,b) in branchList" :key="b" class="category-div">
        <h4>{{a.title}}</h4>
        <div class="category-type-div">
          <category-item v-for="(c,d) in a.content" class="category-type" :content="c" :key="d"></category-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import categoryItem from "../../../components/content/goods/CategoryItem";
  export default {

    name: "LeftTabbar",
    components: {
      categoryItem,
    },
    data(){
      return{
        currentIndex:0,
        branchList: []
      }
    },
    props: {
      category: {
        type: Array
      }
    },
    created () {
      //回调函数应该在created后异步请求分类数据
      this.branchList=[
          {
            title : "热门分类",
            content : [
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : "",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : "",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : "",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : " ",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : " ",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : " ",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : " ",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : " ",
                goodstype : "空调",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                link : " ",
                goodstype : "空调",
              },
              
            ]
          },
          {
            title : "热门品牌",
            content : [
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
              {
                image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                link : " ",
                goodstype : "华为",
              },
            ]
          }
      ]
    },
    methods: {
      barclick(index){
        this.currentIndex = index;
        
      }
    }
  }
</script>

<style scoped>
.category{
  display: flex;
}
.branch{
  flex: 1;
  margin-top:44px;
}
.category-div{
  padding: 20px 10px 10px 10px;
}
.category-div h4{
  font-size: 14px;
}
.category-type-div{
  display: flex;
  flex-flow: row wrap;
  padding: 7px 10px 0;
  overflow: hidden;
}
.category-type{
  flex: 0 0 33%
}


.left-tabbar{
  overflow:hidden;
  /* height: 1000px; */
  margin-top:44px;
  
  position: relative;
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
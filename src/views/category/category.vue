<template>
  <div>
    <nav-bar class="categroy-nav">
      <template v-slot:center>
        <div>分类查看</div>
      </template>
    </nav-bar>
    <div class="category">
      <scroll class="left-scroll" :options="leftScrollOptions">
        <div class="left-tabbar">
          <ul>
            <li v-for="(item,index) in category"  
                :key="index" 
                :class="{active : index === currentIndex,
                        aboveActive : index === currentIndex-1,
                        belowActive : index === currentIndex+1,
                        firstTab : index == 0,
                        lastTab  : index == category.length-1
                }"
                @click="barclick(index)">
                <!-- 模仿京东app的分类 在li标签内加一个容器,实现active右上角，右下角圆弧效果 -->
              <div>
                {{item.name}}
              </div>
            </li>
          </ul>
        </div>
      </scroll>
      <scroll class="right-scroll" :options='rightScrollOptions'>
        <div class="category-branch">
          <!-- 项目比较大的话，每个分类内容应该有一个独立组件，能个性化设计 -->
          <div v-for="(a,b) in activeCategoryList" :key="b" class="category-branch-div">
            <h4>{{a.title}}</h4>
            <div class="category-type-div">
              <category-item v-for="(c,d) in a.content" class="category-type" :content="c" :key="d"></category-item>
            </div>
          </div>
        </div> 
      </scroll> 
    </div>
  </div>
</template>

<script>
  // import LeftTabbar from "./lefttabbar/LeftTabbar"
  import NavBar from "../../components/common/navbar/NavBar"
  import categoryItem from "../../components/content/goods/CategoryItem";

  import scroll from "components/common/scroll/scroll"
  export default {
    name:"category",
    data(){
      return {
        category: [],         //分类内容，待created初始化
        currentIndex : 0,     //记录当前活跃tab
        // activeCategoryList : [],  
        leftScrollOptions : {
          click : true,
          bounce : false,
        },
        rightScrollOptions : {
          click : true,
        },
      }
    },
    computed: {
      activeCategoryList () {
        return this.category[this.currentIndex].branch  //返回活跃分类的分支
      }
    },
    components: {
      categoryItem,
      NavBar,
      scroll,
    },
    methods: {
      barclick(index){
        this.currentIndex = index;  
        console.log(index);
      }
    },
    created () {
      //回调函数应该在created后异步请求分类数据
      this.category = [
        {
          name : '热门推荐',
          id : 'hot',
          branch : [
            {
              title : "热门分类",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype1.jpg",
                  link : "",
                  goodstype : "空调",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype2.jpg",
                  link : "",
                  goodstype : "冰箱",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype3.png",
                  link : "",
                  goodstype : "电脑",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype5.jpg",
                  link : " ",
                  goodstype : "全面屏手机",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype6.jpg",
                  link : " ",
                  goodstype : "游戏手机",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype7.jpg",
                  link : " ",
                  goodstype : "保健品",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype8.jpg",
                  link : " ",
                  goodstype : "口罩",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype9.jpg",
                  link : " ",
                  goodstype : "驱蚊用品",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype10.jpg",
                  link : " ",
                  goodstype : "电磁炉",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype11.jpg",
                  link : " ",
                  goodstype : "电热水壶",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype12.jpg",
                  link : " ",
                  goodstype : "数据线",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype13.jpg",
                  link : " ",
                  goodstype : "图书",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype14.jpg",
                  link : " ",
                  goodstype : "美妆护肤",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype15.jpg",
                  link : " ",
                  goodstype : "除菌液",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype16.jpg",
                  link : " ",
                  goodstype : "修仙零食",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype17.jpg",
                  link : " ",
                  goodstype : "充电宝",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype18.jpg",
                  link : " ",
                  goodstype : "体温计",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype19.jpg",
                  link : " ",
                  goodstype : "投影机",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype20.jpg",
                  link : " ",
                  goodstype : "游戏机",
                },
              ]
            },
          ]
        },
        {
          name : '手机数码',
          id : 'hot',
          branch : [
            {
              title : "热门品牌",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype21.png",
                  link : " ",
                  goodstype : "小米",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype22.jpg",
                  link : " ",
                  goodstype : "华为",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype23.png",
                  link : " ",
                  goodstype : "vivio",
                },
              ]
            },
            {
              title : "手机通讯",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype5.jpg",
                  link : " ",
                  goodstype : "全面屏手机",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype6.jpg",
                  link : " ",
                  goodstype : "游戏手机",
                },
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype24.jpg",
                  link : " ",
                  goodstype : "拍照手机",
                },
              ]
            }
          ]
        },
        {
          name : '电脑办公',
          id : 'hot',
          branch : [
             {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '家用电器',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '美妆护肤',
          id : 'hot',
          branch : [
            
          ]
        },
        {
          name : '汽车生活',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '京东超市',
          id : 'hot',
          branch : [
            
          ]
        },
        {
          name : '男装',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '男鞋',
          id : 'hot',
          branch : [
            
          ]
        },
        {
          name : '女装',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '女鞋',
          id : 'hot',
          branch : []
        },
        {
          name : '户外运动',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '内衣配饰',
          id : 'hot',
          branch : []
        },
        {
          name : '酒水饮料',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '家具家装',
          id : 'hot',
          branch : []
        },
        {
          name : '家具出具',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
        {
          name : '箱包手袋',
          id : 'hot',
          branch : []
        },
        {
          name : '钟表珠宝',
          id : 'hot',
          branch : [
            {
              title : "占位",
              content : [
                {
                  image : "http://192.168.1.100/danmall/view/categroy/goodstype4.png",
                  link : " ",
                  goodstype : "手机",
                }
              ]
            },
          ]
        },
      ];
    },
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
.category{
  display: flex;
}
.category-branch{
  flex: 1;
}
.category-branch-div{
  padding: 20px 10px 10px 10px;
}
.category-branch-div h4{
  font-size: 14px;
}
.category-type-div{
  display: flex;
  flex-flow: row wrap;
  padding: 7px 10px 0;
  overflow: hidden;
}
.category-type{
  padding-bottom: 20px;
  flex: 0 0 33%
}

.left-scroll{
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.right-scroll{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 100px;
  overflow: hidden;
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
.belowActive {
  background: #fff;
}
.belowActive div {
  background: #f8f8f8;
  border-top-right-radius: 15px;
}
.active div {
  background: #fff !important;
  border-top-left-radius:15px;
  border-bottom-left-radius:15px
}
.firstTab div {
  border-top-left-radius:0px !important; 
}
.lastTab div {
  border-bottom-left-radius: 0px !important;
}
</style>

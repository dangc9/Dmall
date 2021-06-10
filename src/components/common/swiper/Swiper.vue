<template>
  <div>
    <swiper ref="mySwiper"  class="swiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in content" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-slide> 
    </swiper>
    <template :v-slot="pagination">
      <div class="swiper-pagination" ></div> 
    </template>
    <!-- 用margin调整pagination的位置后,给个高度10px的div占位 -->
    <div style="height: 10px"></div>  
  </div>
</template>

<script>

//swiper版本5.4.5
//vue-awesome-swiper版本4.1.1
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'Homeswiper',
  data () {
    return {
      swiperOptions: this.options
    }
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
}
</script>

<style lang="postcss">
  .swiper {
    overflow: hidden;
    width: 100%;
  }
  .swiper img {
    width: 100%;
  }
  .swiper-pagination {
    position: relative;
    margin-top: -30px; 
  }
</style>
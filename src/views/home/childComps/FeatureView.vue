<template>
  <div class="feature">
    <a :href="featureview.link">
      <img :src="featureview.image" alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    props: {
      featureview: {
        type: Object,
        default() {
          return Object
        }
      }
    }
  }
</script>

<style scoped>
  .feature img {
    padding: 10px 10px 0 20px;
    width: 100%;
  }
</style>

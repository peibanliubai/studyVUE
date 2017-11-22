<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'],//this.swiperSliders
    data() {
      return {
        swiperOption: {
          autoplay: 2000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
          loop:true
        },

      }
    }
  }
</script>
<style scoped>
  img{
    width:100%;
  }
</style>

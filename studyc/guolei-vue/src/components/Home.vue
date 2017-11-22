<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="sliders"></Swiper>
     <div class="container">
       <h3>热门图书</h3>
       <ul>
         <li v-for="hot in hotBooks">
           <img :src="hot.bookCover">
           <b>{{hot.bookName}}</b>
           <span>{{hot.bookPrice}}</span>
         </li>
       </ul>
     </div>
    </div>
  </div>
</template>
<script>
  //1.引入组件 2.注册组件 3.使用组件
  import MHeader from "../base/MHeader.vue";
  import Swiper from '../base/Swiper.vue'
  import {getSliders,getHotBook} from'../api'

  export default {
    created(){
      this.getSlider();//获取轮播图
      this.getHot();//获取图书
    },
    data(){
      return {sliders: [],hotBooks:[]}
    },
    methods: {
        async getHot(){
          this.hotBooks=await getHotBook();

        },
      async  getSlider(){
        //给data起个别名 对象中的属性名必须和得到的结果一致
        this.sliders= await getSliders();
        //将获取的数据放到sliders中

      }
    },
    computed: {},
    components: {
      MHeader,
      Swiper
    }
  }
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none
  }

  .content {
    position: fixed;
    width: 100%;
    bottom: 50px;
    top: 40px;
    overflow: auto
  }
</style>
<style scoped lang="less">
  .container{
    width: 90%;
    margin:0 auto;
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 20px;
      li{
        width:33.33333333%;
        text-align: center;
        margin: 5px 0;
        b{
          font-size: 12px;
        color:#3c3c3c;
        }
        span{
          font-size: 10px;
          color: darkred;
        }
        img{width:100%;
        margin-bottom: 5px;
        }
      }
    }
  }
</style>

<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <img :src="book.bookCover" alt="">
      <ul>
        <li>
          <label for="bookName">书名:</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">信息:</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">价格:</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <button @click="update">确认修改</button>
        </li>
      </ul>

  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import {findOneBook,updateBook} from '../api'
  export default {
    data(){
      return {book: {}}
    },
    watch:{
      $route(){//只要路径变化 重新获取数据
        this.getData()
      }
    },
    created(){//页面一加载 需要根据id 发送请求
      this.getData();
    },
    methods: {
      async getData(){
        this.book = await findOneBook(this.bid);
        //如果是空对象 需要跳转回列表页
        Object.keys(this.book).length>0?void 0:this.$router.push('/list')
      },
      async update(){//点击修改图书信息
         await updateBook(this.bid,this.book);
        this.$router.push('/list')
      }
     },
    computed: {
      bid(){
        return this.$route.params.bid;//将路径id映射到bid上
      }
    },
    components: {MHeader}
  }
</script>
<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;
    img{
      margin-top: 20%;
    }
    ul{
      margin-top: 5%;
      li{
        margin-bottom: 10%;
        input{
          width: 200px;
          height: 30px;

        }
        button{
          width: 70px;
          height: 35px;
          background: #7ebaff;
          border-radius: 10px;
          outline:none;
          color: #fff;
          border: none;
        }
      }
    }
  }

</style>

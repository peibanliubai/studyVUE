<template>
  <div>
    <MHeader :back="true">列表页</MHeader>
    <div class="content">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img :src="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import {getBooks, removeBook} from '../api'
  import MHeader from '../base/MHeader.vue'
  export default {
    data(){
      return {books: []}
    },
    created(){
      this.getData();
    },
    methods: {
      async getData(){
        this.books = await getBooks();
      },
      async remove(id){
        await removeBook(id);//删除某一项
        //删除前端数据
        this.books = this.books.filter(item => item.bookId !== id)
      }
    },
    computed: {},
    components: {MHeader}
  }
</script>
<style scoped lang="less">
  .content {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 20px;
      li {
        width: 100%;
        margin-bottom: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #cccccc;
        h4 {
          text-align: left;
          margin-top: 10px;
          font-size: 16px;
          margin-bottom: 10px;
        }
        p {
          font-size: 15px;
          text-align: left;
          color: #000;
          margin-bottom: 10px
        }
        b {
          float: left;
          font-size: 12px;
          color: red;
        }
        button {
          width: 50px;
          height: 25px;
          border: none;
          border-radius: 10px;
          float: right;
          margin: 10px;
          color: #fff;
          background: #ff2417;
          outline: none;
        }
        img {
          width: 32%;
          float: left;
        }
      }
    }
  }
</style>

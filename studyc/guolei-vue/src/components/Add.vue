<template>
    <div class="add">
      <MHeader :back="true">添加</MHeader>
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
          <label for="bookCover">封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="add">添加</button>
        </li>
      </ul>
    </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue'
  import {addBook} from '../api'
    export default {
        data(){
            return {book:{}}
        },
        created(){

        },
        methods: {
          async add(){
                await addBook(this.book);
                this.$router.push('/list')
            }
        },
        computed: {},
        components: {MHeader}
    }
</script>
<style scoped lang="less">
  .add {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: 100;

    ul{
      margin-top: 25%;
      li{
        margin-bottom: 15%;
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

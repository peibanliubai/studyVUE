<template>
    <div class="footer">
      <router-link to="/home"><i class="iconfont icon-shouye"></i>
        <span>首页</span>
</router-link>
      <router-link to="/list"><i class="iconfont icon-liebiaoyemian"></i>
        <span>列表</span>
</router-link>
      <router-link to="/collect"><i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
</router-link>
      <router-link to="/add"><i class="iconfont icon-add"></i>
        <span>添加</span>
</router-link>
    </div>
</template>
<!--display:flex
flex-direction:row/column
justify-content:center  竖向居中
align-item:center  横向居中
flex:1 每份占1
/home/a
router-link-exact-active  router-link-active

-->
<style scoped lang="less">

.footer{
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  height: 50px;
  display: flex;
  border-top:1px solid #ccc ;
  background: #fff;
  a{
    display: flex;
    color: #b92c28;
    flex-direction: column;
    flex:1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active{color:#28a4c9
  };
}
</style>

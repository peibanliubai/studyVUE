/*
let fs=require("fs");
fs.stat("/",function (err,stats) {
  if(err){/!*文件不存在*!/}
    console.log(stats.isFile());//判断是不是文件
    console.log(stats.isDirectory());//判断是不是文件夹
});
*/
let fs=require("fs");
function makep(url,cb) {//插入排序
let urlArr=url.split("/");
let index=0;
function make(p) {
    if(urlArr.length<index) return cb();//终止循环
    //在创建之前看是否存在 如果不存在创建,存在继续下一次创建
   fs.stat(p,function (err,stats) {
       if(err){
           fs.mkdir(p,function (err) {
               if(err)return console.log(err);
               make(urlArr.slice(0,++index+1).join("/"));
           })
       }else{//如果存在跳到下一次创建
           make(urlArr.slice(0,++index+1).join("/"));
       }
   })
}
make(urlArr[index])
}
makep('a/b/c/d',function (err) {

});


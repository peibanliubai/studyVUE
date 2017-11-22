let http=require("http");//引用http模块
let port=3000;
let fs=require("fs");
http.createServer((req,res) =>{
    res.setHeader("Content-type","text/html","charset=utf-8");
    fs.createReadStream("index.html").pipe(res);
   // fs.readFile("index.html",function (err, data) {//监听函数,当请求到来时会执行
   //     res.end(data)
   // });


}).listen(port,()=>{console.log(`服务器已经启动在${port}上`)});


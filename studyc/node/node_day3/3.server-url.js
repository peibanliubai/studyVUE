let http=require("http");//引用http模块
let port=3000;
let fs=require("fs");
let path=require("path");
let url=require("url");//把一个路径解析成一个对象
http.createServer((req,res) =>{
    let {pathname,query}=url.parse(req.url,true);//true的作用是将query转化成一个对象
    fs.stat("."+pathname,function (err,stats) {
        if(err){
            res.statusCode=404;//找不到就是404
            res.end(`${pathname} not found`)
        }else if(stats.isFile()){//是不是文件
            //没有写头!!!
            fs.createReadStream("."+pathname).pipe(res)
        }else if(stats.isDirectory()){//是不是文件夹,是默认查找index.html
            //  ./也是一个文件夹,获取到当前的路径和我的index.html进行拼接去读取,这个文件也有可能不存在
            res.setHeader("Content-type","text/html;charset=utf-8");
            let p=path.join("."+pathname,"./index.html");//拼出来要读取的内容
            fs.createReadStream(p).pipe(res);
        }
    })
    //根据不同的路径返回不同的内容
    //如果访问的是/显示主页html
    //如果访问的是文件 将文件读取返回
    //如果是文件夹 默认去找html文件
    //文件不存在返回404



}).listen(port,()=>{console.log(`服务器已经启动在${port}上`)});


//用来返回静态页面的; 终极版

let http=require("http");
let port=3000;
let fs=require("fs");
let path=require("path");
let url=require("url");
let mime=require("mime");//实现类型转化

http.createServer((req,res) =>{
    let {pathname,query}=url.parse(req.url,true);

    // /clock
    if(pathname==="/clock"){
        let data=new Date();
        res.end(data.toLocaleString());
        return;
    }
    fs.stat("."+pathname,function (err,stats) {
        if(err){
            res.statusCode=404;//找不到就是404
            res.end(`${pathname} not found`)
        }else if(stats.isFile()){//是不是文件
            res.setHeader("Content-type",mime.getType(pathname)+';charset=utf-8');
            fs.createReadStream("."+pathname).pipe(res)
        }else if(stats.isDirectory()){
            res.setHeader("Content-type","text/html;charset=utf-8");
            let p=path.join("."+pathname,"./index.html");
            fs.createReadStream(p).pipe(res);
        }
    })

}).listen(port,()=>{console.log(`服务器已经启动在${port}上`)});






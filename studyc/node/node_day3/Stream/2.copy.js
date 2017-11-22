//300b 读取4b 5次 读取第一次就开始写,只能写1b ,暂停读取,当drain之后恢复读取;
// 缓存的大小取决于传递给流构造函数的 highWaterMark 选项。 对于普通的流， highWaterMark 选项指定了总共的字节数。对于工作在对象模式的流， highWaterMark 指定了对象的总数。
let fs=require("fs");
function pipe(source,target) {
    let rs=fs.createReadStream(source,{highWaterMark:4});
    let ws=fs.createWriteStream(target,{highWaterMark:1});
    //开始可读流
    rs.on("data",function (chunk) {
        if(ws.write(chunk)===false){//可写流就不能再写入了
            rs.pause();//暂停读取
        }
    });
    ws.on("drain",function () {
        console.log("哦了");
        rs.resume();//当前读入的内容都写入文件中 调用继续读取
    });
    rs.on("end",function () {//当读取完毕 强制将内存中未写完的内容写到文件中
        ws.end();
    })
}
pipe("1.txt","2.txt");

//通过流可以实现分段 但是不关心文件中的内容,内容较到时候可用
//readFile 可以看见文件中的具体内容,可以进行替换写入
let fs=require("fs");
// 可写流 默认占用16384=16k
let ws=fs.createWriteStream("./1.txt",{highWaterWork:1});
// 可写流有两个方法 write end
var flag=ws.write(1+"");//可写流写数据时候必须是字符串类型,或者buffer类型
ws.end("吃饱了");
//end必须最后写,调用后,write不能再写
//end调用后会把所有write中的内容以最快的速度写入文件
ws.on("drain",function () {//当读入的文件 全部写入后 就恢复读取
    console.log("吃完了");
});
//300k 读取64k 5次 读取第一次就开始写,只能写16k ,暂停读取,当drain之后恢复读取;

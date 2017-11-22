//300b 读取4b 5次 读取第一次就开始写,只能写1b ,暂停读取,当drain之后恢复读取;
//简写2.copy.js文件
let fs=require("fs");
function copy(source,target) {
    let rs=fs.createReadStream(source,{highWaterMark:4});
    let ws=fs.createWriteStream(target,{highWaterMark:1});
    rs.pipe(ws);//可读流.pipe(可写流),会自动调用write和end方法
}
copy("1.txt","2.txt");


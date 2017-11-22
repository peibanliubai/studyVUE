let path=require("path");
//拼一个路径出来,加..就没有b了
console.log(path.join(__dirname, "./b", ".."));

//解析一个绝对路径
console.log(path.resolve("./a", "./b"));



//看一下系统的分隔符
console.log(path.delimiter);//环境变量分隔符
console.log(path.win32.delimiter);
console.log(path.posix.sep);

//流是基于事件的
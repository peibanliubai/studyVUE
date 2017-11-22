//1.回调地狱  链式写法then
//2.解决合并异步的结果 promise.all,如果都成功才成功,有一个失败就失败了
//Promise.race();谁快以谁为准,得到结果就结束了
let fs=require("fs");
let {promisify}=require("util");
let read=promisify(fs.readFile());
Promise.race([read("x.txt","utf8"),read("y.txt","utf8")]).then(data=>{
    console.log(data);},err=>{
    console.log(err);
});
//Promise类上拥有两个方法可以把结果保证成promise对象 reject resolve(上来就失败或者成功)
Promise.reject("123").then(function (data) {
    return data+456
}).then(function (data) {
    console.log(data);
}).catch(err=>{
    console.log(err)});

//如果程序 只开始执行一次 可以同步。readFile会把内容读到内存中，用这种方式会导致淹没可用内存。
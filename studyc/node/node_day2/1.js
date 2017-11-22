/*
let sum=0;
for (let i=0;i<=8;i++){
    sum+=Math.pow(2,i-1)
}
console.log(sum);*/

//1.通过长度创建
var buffer=Buffer.alloc(100);
console.log(buffer);
//这种方法比较耗性能
var buffer=Buffer.from([17,18,19]);
//会自动把10进制转化为16进制
console.log(buffer);
var buffer=Buffer.from('珠峰培训');
console.log(buffer.length);
//转化成buffer后长度为buffer的长度
console.log(buffer.toString());


//1).fill方法
var buffer=Buffer.allocUnsafe(100);
buffer.fill(0);
console.log(buffer);

//2).slice方法 (截取 ,克隆:深克隆(递归循环,parse(stringify)函数除外),浅克隆(slice,assign,{...{},...{}}))
//深拷贝 就是两个人长得一样但是毫无关系,
//浅拷贝 就是两个对象中存放的空间是一样的
var obj = {name:{name:'zfpx'}};
var newObj = JSON.parse(JSON.stringify(obj));
/*
var obj={name:'zfpx'};
var arr=[obj,2,3];
var newArr=arr.slice(0);
arr[0].name="hello";
console.log(newArr);
*/

/*

var obj = {name:{name:'zfpx'}};
var newObj = Object.assign({},obj);
obj.name.name = 'hello';
console.log(newObj);
*/

var buffer=Buffer.from([1,2,3]);
var newBuffer=buffer.slice(0,1);
//拷贝出来存放的是内存地址空间
newBuffer[0]=100;
console.log(buffer);

let buf1=Buffer.from("gl");
let buf2=Buffer.from("哈哈");
let buf=Buffer.allocUnsafe(1);
Buffer.MyConcat=function (list,totallength) {
    totallength=totallength||list.reduce((prev,next)=>prev+next.length,0);
    let buffer=Buffer.alloc(totallength);
    let offset=0;
    list.forEach(item=>{
        if(!Buffer.isBuffer(item)){throw new Error("no buffer")}
        item.copy(buffer,offset);
        offset+=item.length;
    });

       return buffer.slice(0,offset)
};
console.log(Buffer.MyConcat([buf1, buf2, buf1]).toString());




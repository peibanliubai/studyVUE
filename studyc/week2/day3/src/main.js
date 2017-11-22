let a=require('./a.js');
import xx from './b.js';
console.log(a);
console.log(xx);
let q=b=>c=>d=>b+c+d;
q(1,2,3);
let obj={school:'zfpx'};
let obj1={age:8};
let newObj={...obj,...obj1};//es7语法
console.log(newObj);

import './index.css'
import './style.less'
//在js中引入图片需要import,或者写一个线上路径
import page from './1.png'
console.log(page);//page就是打包后的图片路径
let img=new Image();
img.src=page;//写了一个字符串,webpack不会进行查找
document.body.appendChild(img);

import Vue from 'vue';
import App from './App.vue'
//这样直接引用vue 引用并不是vue.js 引用的是vue的runtime
//vue=compiler+runtime(compiler可以编译模板)
//compiler有6k
new Vue({
    //template:'<div>hello</div>'
    //render函数的作用就是将虚拟dom渲染成真实的dom
    //createElement返回的是虚拟的dom
    render:(h)=>h(App)
}).$mount('#app');
/*
render:function (createElement) {
    return createElement('h1',['hello',createElement('span','一则头条')])
}*/

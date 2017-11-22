//如果是第三方模块不需要加./,如果是文件模块必须加./
//在另一个文件中将内容结构出来即可使用
//import拥有声明功能,可以变量提升
//import最好放在页面顶部
/*
import {str,str2} from './a.js';
console.log(str, str2);
*/
//*as匹配所有
import *as b from './a.js';
console.log(b.str, b.str2);
b.a();

//xx是default后的结果
import xx from './b.js'
console.log(xx);
//webpack必须采用commomjs写法
let path=require('path');//专门处理路径用的,以当前路径解析出一个绝对路径
console.log(path.resolve('./dist'));
 let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    //打包的入口文件,webpack会自动查找相关的依赖进行打包
//多个可以用对象 entry:{main:'./src/main.js',main1:'./src/main1.js'}
    output:{
        filename:'bundle.js',//打包后的名字,自己起
        //多个 filename:'[name].js'
        path:path.resolve('./dist')//必须是一个绝对路径
    },
    //模块的解析规则
    //- js 匹配所有的js 用babel-loader转译 排除掉node_module
    module:{
        //use时候从由往左
        //转化base64只在8192字节下转化,其他情况下输出图片
        rules:[{test:/\.js$/,use:'babel-loader',exclude:/node_module/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[new HtmlWebpackPlugin({//自动插入到dist目录中
        template:'./src/index.html',//使用的模板
        //filename:'login.html'//产出的文件名字
    })]
};
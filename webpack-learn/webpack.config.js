const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //插件，能自定义打包index.html文件
const MinCssExtractPlugin = require('mini-css-extract-plugin') //插件仅webpack5可使用，将css文件单独抽离成一个文件 
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //插件 压缩css代码


const { Template } = require('webpack')
//webpack 配置文件，由于运行在node.js 因此可以通过模块导出
module.exports = {
  entry: './src/index.js',  //入口文件

  output: {
    filename: 'bundle.js',  //指定输出文件文件名
    path: path.resolve(__dirname, './dist'),  //导出文件所在位置,(注意需要设置为绝对路径)
    clean: true,  //将上一次打包的文件删除
    assetModuleFilename: 'images/[contenthash][ext]',  //图片资源输出
  },

  mode: 'development',

  devtool: 'inline-source-map',  //调试使用，让打包的js文件正常显示 

  //插件 
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',  //指定输出文件文件名
      inject: 'body',  //在body里生成script标签
    }),  //自动生成index.html

    new MinCssExtractPlugin({
      filename: 'styles/[contenthash].css',  //指定输出文件文件名
    })
  ],

  //模块(一共有四种类型)1.asset/resourse  2.asset/inline
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',  //导出文件url
        generator: {
          filename: 'images/[contenthash][ext]'
        }   //优先级高于output/assetModuleFilename
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',  //导出文件data url base64
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.jpg$/,
        type: 'asset',  //自动选择，默认小于4k选择inline，否则asset/resourse
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024  //默认是4 * 1024,大于 4 * 1024 * 1024生成 base64文件
          },
        },
      },
      {
        test: /\.(css|less)$/,
        /* use: ['style-loader', 'css-loader', 'less-loader'],  //顺序不可改变，从后往前加载loader，最后用一个style标签存放 */
        use: [MinCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      }, //css-loader 需要配合 style。loader使用
      {
        //配置babel,需要安装三个包npm install babel-loader @babel/core @babel/preset-env -D
        //npm install @babel/runtime -D
        //需要安装插件 npm install @babel/plugin-transform-runtime -D,解决 regeneratorRuntime环境配置，该环境是babel用于解析async await语法
        test: /\.js$/,
        exclude: /node_modules/,  //排除node_modules中的js文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                '@babel/plugin-transform-runtime'
              ]
            ],
          },
        }
      },
    ]
  },

  // optimiziton: {
  //   minimizer: [
  //     new CssMinimizerPlugin()
  //   ]
  // }, //优化项
}
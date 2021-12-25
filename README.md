## vue-pc-template
- 基于vue-cli3.0+webpack 4 + element ui + sass + fonts适配方案+axios封装，构建管理端模板脚手架
- node版本 v10.16.3  npm版本 v6.9.0

### 使用项目
- ``npm install `` 下载环境所需依赖
- ``npm run serve``启动本地环境
- ``npm run build``打包到生产环境

### 介绍
- vuecli3.0      
- 多环境开发      
- axios封装         
- rem适配方案        
- babel低版本浏览器兼容
- 环境发布打包脚本
- sass编写样式

### api文件夹
- 存放接口配置

### assets资源文件夹
- images文件夹存放图片资源
- css文件夹预存了一些commoncss，和一些scss配置
- fonts字体图标库，自行引入修改
  ```
    // 多行隐藏
    @mixin textoverflow($clamp:1) {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: $clamp;
      /*! autoprefixer: ignore next */
      -webkit-box-orient: vertical;
    }

    使用方法：@include

    .test{
      width: 100px;
      height: 50px;
      background: #ff5500;
      @include textoverflow(3)
    } 
  ```


### 跨域配置
- 在vue.config.js文件里去配置跨域
- 开发的时候需要打开proxy，修改config里面env.development.js文件里的baseApi
  ```
    proxy: {
        //配置跨域
        '/api': {
            target: "http://xxx.xxx.xx.xxx",
            //是否允许跨域
            changOrigin:true,
            //代理配置正则，接口有api的时候会去掉api
            pathRewrite:{
                '^/api':'/'
            }
        }
      }
  ```

### utils
- 公共组件，插件方法库
- 封装了localStorage等方法
  - 使用：this.$methods.getSessionStorage()


### css命名规范
- 请使用BEM方式命名css的class
- B：Block ； E：Element ；M：Modifiers 修饰符
```
  //每个区块的命名不一样，如何定义
  //使用连字符 -
  .some-class
  .some-id

  //每个区块的设计不一样，如何定义
  //使用两条下划线后加上元素名称 __
  .some-class__header
  .some-class__footer

  //每个区块的修饰不一样，如何定义
  //使用两条连字符后加上元素名 --
  .some-class--red
  .some-class--bule

  //每个区块内不同的设计的修饰，如何定义
  .some-class__header--small
  .some-class__header--big
```




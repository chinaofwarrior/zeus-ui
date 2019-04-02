# Zeus 宙斯后台权限系统
基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案。


## Install
```bush
// install dependencies
npm install
```
## Run
### Development
```bush
npm run dev
```
### Production(Build)
```bush
npm run build:prod
```

## 简介
&emsp;&emsp;Zeus 宙斯后台系统是基于Vue.js，搭配Element UI组件库形成的一套后台集成解决方案，由公牛开源组织开发维护。

该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。

## 功能

- 登录/登出
- 权限管理
    - 用户管理
    - 角色管理
    - 部门管理
    - 项目管理
    - 菜单管理
- 多语言切换
- 换肤
- 收缩侧边栏
- tag标签导航
- 面包屑导航
- 全屏/退出全屏
- 锁屏 x
- 个人中心 x

## 文件结构
```shell
.
├── build  项目构建配置
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    ├── api  AJAX请求
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  业务组件
    ├── config  项目运行配置
    ├── directive  自定义指令
    ├── libs  封装工具函数
    ├── locale  多语言文件
    ├── mock  mock模拟数据
    ├── router  路由配置
    ├── store  Vuex配置
    ├── view  页面文件
    └── tests  测试相关
```
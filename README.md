# ums

> 基于 vue-cli3 用户管理系统

## 技术栈

vuejs,
vue-router,
vue-cli,
vuex,
axios,
webpack,
Es6,

## 演示

- 注册
![ums](/screenshot/注册.gif)

- 登录
![ums](/screenshot/登录.gif)

- 增删地址
![ums](/screenshot/增删地址.gif)

## 特性

- 路由懒加载
- 路由拦截
- token+axios请求验证
- 支持本地开发热更新
- Base64 图片，雪碧图
- 内置Sass开发环境
- 打包优化
- 请求封装+api集成
- 只需关注页面逻辑
- ...

## 目录结构

```bash
|__ public                                    # 本地代理
    |__ favicon.ico                             # 图标
    |__ index.html                              # 主页面
|__ src
    |__ App.vue                               # 入口文件
    |__ main.js                               # 入口js
    |__ components                            # 组件
      |__ Loading.vue                           # 加载层
    |__ page
      |__ Home                                # 首页
        |__ Home.vue
      |__ Login                               # 登录页
        |__ Login.vue
      |__ Register                            # 注册页
        |__ Register.vue
      |__ User                              
        |__ Address  
            |__ Register.vue                  # 增加地址
            |__ Register.vue                  # 删除地址
    |__ router                                # router
      |__ index.js                              # 路由
    |__ store                                 # vuex
      |__ index.js                              # 全局
      |__ modules                               # 模块
        |__ app.js                                  # 加载
        |__ user.js                                 # 用户
      |__ mutations-type.js                     # mutations 常量
    |__ fetch                                 # 请求
      |__ api.js                                # api接口类
      |__ request.js                            # axios请求封装
|__ assets                                    # 静态资源
    |__ font                                    # 字体
    |__ images                                  # 图片
    |__ sass                                    # 样式
```

## 构建
``` bash

# 安装依赖
npm install

# 开发
npm run dev

# 生产
npm run build

# 代码检查
npm run lint
```

## 打包配置项

脚手架的基本配置为根目录 `vue.config.js` 文件。可根据自身项目配置修改。

### 配置参考

>详情查看vue-cli3 [配置参考](https://cli.vuejs.org/zh/config/).

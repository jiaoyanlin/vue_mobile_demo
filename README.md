> [项目源码](https://github.com/jiaoyanlin/vue_mobile_demo),求赞～～～


#### vue-cli安装步骤及项目初始化：

1、安装node；

2、安装vue-cli：npm install -g vue-cli

建议先安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org

然后用cnpm install -g vue-cli安装，这样速度快点

安装成功后可以输入vue验证是否已经安装成功

3、初始化项目(项目名称可自定义，如my-project-vue)：vue init webpack my-project-vue

初始化过程中会跳出几个选项，按回车默认即可，最后一步使用的npm安装依赖太慢了，直接使用cnpm代替

4、进入项目目录并安装依赖：cd 如my-project-vue && cnpm install

5、启动项目：npm start

指定端口号启动项目：

Mac/Linux：PORT=8033 npm run dev

windows：set PORT=4000 && npm run dev

> 详细的过程可以网上直接搜索，比如 https://blog.csdn.net/wulala_hei/article/details/80488674


#### 其他准备工作：

1、安装调试工具vue.js devtools：可以在chrome应用商店直接搜索并安装，然后重启浏览器使用（需要根据情况将该插件中详细信息中的某些选项打开），或者参考此篇网上搜索到的博文进行安装 https://www.bbsmax.com/A/gAJGay2gdZ/

2、eslint规则修改：可参考 https://segmentfault.com/a/1190000008742240

修改.eslintrc.js文件，在rules中加入：

```
//空格标准这里是2个空格为标准 可以写4,tab
indent: ['error', 4],
// 关闭语句强制分号结尾
"semi": [0],
// 函数定义时括号前面要不要有空格
"space-before-function-paren": [0, "always"],
```

3、引入sass:

```
npm install --save-dev sass-loader
npm install --save-dev node-sass
```

使用：sass语法不使用大括号和分号

```
<style lang="sass">或<style lang="scss">或@import "./scss/eg.scss";
```

4、引入vuex：可参考 https://segmentfault.com/a/1190000012015742

```
npm install vuex --save
```

在src目录下新建store文件夹及相关文件：

    ├── index.js          # 组装模块并导出store
    ├── state.js          # 跟级别的 state
    ├── getters.js        # 跟级别的 getter
    ├── mutation-types.js # 根级别的mutations名称（官方推荐mutions方法名使用大写）
    ├── mutations.js      # 根级别的 mutation
    ├── actions.js        # 根级别的 action
    └── modules
        ├── m1.js         # 模块1
        └── m2.js         # 模块2
        
actions.js一般用于处理异步操作、多个commit；

具体代码可参考这个提交记录： https://github.com/jiaoyanlin/vue_mobile_demo/commit/c838b7a230450d7e6fd4a261692d35be94116b54

5、引入antd vue: https://tangjinzhou.gitee.io/ant-design-vue/docs/vue/introduce-cn/

```
npm install ant-design-vue --save
npm install babel-plugin-import --save
```

具体配置参考官方文档：https://tangjinzhou.gitee.io/ant-design-vue/docs/vue/use-with-vue-cli-cn ，我是使用按需加载形式引入

6、为ant定制主题：

参考官方文档：https://tangjinzhou.gitee.io/ant-design-vue/docs/vue/customize-theme-cn/ ，我是使用“在 vue cli 2中定制主题”

注意点：

（1）如果未引入less，则需要为项目引入less相关依赖

```
cnpm install less less-loader --save
```

（2）如果你使用 babel-plugin-import 的 style 配置来引入样式，需要将配置值从 'css' 改为 true，这样会引入 less 文件。

（3）可参考[这次commit](https://github.com/jiaoyanlin/vue_mobile_demo/commit/9550cec8767fafe84d0aec5a24e922b7f76e881d)，项目重启后生效。

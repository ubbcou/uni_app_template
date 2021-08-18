# UniApp 小程序

## 一 目录结构、文件介绍

``` any
- src/
  -- pages/ -------- 小程序页面
     --- /main ----- 主包
     --- /sub ------ 子包1
     --- /extra ---- 子包2
  -- static/ ------- 静态文件
  -- utils/ -------- 通用函数方法
  -- filters/ ------ vue过滤器
  -- plugins/ ------ vue插件，如 $cdn('/logo.png') 获取cdn图片
  -- global.css ---- 全局样式，css变量、常用class
```

## 二 使用注意

1. 页面路径：页面文件(夹)请使用 `-` 命名
2. 组件：组件文件(夹)请使用大驼峰命名
3. 页面视图组件：请在页面文件夹下新建 `components` 文件夹，在里面声明页面视图组件
4. 本地存储：请使用 `utils/local/` 封装的方法
5. CDN图片：在 JS 代码中请使用 `$cdn('logo.png')`
6. CSS颜色：请使用 `global.css` 中声明的 CSS 变量
7. vue模板中使用颜色：参考 6

## 使用提醒

### 本地存储

变量命名 `loc...`

```
import { locToken } from '@/utils/local'

locToken.get()

locToken.set('newValue')
```
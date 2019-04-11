# 后端接口：10000
# 数据库名：reactProject

## 关于首页导航栏对应酒品的接口
    请求类型：get
    请求地址：/navShop
    参数：type=choiceness/white/grape/sake/yellow/wine.....(精选/白酒/葡萄酒/清酒洋酒/黄酒啤酒/年份老酒)
          page=页码
          qty=数量
    成功的返回：
    {
        code:1,
        msg:type,
        page,
        qty,
        totalLength:查询酒品类型的总长度，
        data:{
            data:[数据]
        }
    }
    失败的返回：
    {
        code:0,
        msg:"查询"+type+"失败",
        page,
        qty,
        totalLength:0,
        data:{
            data:[]
        }
    }


## 关于首页导航栏的接口
    请求类型：get
    请求地址：/nav
    成功的返回：
    {
        code: 1,
        msg: "导航栏",
        data: {
            nav,
        }
    }
    失败的返回：
    {
        code: 0,
        msg: "查询导航栏失败",
        data: {
            nav: [],
        }
    }


## 关于分类页的接口
    请求类型：get
    请求地址：/nav
    成功的返回：
    {
        code: 1,
        msg: "导航栏",
        data: {
            nav,
        }
    }
    失败的返回：
    {
        code: 0,
        msg: "查询导航栏失败",
        data: {
            nav: [],
        }
    }


## 验证用户名是否已存在接口
    请求类型：post
    请求地址：/logincheck
    参数：username=

    用户名已注册的返回：
    {
        code: 0,
        msg: "该账号已存在",
        data: {
            username,
        }
    }

    用户名未注册的返回：
    {
        code: 1,
        msg: "该账号可以注册",
        data: {
            username,
        }
    }


## 用户注册接口
    请求类型：post
    请求地址：/register
    参数：username=
          password=


    注册成功的返回：
    {
        code: 1,
        msg: "注册成功",
        data: {
            username,
        }
    }

    注册失败的返回：
    {
        code: 0,
        msg: "注册失败",
        data: {
            username,
        }
    }


## 用户登录接口
    请求类型：post
    请求地址：/login
    参数：username=
          password=


    登录成功的返回：
    {
        code: 1,
        msg: "注册成功",
        data: {
            username,
        }
    }

    登录失败的返回：
    {
        code: 0,
        msg: "注册失败",
        data: {
            username,
        }
    }

## 购物车增删改查接口
    请求类型：get(全部)

### 添加到购物车
    请求地址：/shoppingCart/addCart
    参数：goodId=
          qty=
          name=
          price=


    添加成功的返回：
    {
        
        code: 1,
        msg: "添加成功",
        goodId
           
    }

    添加失败的返回：
    {
        code: 0,
        msg: "添加失败",
        goodId
    }

### 购物车删除
    请求地址：/shoppingCart/removeCart
    参数：goodId=
          

    删除成功的返回：
    {
        
        code: 1,
        msg: "删除成功",
        goodId
           
    }

    删除失败的返回：
    {
        code: 0,
        msg: "删除失败",
        goodId
    }

### 购物车数量修改
    请求地址：/shoppingCart/changeCart
    参数：goodId=
          qty=
          

    修改成功的返回：
    {
        
        code: 1,
        msg: "修改成功",
        goodId
           
    }

    修改失败的返回：
    {
        code: 0,
        msg: "修改失败",
        goodId
    }

### 购物车查询
    请求地址：/shoppingCart
    
          
    查询成功的返回：
    {
        
        code: 1,
        msg: "查询成功",
        data:[购物车数据]
           
    }

    查询失败的返回：
    {
        code: 0,
        msg: "查询失败",
        data:[]
    }




##后台增删改查
    请求方式:get（全部）


### 增
    请求地址：/backstage/add
    参数：Ativityname=
          price=
          type=
          img=
          name=

    成功的返回
    {
        code: 1,
        msg: "添加成功",
    }

    失败的返回
    {
        code: 0,
        msg: "添加失败",
    }


### 删
    请求地址：/backstage/add
    参数：_id=

    成功的返回
    {
        code: 1,
        msg: "删除成功",
    }

    失败的返回
    {
        code: 0,
        msg: "删除失败",
    }


### 改
    请求地址：/backstage/change
    参数：_id=
          Ativityname=
          price=
          type=
          img=
          name=

    成功的返回
    {
        code: 1,
        msg: "修改成功",
    }

    失败的返回
    {
        code: 0,
        msg: "修改失败",
    }


### 查
    请求地址：/backstage

    成功的返回
    {
        code: 1,
        msg: "商品信息",
        data: {
            data:[所有商品信息],
        }
    }

    失败的返回
    {
        code: 0,
        msg: "商品信息",
        data: {
            data:[],
        }
    }



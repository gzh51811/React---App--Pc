const express = require('express');
const Router = express.Router();

// 引入分支路由

const navRouter = require('./nav')

const navShopRouter = require('./navShop')

const classifyRouter = require('./classify')

const checkloginRouter = require('./checklogin')

const loginRouter = require('./login')

const registerRouter = require('./register')

const shoppingCartRouter = require('./shoppingCart')

const backstageRouter = require('./backstage')


//允许跨域
Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});








//关于导航栏的路由
Router.use("/nav", navRouter);

//关于分类的路由
Router.use("/classify", classifyRouter);

//
Router.use("/navShop", navShopRouter);


Router.use("/checklogin", checkloginRouter);


Router.use("/login", loginRouter);


Router.use("/register", registerRouter);


Router.use("/shoppingCart", shoppingCartRouter);


Router.use("/backstage", backstageRouter);



module.exports = Router;
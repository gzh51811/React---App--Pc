//引入模块
const http = require("http");
const express = require("express");
//引入路由
const Router = require("./routers/index.js")

//引入配置文件
const { port, root, host } = require("./config.json");


//创建express服务器
const app = express();

//设置设置静态资源服务器
app.use(express.static(root));


//设置路由
app.use("/", Router)




//端口监听
app.listen(port, () => {
    console.log(`this is running on http://${host}:${port}...`)
})
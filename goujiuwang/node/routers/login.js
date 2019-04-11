const express = require("express");

const Router = express.Router()

const bodyParser = require("body-parser");

let urlencoded = bodyParser.urlencoded({ extended: false });

const db = require('../db/index.js');

Router.post('/',urlencoded,async(req,res) => {

    let {username,password} = req.body;
   
    let data = await db.find('user', {username,password});
   
    
    if (data.length>0) {
        res.send({
            code: 1,
            msg: "登录成功",
            data: {
                username,
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "登录失败",
            data: {
                username,
            }
        })
    }
    
});
module.exports = Router;
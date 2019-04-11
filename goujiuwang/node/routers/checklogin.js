const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let {username} = req.query;

    let data = await db.find('user', {username});
    
    // let icon = await db.find('icon', { type });
    if (data.length>0) {
        res.send({
            code: 0,
            msg: "该账号已存在",
            data: {
                username,
            }
        })
    } else {
        res.send({
            code: 1,
            msg: "该账号可以注册",
            data: {
                username,
            }
        })
    }
    
});
module.exports = Router;
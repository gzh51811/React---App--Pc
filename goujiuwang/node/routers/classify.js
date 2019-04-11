const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let nav = await db.find('classify', {});
    // let icon = await db.find('icon', { type });
    if (nav) {
        res.send({
            code: 1,
            msg: "导航",
            data: {
                nav,
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询导航失败",
            data: {
                nav: [],
            }
        })
    }

});
module.exports = Router;
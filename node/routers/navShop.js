const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

Router.get('/', async(req, res) => {

    let { type, page, qty } = req.query;

    let data1 = await db.find('goodlist', { type });
    let data = data1.slice((page - 1) * qty, qty * page)

    if (data) {
        res.send({
            code: 1,
            msg: type,
            qty,
            page,
            totleLength: data1.length,
            data: {
                data,
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询" + type + "失败",
            qty,
            page,
            totleLength: 0,
            data: {
                data: [],
            }
        })
    }

});
module.exports = Router;
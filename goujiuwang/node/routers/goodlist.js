// const express = require("express");

// const Router = express.Router()

// const db = require('../db/index.js');

// Router.get('/', async(req, res) => {

//     let goodlist = await db.find('goodlist', {});
//     // let icon = await db.find('icon', { type });
//     if (goodlist) {
//         res.send({
//             code: 1,
//             msg: "商品信息",
//             data: {
//                 goodlist,
//             }
//         })
//     } else {
//         res.send({
//             code: 0,
//             msg: "查询商品信息",
//             data: {
//                 goodlist: [],
//             }
//         })
//     }

// });
// module.exports = Router;
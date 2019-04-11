const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');


//修改
Router.get('/changeQty', async(req, res) => {
    
    let {goodId,qty} = req.query;
    // console.log(goodId,qty)
    // let icon = await db.find('icon', { type });
    let data = await db.update('shoppingCart',{goodId:goodId*1},{$set:{qty:qty*1}})

    // console.log("data",data.result)
    if (data.result.ok==1 &&data.result.n==1) {

        res.send({
            code: 1,
            msg: "修改成功",
        })
    } else {
        res.send({
            code: 0,
            msg: "修改失败",
        })
    
    }
    
});


// 添加
Router.get('/addCart', async(req, res) => {
    
    let {goodId,qty,name,price} = req.query;
    // console.log(goodId,qty)
    let arr = await db.find('shoppingCart', { goodId:goodId*1 });
        // console.log(arr)
    if(arr.length>0){

        let data = await db.update('shoppingCart',{goodId:goodId*1},{$set:{qty:arr[0].qty+1}})

        if (data.result.ok==1 &&data.result.n==1) {

            res.send({
                code: 1,
                msg: "添加成功",
                goodId
            })
        } else {
            res.send({
                code: 0,
                msg: "添加失败",
                goodId
            })
        
        }


    }else{
        let data = await db.insert('shoppingCart',{goodId:goodId*1,qty:qty*1,name,price:price*1})

        if(data.ops.length>0){
            res.send({
                code: 1,
                msg: "添加成功",
                goodId
            })
        }else{
            res.send({
                code: 0,
                msg: "添加失败",
                goodId
            })
        }
    }   
  
});


// 查询
Router.get('/', async(req, res) => {
    
    let {goodId,qty} = req.query;
    
    let data = await db.find('shoppingCart',{})

    // console.log("data",data)
    if (data) {

        res.send({
            code: 1,
            msg: "查询成功",
            data,
        })
    } else {
        res.send({
            code: 0,
            msg: "查询失败",
            data:[],
        })
    
    }
    
});


// 删除
Router.get('/removeCart', async(req, res) => {
    
    let {goodId} = req.query;
    console.log(goodId)
    
    let data = await db.delete('shoppingCart',{goodId:goodId*1})

    // console.log("data",data)

    if (data.result.ok==1 &&data.result.n==1) {

        res.send({
            code: 1,
            msg: "删除成功",
            goodId
        })
    } else {
        res.send({
            code: 0,
            msg: "删除失败",
            goodId
        })
    
    }
    
});


module.exports = Router;
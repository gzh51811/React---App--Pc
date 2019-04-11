const express = require("express");

const Router = express.Router()

const db = require('../db/index.js');

const ObjectId = require('mongodb').ObjectId


//修改
Router.get('/change', async(req, res) => {
    
    let {_id,Ativityname,price,type,img,name} = req.query;
    
    let data = await db.update('goodlist',{_id:new ObjectId(_id)},{$set:{Ativityname,price:price*1,type,img,name}})

    
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
Router.get('/add', async(req, res) => {
    
    let {Ativityname,price,type,img,name} = req.query;
    
    
    let data = await db.insert('goodlist',{Ativityname,price,type,img,name,price})
    console.log(data)
    if(data.ops.length>0){
        res.send({
            code: 1,
            msg: "添加成功",
        })
    }else{
        res.send({
            code: 0,
            msg: "添加失败",
        })
    }

  
});


// 查询
Router.get('/', async(req, res) => {
    
    
    let data = await db.find('goodlist',{})

    // console.log("data",data)
    if (data) {
        res.send({
            code: 1,
            msg: "商品信息",
            data: {
                data,
            }
        })
    } else {
        res.send({
            code: 0,
            msg: "查询商品信息失败",
            data: {
                data: [],
            }
        })
    }
    
});


// 删除
Router.get('/remove', async(req, res) => {
    
    let {_id} = req.query;
    console.log(_id)
    
    let data = await db.delete('goodlist',{_id:new ObjectId(_id)})

    console.log("data",data)

    if (data.result.ok==1 &&data.result.n==1) {

        res.send({
            code: 1,
            msg: "删除成功", 
        })
    } else {
        res.send({
            code: 0,
            msg: "删除失败",
        })
    
    }
    
});


module.exports = Router;
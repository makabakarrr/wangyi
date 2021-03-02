const express = require('express');
const https = require('https');
const {JSDOM} = require('jsdom');
const url = require('url');

const server = express();

const handleHomeRequest = require('./handleHome');
//const handleCateRequest = require('./handleCate');
//处理首页普通数据的请求
server.use('/home',handleHomeRequest());
//处理首页catelist详情页的数据请求
//新品首发
server.get('/item/newItem',(req,res)=>{
    https.request({
        hostname:'m.you.163.com' ,
        port: 443,
        path: req.url,
        method: 'GET'
    },(response)=>{
        let html = '';
        response.on('data',(data)=>{
            html += data;
        });
        response.on('end',()=>{
            let dom = new JSDOM(html,{runScripts:'dangerously'});
            let resultData = dom.window.jsonData;
            res.json({
                code:0,
                msg:'ok',
                data:resultData
            })
        })
    }).end();
})
//新品首发  处理新品预告的数据请求
server.get('/xhr/item',(req,res)=>{
    https.request({
        hostname:'m.you.163.com' ,
        port: 443,
        path: '/xhr/item/getPreNewItem.json',
        method: 'GET'
    },(response)=>{
        let html = '';
        response.on('data',(data)=>{
            html += data;
        });
        response.on('end',()=>{
            let re = JSON.parse(html);
            res.json(re)
        })
        
    }).end(); 
})
//其它分类
server.get('/item/list',(req,res)=>{
    console.log(req.url)
    https.request({
        hostname:'m.you.163.com' ,
        port: 443,
        path: req.url,
        method: 'GET'
    },(response)=>{
        let html = '';
        response.on('data',(data)=>{
            html += data;
        });
        response.on('end',()=>{
            let dom = new JSDOM(html,{runScripts:'dangerously'});
            if(req.query.categoryType){
                var resultData = dom.window.ftlData;
            }else{
                var resultData = dom.window.jsonData;
            }
            res.json({
                code:0,
                msg:'ok',
                data:resultData
            })
        })
    }).end();
})


//处理分类页面的数据请求
 server.get('/item/cateList',(req,res)=>{
     https.request({
        hostname:'m.you.163.com' ,
        port: 443,
        path: req.url,
        method: 'GET'
    },(response)=>{
        let html = '';
        response.on('data',(data)=>{
            html += data;
        });
        response.on('end',()=>{
            let dom = new JSDOM(html, {runScripts: 'dangerously'});
            let resultData = dom.window.ftlData;
            res.json({
                code:0,
                msg:'ok',
                data:resultData
            })
        })
        
    }).end(); 
}) 


//处理识物页面的数据请求
server.use('/topic',(req,res)=>{
    https.request({
        hostname:'m.you.163.com' ,
        port: 443,
        path: '/topic' + req.url,
        method: 'GET'
    },(response)=>{
        let html = '';
        response.on('data',(data)=>{
            html += data;
        });
        response.on('end',()=>{
             let re = JSON.parse(html);
            res.json(re) 
            //console.log();
        })
        
    }).end();
})




server.listen(9000,(err)=>{
    if(err){
        console.log("启动失败：",err);
    }else{
        console.log("启动成功！")
    }
})
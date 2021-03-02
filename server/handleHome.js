const https = require('https');
const url = require('url');
const {JSDOM} = require('jsdom');

module.exports = function(req,res){

    return (req,res)=>{
        let path = url.parse(req.url).pathname;
        
        https.request({
            // 请求的内容
            hostname: 'm.you.163.com',
            port: 443,
            path: '/',
            method: 'GET'
        }, (response)=>{
            //得到了服务器端的响应
            let html = '';
            response.on('data', (data)=>{
                //接收数据
                html += data;
            })
            response.on('end', ()=>{
                // 处理请求回来的页面
                let dom = new JSDOM(html, {runScripts: 'dangerously'});
                // 从页面中取出数据
                let cateData = dom.window.cateList;
                let jsData = dom.window.jsonData;
                // 响应客户端
                switch(path){
                    case '/navCategory':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:cateData
                        });
                        break;
                    case '/banner':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.focusList
                        });
                        break;
                    case '/policy':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.policyDescList
                        });
                        break;
                    case '/category':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.kingKongModule.kingKongList
                        });
                        break;
                    case '/fresh':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.indexActivityModule
                        });
                        break;
                    case '/brand':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.tagList
                        });
                        break;
                    case '/hot-sale':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.categoryHotSellModule.categoryList
                        });
                        break;
                        case '/popular':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.popularItemList
                        });
                        break;
                        case '/limited':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.flashSaleModule
                        });
                        break;
                        case '/new':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.newItemList
                        });
                        break;
                        case '/active':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.sceneLightShoppingGuideModule
                        });
                        break;
                        case '/cate':
                        res.json({
                            code:0,
                            msg:'ok',
                            data:jsData.categoryModule
                        });
                        break;
                }
                
            })
            response.on("timeout",function(){
                console.log("响应超时.");
            })
        })
        // 发送请求
        .end();
    }
}
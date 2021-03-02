

module.exports = function(){
    return (req,res)=>{
        console.log(1);
        console.log(req);
        var id = req.query.categoryId;
        var path =  '/item/cateList';
        console.log(path);
        https.request({
            hostname:'m.you.163.com' ,
            port: 443,
            path: path,
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
    }
}
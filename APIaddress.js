const fs = require("fs");
const http=require('http');
const url = require('url');
const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName ==='/About' || pathName ==='/'){
        res.end('This about CGCS')
    }else if(pathName ==='/HomePage'){
        res.end('Welcome to HomePage')
    }else if(pathName ==='/api'){
        fs.readFile('./data.json','utf-8',(err,data)=>{
            const productData=JSON.parse(data);
            res.writeHead(200,{'content-type':'application/json'})
            res.end(data);
        })
    }
    
});
server.listen(3000,'127.0.0.1',() => {
    console.log('listening to port at 3000');
});
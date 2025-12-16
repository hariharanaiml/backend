const http=require("http");
http.createServer((req, res)=>{
    res.end("node server is running");
}).listen(4000);
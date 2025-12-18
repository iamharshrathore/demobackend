import { readFile } from "fs/promises";
import {createServer} from "http";

const server = createServer(async (req,res)=>{
if(req.method === "GET"){
    if(req.url ==="/"){

        try{
            const data = await readFile("index.html");
            
            res.writeHead(200, {"content-type":"text/html"});
            res.end(data);
        }catch(error){
            res.writeHead(404, {"content-type":"text/html"});
            res.end("404 page not found");
        }
}

}
});

const PORT = 3002;

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});
//תרגיל 2.1
import { count } from 'node:console';
import { createServer } from 'node:http';
let countR=0
let aske=[]
const server =createServer((req, res)=> {
    aske.push({req:req.url ,method:req.method})
if (req.url === '/requests' && req.method==='GET'){
    countR++
    res.end(`the num is:${countR} ${JSON.stringify(aske)}`);
}
else{
res.end(`welcome ${req.url} to ${req.method}`)
}
})
server.listen(5050);
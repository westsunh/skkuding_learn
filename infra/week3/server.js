var http = require('http'); // 서버를 만드는 모듈
var os = require('os'); // Operation System 정보를 읽는 모듈

var PORT = 3000;
var serverIP = 'localhost';

// 서버 생성 
var server = http.createServer((req,res) => {
    // 1. GET / (OS 정보)
    if (req.method === 'GET' && req.url === '/'){
        // os 정보
        const data = {
            type : os.type(),
            hostname : os.hostname(),
            cpu_count: os.cpus().length,
            total_memory_mb : Math.round(os.totalmem() / 1024 / 1024),
            uptime_hours : Math.round(os.uptime() / 3600 * 100) / 100
        };

        // res
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));

    // 2. GET /health
    } else if (req.method === 'GET' && req.url === '/health'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({status:'ok'}));

    // 3. 404
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error:'Not Found'}));
    }
});

// server.listen(PORT, () => {
//     console.log('서버 실행중 : http://' + serverIP + ':' + PORT)
// })

var zero = '0.0.0.0'
var lh = 'localhost'
var seoul = '127.0.0.1'

serverIP = zero
server.listen(PORT, serverIP,() => {
    console.log('서버 실행중 : http://' + serverIP + ':' + PORT)
})
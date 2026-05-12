var http = require('http'); // 서버를 만드는 모듈
var os = require('os'); // Operation System 정보를 읽는 모듈

var PORT = 3000;

function getServerInfo() {
  return {
    type: os.type(),
    hostname: os.hostname(),
    cpu_count: os.cpus().length,
    total_memory_mb: Math.round(os.totalmem() / 1024 / 1024),
    uptime_hours: Math.round((os.uptime() / 3600) * 100) / 100
  };
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(data));
}

// 서버 생성 
var server = http.createServer((req, res) => {
    // 1. 서버 작동 확인
  if (req.method === 'GET' && req.url === '/') {
    sendJson(res, 200, {
      message: 'Node.js API Server is running',
      routes: ['/', '/api/info', '/api/hello', '/health']
    });
    // 2. GET /api/info (OS 정보)
  } else if (req.method === 'GET' && req.url === '/api/info') {
    sendJson(res, 200, getServerInfo());
    // 3. GET /api/hello
  } else if (req.method === 'GET' && req.url === '/api/hello') {
    sendJson(res, 200, {
        message: 'Hello You arrives at /api/hello'
     });
    // 4. GET /health
  } else if (req.method === 'GET' && req.url === '/health') {
    sendJson(res, 200, { status: 'ok' });
    // 5. 404
  } else {
    sendJson(res, 404, { error: 'Not Found' });
  }
});

var zero = '0.0.0.0'
var lh = 'localhost'
var seoul = '127.0.0.1'

serverIP = zero
server.listen(PORT, serverIP,() => {
    console.log('서버 실행중 : http://' + serverIP + ':' + PORT)
})
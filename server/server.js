/*
 * @Author: aouos 
 * @Date: 2020-11-29 16:29:38 
 * @Last Modified by: aouos
 * @Last Modified time: 2020-11-30 17:41:53
 */
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(1314);

console.log('Server running http://localhost:1314');
var http =require('http');

var server =http.createServer();

var host='192.168.0.4';
//var host='localhost';
var port=3000;
//50000 동시접속 수
server.listen(port, host, '50000', function(){
    console.log('웹서버가 실행되었습니다. ->'+ host+" : "+ port);
});

var express =require('express');
var http=require('http');
var static=require('serve-static');
var path=require('path')

var bodyParser=require('body-parser');

var app=express();

app.set('port', process.env.PORT  || 3000);
app.use('/public' ,static(path.join(__dirname, 'public')));

//포스트방식으로 넘길때
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());


app.use(function(req, res, next){
    console.log('첫번째 미들웨어 호출됨.') ;
    
    var userAgent =req.header('User-Agent');
    //post 혹은 get 방식
    var paramName=req.body.name || req.query.name;
    
    res.send('<h3>서버에서 응답 : User-Agent -> '+userAgent+'</h3> <h3>Param Name-> '+paramName+'</h3>');         
    
});



var server=http.createServer(app).listen(app.get('port'), function(){
   console.log('익스프레스로 웹 서버를 실행함 : '  + app.get('port')) ;
});


//npm install body-parser --save 모듈 인스톨


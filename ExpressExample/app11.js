var express=require('express');
var http=require('http');
var static=require('serve-static');
var path=require('path');

var bodyParser=require('body-parser');
var cookieParser =require('cookie-parser');

var app=express();

app.set('port', process.env.PORT || 3000);
app.use('/public', static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//쿠키파서
app.use(cookieParser());

var router =express.Router();

router.route('/process/setUserCookie').get(function(req, res){
        console.log('/process/setUserCookie 라우팅 함수 호출됨.');
        res.cookie('user', {
            id:'mike',
            name:'소녀시대',
            authorized:true
        });
        res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res){
    console.log('/process/showCookie 라우팅 함수 호출됨');
    //
    res.send(req.cookies);
});



app.use('/', router);

//모든 요청에 대한 처리
app.all('*', function(req, res){
    res.status(404).send('<h1>요청하신 페이지는 없어요. </h1>');
});


var server=http.createServer(app).listen(app.get('port'), function(){
   console.log('익스프레스로 웹 서버를 실행함 : ' + app.get('port')) ;
});









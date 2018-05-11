var express = require('express');
var app = express();
var firebase = require('firebase');

var bodyParser = require('body-parser');
var morgan = require('morgan');
var main = require('./routes/main');

var passport = require('passport');
var LocalStrategey = require('passport-local').Strategy;
var session = require('express-session');

//server는 localhost 9999로 일단 설정하였습니다.
//server 시작은 => cmd창에 nodemon app.js 
app.listen(9999,()=>{
  console.log('Server is Running');
});

//Router 
app.use(main);

/*
처음 연동시 + 뒤에 페이지 루트 ~.html 삽입할 예정입니다.
app.get('/',(req,res)=>{
  res.sendFile(__dirname+ )
})
*/

app.use(express.static('view/public/'));


//Setting Session
app.use(session({
  resave: false,
  saveUnintialized: true,
  secret: 'keyboard cat'
}));

//Setting Passport
app.use(passport.initialize());
app.use(passport.session());

//Setting Morgan
app.use(morgan('dev'));
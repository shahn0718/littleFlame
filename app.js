var express = require('express');
var app = express();

//firebase 연결
var firebase = require('firebase');
var dbInfo = require('./lib/connectDb');

var bodyParser = require('body-parser');
var morgan = require('morgan');

// 메인 라우터 연결
var main = require('./routes/main');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');



//use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
//server는 localhost 3000로 일단 설정하겠습니다.(차후 변경가능)
//server 시작은 nodemon app.js

app.listen(9999,()=>{
	console.log("Server is Running");
});

//main라우터 연결
app.use(main);

/*
처음 연동시 + 뒤에 페이지 루트 ~.html 삽입할 예정입니다.
app.get('/',(req,res)=>{
  res.sendFile(__dirname+ )
});
*/

app.use(express.static('view/public/'));

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/view/public/main.html");
});

/*
app.post("/code",(req,res)=>{


  
  let db = firebase.database();
  let k;
  var passedCode = req.body.code;
  console.log(passedCode);
  //console.log(typeof(passedCode));
  
  var passRef = db.ref();
  passRef.child('test').child('week').child('id').once('value',(data)=>{
    
    var codeList = data.toJSON();
    var keys = Object.keys(codeList);

    for(var key in keys){
      if(passedCode === codeList[keys[key]]){
        res.sendFile(__dirname + "/view/public/survey.html");
      }
    }
    console.log('false');
    res.sendFile(__dirname + "/view/public/error.html");
  });
});
*/
//Setting Session
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'keyboard cat'
}));

//Setting Passport
app.use(passport.initialize());
app.use(passport.session());

//Setting Morgan
app.use(morgan('dev'));



/*



if (passedCode === Object.keys(key)){
  console.log('true');
  res.sendFile(__dirname + "/view/public/survey.html");
}else{
  console.log('false');
  res.sendFile(__dirname + "/view/public/error.html");
}

*/
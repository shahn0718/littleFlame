var express = require('express');
var app = express();

var router = express.Router();
var firebase = require('firebase');
var dbInfo = require('../../lib/connectDb');
var bodyParser = require('body-parser');
var path = require('path');

router.post('/',(req,res)=>{
  dbInfo();
  let db = firebase.database();
  var passedCode = req.body.code;
  console.log(passedCode);
  //console.log(typeof(passedCode));
  
  var passRef = db.ref();
  passRef.child('test').child('week').child('id').once('value',(data)=>{
    
    var codeList = data.toJSON();
    var keys = Object.keys(codeList);

    for(var key in keys){
      if(passedCode === codeList[keys[key]]){
        res.sendFile(path.resolve('view/public/survey.html'));
        return;
      }
    }
    res.sendFile(path.resolve('view/public/insert.html'));
  });
});

module.exports = router;
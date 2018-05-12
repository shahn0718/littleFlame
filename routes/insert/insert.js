
var express = require('express');
var app = express();
var router = express.Router();
var firebase = require('firebase');
var dbInfo = require('../../lib/connectDb');
var bodyParser = require('body-parser');
var path = require('path');

dbInfo();
var db = firebase.database();

function getMemoList(){
  
  var memoRef = db.ref('test/uid/');
  var memo = db.ref('test');

  memo.on('value',(data)=>{
    
    console.log("---------------");
  });


  memoRef.on('child_added',(data)=>{
    
    console.log(data.val());
    
  });
}

getMemoList();


module.exports = router;

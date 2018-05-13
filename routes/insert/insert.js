
var express = require('express');
var app = express();
var router = express.Router();
var firebase = require('firebase');
var dbInfo = require('../../lib/connectDb');
var bodyParser = require('body-parser');
var path = require('path');

dbInfo();
var db = firebase.database();

router.get('/', (req,res,next)=>{
  res.sendFile(path.join(__dirname,'../../view/public/insert.html'));
});

module.exports = router;




/*
function getMemoList(){
  
  var memoRef = db.ref('test/uid/');
  memoRef.on('child_added',(data)=>{
    
    console.log(data.val());
    
  });
}

function savaMemoList(){
  var memoRef =  db.ref('test/uid/');

  memoRef.push({
    place: "cafe",
    possibility:"bad",
    author:"ahn"
  });
}

//savaMemoList();

//getMemoList();

*/
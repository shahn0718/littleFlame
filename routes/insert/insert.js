
var express = require('express');
var app = express();
var router = express.Router();
var firebase = require('firebase');
var dbInfo = require('../../lib/connectDb');
var bodyParser = require('body-parser');
var path = require('path');


router.get('/', (req,res,next)=>{
  res.sendFile(path.join(__dirname,'../../view/public/insert.html'));
});

dbInfo();
let db = firebase.database();
let key;
function getUid(){

  var getRef = db.ref('test/ex/');
  getRef.on('child_added',(data)=>{
    var data = data.key;
    console.log(data);
    return data;
  });
  console.log("2"+key);
}
console.log("3"+getUid());



/*
function updateList(uid){


  var memoRef = db.ref('test/ex/'+uid);
  
  memoRef.update({
    place: "home"
  });

}

updateList();
*/
//var key = db.ref('test/ex/').on('child_added',(data) => {return data.key});
//console.log(key);
/*
function setMemoList(){

  var memoRef = db.ref('test/ex/');
  memoRef.on('child_added',(data) =>{
    //console.log(data.key);
    console.log(data.key);
  });

}

setMemoList();
*/
//var userId = setMemoList();


module.exports = router;



// memoRef.remove();

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

 /*
  memoRef.push({
    place: "restaurant",
    possibility: "NotBad",
    authoer: "Kim"
  });
  
 //memoRef.remove();

 */

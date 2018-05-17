var express = require('express');
var app = express();
var router = express.Router();
var firebase = require('firebase');
var dbInfo = require('../../lib/connectDb');
var bodyParser = require('body-parser');
var path = require('path');

var googleStorage = require('@google-cloud/storage');
var Multer = require('multer');



  const storage = googleStorage({
    projectId: "shahn920718",
    keyFilename: "../../bin/secret.json"
  });

  const bucket = storage.bucket("shahn920718.appspot.com");

  const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
  });

  router.post('/', multer.single('file'), (req, res) => {
    
    console.log('Upload Image');
  
    let file = req.file;
    console.log(file)
    if (file) {
      uploadImageToStorage(file).then((success) => {
        res.status(200).send({
          status: 'success'
        });
      }).catch((error) => {
        console.error(error);
      });
    }
  });









router.use(bodyParser.urlencoded({extended: false}));



/*
router.post('/',(req,res)=>{

  dbInfo();
  var storageRef = firebase.storage();
  console.log("I'm here");
  var fileName = req.body.file_name;
  console.log(fileName);

})

*/
/*
router.post('/', (req,res)=>{
  
  dbInfo();
  var file = req.body.file;
  console.log(file);
  //var uploader = document.getElementById('uploader');
  var storageRef = firebase.storage();
  var task = storageRef.put(file);
          task.on('state_changed',
      
            function progress(snapshot){
              //프로그래스 바 진행상황
              var percentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100; 
              uploader.value = percentage;
            },
      
            function error(err) {
      
            },
      
            function complete(){
      
            }
      
        
        );
});


/*
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
*/


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

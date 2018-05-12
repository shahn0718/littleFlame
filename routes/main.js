var express = require('express');
var app = express();
var router = express.Router();

var path = require('path');

var insert = require('./insert/insert');

//부속 라우터 설정후 연결


router.use('/insert',insert);

module.exports = router;



/*
var auth;
        var database; 
        var userInfo;

        // Initialize Firebase
        var config = {
          apiKey: "AIzaSyDFw7wQFT3Utzz2TYupqE8fRk6AN4UUkTE",
          authDomain: "shahn920718.firebaseapp.com",
          databaseURL: "https://shahn920718.firebaseio.com",
          projectId: "shahn920718",
          storageBucket: "shahn920718.appspot.com",
          messagingSenderId: "126796965394"
        };
        firebase.initializeApp(config);

        auth = firebase.auth();
        database = firebase.database();


        var authProvider = new firebase.auth.GoogleAuthProvider();
       
        auth.onAuthStateChanged((user)=>{
          if(user){
            //인증성공부
            console.log('success');
            console.log(user);
            console.log(user.uid);
            userInfo = user;
            getMemoList();
            //메모리스트출력
          }else {
            //인증실패부
            auth.signInWithPopup(authProvider);
          }
        });

        function getMemoList(){
          console.log(userInfo.uid);
          var memoRef = database.ref('test/uid/');

          memoRef.on('child_added',(data)=>{
            console.log(data.val());
          });
    
          memoRef.orderByChild('text').on('child_added',(data)=>{
            console.log(data.val().text);
          });

          memoRef.orderByChild('author').on('child_added',(data)=>{
            console.log(data.val().author);
          });
        }

        function saveMemoList(){
          var memoRef = database.ref('test/uid/');
          
          memoRef.push({
            text:"hello",
            author:"Seo",
            tilte:"Mother"
          });
        }
        

*/
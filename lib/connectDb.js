var firebase = require('firebase');

module.exports = () => {
// connect firebase
var config = {
  apiKey: "AIzaSyDFw7wQFT3Utzz2TYupqE8fRk6AN4UUkTE",
  authDomain: "shahn920718.firebaseapp.com",
  databaseURL: "https://shahn920718.firebaseio.com",
  projectId: "shahn920718",
  storageBucket: "shahn920718.appspot.com",
  messagingSenderId: "126796965394"
};


//duplicate 방지
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
};




//---------------------------------------------------------------------
// Your web app's Firebase configuration;
// Specifies which firebase project your application is connected with.
//---------------------------------------------------------------------

var firebaseConfig = {

  apiKey: "AIzaSyBJ4vP_WYkPM664Ui5ozPvKeY_3oEraK5M",
  authDomain: "project---group-3.firebaseapp.com",
  databaseURL: "https://project---group-3.firebaseio.com",
  projectId: "project---group-3",
  storageBucket: "project---group-3.appspot.com",
  messagingSenderId: "941281296864",
  appId: "1:941281296864:web:0bb467864a43bb6b04eb85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create the Firestore database object
// Henceforce, any reference to the database can be made with "db"
//const db = firebase.firestore();
//const db = firebase.firestore();


// Writing comments to the database
function writeCommentData() {
  var inputValue = document.getElementById("#textfield").value;
  db.collection('REV_ID').doc('1').set({
    COMMENT: inputValue
  });
}
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
const db = firebase.firestore();


// Writing comments to the database
function writeCommentData() {
  var inputValue = document.getElementById("textfield").value;
  document.getElementById('textfield').value = '';

  var ratingValue1 = document.getElementById("select1").value;
  var ratingValue2 = document.getElementById("select2").value;
  var ratingValue3 = document.getElementById("select3").value;
  var ratingValue4 = document.getElementById("select4").value;
  var ratingValue5 = document.getElementById("select5").value;
  if (document.getElementById("select1").checked) {
    var ratingValue = ratingValue1;
  } else if (document.getElementById("select2").checked) {
    var ratingValue = ratingValue2;
  } else if (document.getElementById("select3").checked) {
    var ratingValue = ratingValue3;
  } else if (document.getElementById("select4").checked) {
    var ratingValue = ratingValue4;
  } else if (document.getElementById("select5").checked) {
    var ratingValue = ratingValue5;
  } else {
    var ratingValue = "No Rating";
  }


  var user = firebase.auth().currentUser;
  var name;

  if (user != null) {
    name = user.displayName;
  }



  var date = new Date();
  var datePrint = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  console.log("Left a rating/comment");
  const db = firebase.firestore();
  db.collection("REV_ID").doc(name).set({
    COMMENT: inputValue,
    RATING: ratingValue,
    DATE: datePrint,
    USER: name,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function () {
    console.log("Document successfully written!");
  });

  document.getElementById('select1').checked = false;
  document.getElementById('select2').checked = false;
  document.getElementById('select3').checked = false;
  document.getElementById('select4').checked = false;
  document.getElementById('select5').checked = false;
}

$("#comments_secition").append("<div class='comments'></div>");
db.collection("REV_ID").orderBy("timestamp", "desc").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
        var n = doc.data().COMMENT;
        var i = doc.data().RATING;
        var j = doc.data().DATE;
        var x = doc.data().USER;
    
        
        $(".comments").append("<div id='comment1'></div>");
        $("#comment1").append("<h3>" + x + "</h3>");
        $("#comment1").append("Rating: " + i);
        $("#comment1").append("<br>" + n);
        $("#comment1").append("<br>" + j);
  });
});

// db.collection("REV_ID")
//   .get()
//   .then(function (doc) {
//     var n = doc.data().COMMENT;
//     var i = doc.data().RATING;
//     var j = doc.data().DATE;
//     var x = doc.data().USER;

//     $("#comments_secition").append("<div class='comments'></div>");
//     $(".comments").append("<div id='comment1'></div>");
//     $("#comment1").append("<h3>" + x + "</h3>");
//     $("#comment1").append("Rating: " + i);
//     $("#comment1").append("<br>" + n);
//     $("#comment1").append("<br>" + j);
//   })

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     db.ref('/ACC_ID/'+ user.uid).on("value")
//     .then(function(snapshot) {
//       document.getElementById("user-name").innerText = "Welcome: " + snapshot.val().name;
//     })
//   } else {
//     window.location = "main.html"
//   }
// });
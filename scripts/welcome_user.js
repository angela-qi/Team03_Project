//Pulls from DB and displays a welcome message for the current user.
function userWelcome() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //console.log("user is signed in");
            db.collection("ACC_ID")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    $("#user-welcome").text(n);
                })
        }
    })
}

userWelcome();

//Signs user out.
function signOut() {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
        })
        .catch(function (error) {
            // An error happened
        });
}
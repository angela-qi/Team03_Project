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
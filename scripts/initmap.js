function initMap() {
    //Location of Markers
    // var locations = createBusArray()
    var array = [];
    var location = db.collection("BUS_ID").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            array.push([doc.data().Name, doc.data().Address, doc.data().Latitude, doc.data().Longitude]);
        });
    });

    var infowindow = new google.maps.InfoWindow();

    const contentString = "\n" + '<a href="location.html">Summary</a>';

    location.then(function () {
        for (var i = 0; i < array.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng({
                    lat: array[i][2],
                    lng: array[i][3]
                }),
                url: "location.html",
                map: map
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(array[i][0] + contentString);
                    infowindow.open(map, marker);
                }
            })(marker, i));

        };
    });



    //Location of Vancouver
    const vancouver = {
        lat: 49.2827,
        lng: -123.1207
    };

    //Map centered at Vancouver
    var map = new google.maps.Map(document.getElementById("map-container-google-1"), {
        zoom: 13,
        center: vancouver,
        mapTypeId: 'roadmap'
    });
    //Marker at Vancouver
    // const marker = new google.maps.Marker({
    //     position: vancouver,
    //     map: map,
    // });

}

function userWelcome() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "rating.html";
        } else {
            window.location.href = "signin.html";
        };
    })
}

function checkLogin() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href = "rating.html";
        } else {
            window.location.href = "signin.html";
        }
    })
}

function initMap() {
    //Location of Markers
    // var locations = createBusArray()
    var array = [];
    var promise = db.collection("BUS_ID").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            array.push([doc.data().Name, doc.data().Address, doc.data().Latitude, doc.data().Longitude]);
        });
    });
    promise.then(function () {
        for (var i = 0; i < array.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng({ lat: array[i][2], lng: array[i][3] }),
                map: map
            });
            console.log("New marker made" + i);
        };
    });

    //Location of Vancouver
    const vancouver = { lat: 49.2827, lng: -123.1207 };

    //Map centered at Vancouver
    var map = new google.maps.Map(document.getElementById("map-container-google-1"), {
        zoom: 10,
        center: vancouver,
        mapTypeId: 'roadmap'
    });
    //Marker at Vancouver
    // const marker = new google.maps.Marker({
    //     position: vancouver,
    //     map: map,
    // });

}



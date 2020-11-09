function initMap() {
    //Location of Markers
    var test = createLocationArray();
    console.log(test);
    //Location of Vancouver
    const vancouver = { lat: 49.2827, lng: -123.1207 };

    //Map centered at Vancouver
    const map = new google.maps.Map(document.getElementById("map-container-google-1"), {
        zoom: 10,
        center: vancouver,
    });
    //Marker at Vancouver
    const marker = new google.maps.Marker({
        position: vancouver,
        map: map,
    });

    //map.addMarker(new google.maps.Marker.position(test_cafe));

}


function createLocationArray() {
    var docRef = db.collection("BUS_ID").doc("1");
    var array = [];
    docRef.get().then(function (doc) {
        if (doc.exists) {
            let json = doc.data();
            Object.keys(json).forEach((message) => {
                if (message == 'Name') {
                    array.splice(0, 0, json[message]);
                } else if (message == 'Address') {
                    array.splice(1, 0, json[message]);
                } else if (message == 'Longitude') {
                    array.splice(2, 0, json[message]);
                } else {
                    array.splice(3, 0, json[message]);
                }
            });
            console.log("Document:", array);
        } else {
            console.log("No such document");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}


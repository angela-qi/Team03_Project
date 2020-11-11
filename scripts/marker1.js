function initMap() {
    //Location of Markers
    var test = createLocationArray();
    console.log(test);

    //Location of Vancouver
    const vancouver = { lat: 49.2827, lng: -123.1207 };

    //Map centered at Vancouver
    const map = new google.maps.Map(document.getElementById("map-container-google-1"), {
        zoom: 15,
        center: vancouver,
    });
    //Marker at Vancouver
    const marker = new google.maps.Marker({
        position: vancouver,
        map: map,
    });

}

function createLocationArray() {
    var array = [];
    db.collection("BUS_ID").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push([doc.data().Name, doc.data().Address, doc.data().Latitude, doc.data().Longitude]);
        });
    });
    return array;
}

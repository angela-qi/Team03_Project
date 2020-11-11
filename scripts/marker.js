function initMap() {
    //Location of Vancouver
    const vancouver = { lat: 49.2827, lng: -123.1207};
    //Map centered at Vancouver
    const map = new google.maps.Map(document.getElementById("map-container-google-1"), {
        zoom: 15,
        center: vancouver,
    });
    //Marker at Vancouver
    const marker = new google.maps.Marker ({
        position: vancouver,
        map: map,
    });
}
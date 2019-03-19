var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -37.82,
            lng: 144.96
        },
        zoom: 11
    });
}

(function() {
    document.getElementById('copydate').innerHTML = new Date().getFullYear();
})();
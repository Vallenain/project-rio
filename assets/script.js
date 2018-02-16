(function() {
"use strict;"

var gmapsInstances = [];

function initMap(){
    document.querySelectorAll('.gmaps-instance').forEach(function(instance) {
        var options = {
            center: {
                lat: 0,
                lng: 0
            },
            zoom: 5
        };
        gmapsInstances.push(new google.maps.Map(instance, options));
    });
}
window.initMap = initMap;

})();
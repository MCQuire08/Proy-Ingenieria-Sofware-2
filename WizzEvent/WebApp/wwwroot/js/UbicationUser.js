 function initMap() {
            var mapOptions = {
        center: {lat: 40.712776, lng: -74.005974 },
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
            };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: mapOptions.center,
    map: map,
    draggable: true,
    title: 'Ubicación seleccionada'
            });

    google.maps.event.addListener(marker, 'dragend', function () {
                var latitude = marker.getPosition().lat();
    var longitude = marker.getPosition().lng();
            });
}

function goBack() {
    window.history.back(); 
}

function goNext() {
    document.querySelector('form').submit(); 
}

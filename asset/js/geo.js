window.addEventListener("load", init);

function init() {
    getLocation();
}

var x = document.querySelector(".mapholder");


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "unsupported browser.";
    }
}

function showPosition(position) {
    lat = 28.733396999999997;
    lon = 77.24990629999999;
    latlon = new google.maps.LatLng(lat, lon)

    //    -------------------------2nd step


    mapholder = document.getElementById('mapholder')


    //----------------------3rd Step

    var myOptions = {
        center: latlon,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };
    //--------------------------4step
    var map = new google.maps.Map(document.querySelector(".mapholder"), myOptions);

    // --------------5 Step

    var marker = new google.maps.Marker({
        position: latlon,
        map: map,
        title: "Your position"
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
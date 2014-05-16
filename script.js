//Global variables
var map;
var infowindow = null;
var newYork = new google.maps.LatLng(40.729481987333855, -73.99361746883392);

var funeralHomeInfo = [
    {
        lat: 40.795522,
        lon: -73.935766,
        address: "1st Ave at 115th St.",
        img: 'assets/1st Ave at 115th St.  40.795522,-73.935766.png'
    },
    {
        lat: 40.723539,
        lon: -73.987885,
        address: "1st Ave between 1st and 2nd St.",
        img: 'assets/1st Ave between 1st and 2nd St. 40.723539, -73.987885.png'
    },
    {
        lat: 40.736461,
        lon: -73.982217,
        address: "2nd Ave between 20th and 21st St.",
        img: 'assets/2nd Ave between 20th and 21st St. 40.736461, -73.982217.png'
    },
    {
        lat: 40.660068,
        lon: -73.998322,
        address: "4th Ave Between 24th and 25th St.",
        img: 'assets/4th Ave Between 24th and 25th St. 40.660068,-73.998322.png'
    },
    {
        lat: 40.726375,
        lon: -73.983945,
        address: "7th Street Between 1st Ave and Ave A.",
        img: 'assets/7th Street Between 1st Ave and Ave A. 40.726375, -73.983945.png'
    },
    {
        lat: 40.741194,
        lon: -74.003709,
        address: "14th St. Between 8th Ave and 9th Ave.",
        img: 'assets/14th St. Between 8th Ave and 9th Ave. 40.741194, -74.003709.png'
    },
    {
        lat: 40.714167,
        lon: -73.999388,
        address: "22 Mulberry St.",
        img: 'assets/22 Mulberry St. 40.714167, -73.999388 .png'
    },
    {
        lat: 40.729766,
        lon: -74.001450,
        address: "199 Bleecker St.",
        img: 'assets/199 Bleecker St. 40.729766, -74.001450 .png'
    },
    {
        lat: 40.780952,
        lon: -73.979694,
        address: "Amsterdam Ave. between 75th and 76th St.",
        img: 'assets/Amsterdam Ave. between 75th and 76th St. 40.780952, -73.979694.png'
    },
    {
        lat: 40.716826,
        lon: -73.958770,
        address: "Bedford Ave between N 5th and N 6th",
        img: 'assets/Bedford Ave between N 5th and N 6th 40.716826, -73.958770.png'
    },
    {
        lat: 40.688532,
        lon: -73.993002,
        address: "Court St. and Amity St.",
        img: 'assets/Court St. and Amity St. 40.688532, -73.993002 .png'
    },
    {
        lat: 40.689655,
        lon: -73.969087,
        address: "Dekalb Ave. and Vanderbilt Ave.",
        img: 'assets/Dekalb Ave. and Vanderbilt Ave. 40.689655, -73.969087.png'
    },
    {
        lat: 40.776598,
        lon: -73.911129,
        address: "Ditmars Blvd between 29th and 31st St.",
        img: 'assets/Ditmars Blvd between 29th and 31st St. 40.776598, -73.911129.png'
    },
    {
        lat: 40.797593,
        lon: -73.938726,
        address: "E 116th St. Between 2nd and 3rd Ave.",
        img: 'assets/E 116th St. Between 2nd and 3rd Ave. 40.797593, -73.938726.png'
    },
    {
        lat: 40.723075,
        lon: -73.900851,
        address: "Flushing Ave. at 65th St.",
        img: 'assets/Flushing Ave. at 65th St. 40.723075,-73.900851.png'
    },
    {
        lat: 40.804945,
        lon: -73.947152,
        address: "Lenox Ave between 120th and 121st St.",
        img: 'assets/Lenox Ave between 120th and 121st St. 40.804945, -73.947152.png'
    },
    {
        lat: 40.777817,
        lon: -73.961036,
        address: "Madison Ave. at 81st St.",
        img: 'assets/Madison Ave. at 81st St. 40.777817,-73.961036.png'
    },
    {
        lat: 40.711972,
        lon: -73.999735,
        address: "Madison St. and St. James Place",
        img: 'assets/Madison St. and St. James Place 40.711972, -73.999735.png'
    },
    {
        lat: 40.724764,
        lon: -73.948334,
        address: "McGuiness Blvd and Nassau Ave.",
        img: 'assets/McGuiness Blvd and Nassau Ave. 40.724764, -73.948334 .png'
    },
    {
        lat: 40.701419,
        lon: -73.887185,
        address: "Myrtle Ave. at 66th Pl.",
        img: 'assets/Myrtle Ave. at 66th Pl. 40.701419,-73.887185.png'
    },
    {
        lat: 40.755604,
        lon: -73.884843,
        address: "Northern Blvd Between 82nd and 83rd St.",
        img: 'assets/Northern Blvd Between 82nd and 83rd St. 40.755604, -73.884843.png'
    },
    {
        lat: 40.678001,
        lon: -73.952815,
        address: "Pacific St. and Bedford Ave.",
        img: 'assets/Pacific St. and Bedford Ave. 40.678001, -73.952815.png'
    },
    {
        lat: 40.82406,
        lon: -73.899766,
        address: "Prospect Ave. at 165th St.",
        img: 'assets/Prospect Ave. at 165th St. 40.82406,-73.899766.png'
    },
    {
        lat: 40.705437,
        lon: -73.912352,
        address: "Seneca Ave. at Greene Ave.",
        img: 'assets/Seneca Ave. at Greene Ave.40.705437, -73.912352.png'
    },
    {
        lat: 40.844371,
        lon: -73.93737,
        address: "St. Nicholas Ave. between 173rd and 174th St.",
        img: 'assets/St. Nicholas Ave. between 173rd and 174th St.  40.844371,-73.93737.png'
    },
    {
        lat: 40.677896,
        lon: -74.012309,
        address: "Van Brunt St and Sullivan St.",
        img: 'assets/Van Brunt St and Sullivan St. 40.677896, -74.012309.png'
    },
    {
        lat: 40.636484,
        lon: -74.082073,
        address: "Victory Blvd. at Westervelt Ave.",
        img: 'assets/Victory Blvd. at Westervelt Ave. 40.636484,-74.082073.png'
    },
    {
        lat: 40.759989,
        lon: -73.993749,
        address: "W 43rd St. Between 9th and 10th Ave.",
        img: 'assets/W 43rd St. Between 9th and 10th Ave. 40.759989, -73.993749.png'
    },
];

//Function to add markers to the map
function addMarkers(map, markers) {

    //Adding markers for tips
    for (var i = 0; i < markers.length; i++) {

        var markerInfo = markers[i];

        var content = "<img width=650px height=500px src='" + markerInfo.img + "' /><br>" + markerInfo.address;

        var funeralMarker = new google.maps.Marker({
            position: new google.maps.LatLng(markerInfo.lat, markerInfo.lon),
            map: map,
            icon: "http://www.unitedwaytoronto.com/images/agency/mapIcons/mapLightBlueDot.gif",
            html: content,
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(funeralMarker, 'click', function() {
            infowindow.setContent(this.html);
            infowindow.open(map, this);
        });
    }
}

//Function to initialize Google Map
function initializeMap() {

    var styles = [
    {
        "elementType": "geometry",
        "stylers": [
          { "color": "#ffffff" },
          { "visibility": "on" }
        ]
    },{
        "elementType": "labels",
        "stylers": [
          { "visibility": "on" },
          { "color": "#ffffff" }
        ]
    },{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          { "color": "#000000" }
        ]
      },{
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapOptions = {
        center: newYork,
        zoom: 11,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    infowindow = new google.maps.InfoWindow({
        content: "content goes here"
    });
}

//Load home page
$(document).ready(function() {
    initializeMap();
    addMarkers(map, funeralHomeInfo);
});
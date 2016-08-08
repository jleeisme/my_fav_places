// init the marker locations and include the info along with them in a hash
function initMap() {
  var cricketPitch = {
    info: "The Cricket Pitch. Best grass to sit on in Victoria.",
    lat: 48.411951, lng: -123.360136
  };
  var tropicalIsland = {
    info: "Tropical Island. Ribs and wings rule at this unassuming Chinese restaurant. Ribs actually sizzle.",
    lat: 48.460018, lng: -123.333292
  };
  var thetisLake = {
    info: "Thetis Lake. Don't be a baby and ride your bike there. Unless you love being surrounded by obnoxious teens, walk a bit and get your own space on the rocks.",
    lat: 48.466786, lng: -123.473538
  };
  var myHouse = {
    info: "My place!",
    lat: 48.441391, lng: -123.339482
  };
  var lunchSpot = {
    info: "Best spot to have your lunch and view the bay.",
    lat: 48.821991, lng: -123.590477
  };

  // array of locations with their coordinates and index
  var locations = [
    [cricketPitch.info, cricketPitch.lat, cricketPitch.lng, 0],
    [tropicalIsland.info, tropicalIsland.lat, tropicalIsland.lng, 1],
    [thetisLake.info, thetisLake.lat, thetisLake.lng, 2],
    [myHouse.info, myHouse.lat, myHouse.lng, 3],
    [lunchSpot.info, lunchSpot.lat, lunchSpot.lng, 4]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myHouse,
    // styles to change the colours of the map
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#ff4400"
          },
          {
            "saturation": -68
          },
          {
            "lightness": -4
          },
          {
            "gamma": 0.72
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon"
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#0077ff"
          },
          {
            "gamma": 3.1
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "hue": "#00ccff"
          },
          {
            "gamma": 0.44
          },
          {
            "saturation": -33
          }
        ]
      },
      {
        "featureType": "poi.park",
        "stylers": [
          {
            "hue": "#44ff00"
          },
          {
            "saturation": -23
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "hue": "#007fff"
          },
          {
            "gamma": 0.77
          },
          {
            "saturation": 65
          },
          {
            "lightness": 99
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "gamma": 0.11
          },
          {
            "weight": 5.6
          },
          {
            "saturation": 99
          },
          {
            "hue": "#0091ff"
          },
          {
            "lightness": -86
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": -48
          },
          {
            "hue": "#ff5e00"
          },
          {
            "gamma": 1.2
          },
          {
            "saturation": -23
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "saturation": -64
          },
          {
            "hue": "#ff9100"
          },
          {
            "lightness": 16
          },
          {
            "gamma": 0.47
          },
          {
            "weight": 2.7
          }
        ]
      }
    ]
  });
  
  var infowindow = new google.maps.InfoWindow({
  });

  // a marker for each location
  var marker, i;
  for (i = 0; i < locations.length; i++){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4]),
      map: map
    }); 

    // click brings up the infowindow for that marker
    google.maps.event.addListener(marker, 'click', (function (marker, i){
      return function (){
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  } 
} 
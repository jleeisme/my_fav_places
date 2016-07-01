// init the marker locations and include the info along with them in a hash
function initMap() {
  var cricketPitch = {
    info: "The Cricket Pitch. Best grass to sit on in Victoria",
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

  // array of locations with their coordinates and index
  var locations = [
    [cricketPitch.info, cricketPitch.lat, cricketPitch.lng, 0],
    [tropicalIsland.info, tropicalIsland.lat, tropicalIsland.lng, 1],
    [thetisLake.info, thetisLake.lat, thetisLake.lng, 2],
    [myHouse.info, myHouse.lat, myHouse.lng, 3],
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myHouse
  });

  // 
  var infowindow = new google.maps.InfoWindow({
  });

  // a marker for each location
  var marker, i;
  for (i = 0; i < locations.length; i++){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
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
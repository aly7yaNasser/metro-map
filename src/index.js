import "./style.css";

function drawRoute(jslocations,labels,labelOrigin,colorName,color,map){
 




  //Create an empty array to store the coordinates from the JSON object above.
    var coordinates = [];
  
  //For each line in the JSON object, pull out the longitude and latitude and add to the coordinates array.
    for (i = 0; i < jslocations.length; i++) {
  
    var longitudes =jslocations[i].lng
  
        var latitudes = jslocations[i].lat
        
    coordinates.push({
                lat: latitudes,
                lng: longitudes
                    });
    }
  
  // Define a bound from the given coordinates from which we can center the map.

  
  //Create the svg marker icon
  var icon = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeOpacity: 1,
    fillOpacity: 1,
    scale: 7,
    fillColor:"#ffffff",
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight:5,
    
  
  };
  
  //Create the markers
  
  
  for( i = 0; i < coordinates.length; i++ ) {
           
    var positions = new google.maps.LatLng(coordinates[i]);
    icon['labelOrigin']=labelOrigin[i]
  
    var marker = new MarkerWithLabel({
      position:positions,
      // icon: mapStyles.uavSymbolBlack,
      icon:icon,
      labelContent:labels[i],
      labelAnchor: labelOrigin[i],
      labelClass: "labels-"+colorName,
      labelStyle: {
          opacity: 0.75
      },
      zIndex: 999999,
      map: map
    })
  
  };
  
  //Create the polyline that connects the markers.
  var LinePath = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 7
     });
  
     LinePath.setMap(map);
  
  }
  
function initMap() {


  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 24.731488, lng: 46.707267 },
  });


//blue line

  const lanePathCoordinates = [
    { lat: 24.559763, lng: 46.776436 },
    { lat: 24.582026, lng: 46.764134 },
    { lat: 24.583472, lng: 46.763219 },
    { lat: 24.584627, lng: 46.762224 },
    { lat: 24.587418, lng: 46.760795 },
    { lat: 24.602871204966902, lng: 46.75284688249837 },
    { lat: 24.59843637152957, lng: 46.74524628447706 },
    { lat: 24.59428877137576, lng: 46.73729611843368 },
    { lat: 24.610361150031192, lng: 46.728591125725494 },
    { lat: 24.613350534777027, lng: 46.7272226501534 },
    { lat: 24.623321687640985, lng: 46.722676943795875 },
    { lat: 24.625377634243275, lng: 46.72100989399109 },
    { lat: 24.6257258874222, lng: 46.72040500621192 },
    { lat: 24.627210534732747, lng: 46.71931620836978 },
    { lat: 24.62939165131694, lng: 46.717783826051395 },
    { lat: 24.63177434021092, lng: 46.71649339883428 },
    { lat: 24.632647922129927, lng: 46.71646394015212 },
    { lat: 24.635696198238428, lng: 46.71742013902206 },
    { lat: 24.637307077601672, lng: 46.717673310688305 },
    { lat: 24.63889875934706, lng: 46.71784209177595 },
    { lat: 24.64004904899142, lng: 46.71788881982879 },
    { lat: 24.64092071344673, lng: 46.71764471373836 },
    { lat: 24.643519822318968, lng: 46.71647649171343 },
    { lat: 24.64676694459513, lng: 46.71506420007389 },
    { lat: 24.653390354912005, lng: 46.712381072550436 },
    { lat: 24.65501927748733, lng: 46.70990641056156 },
    { lat: 24.657282342571115, lng: 46.70638780172912 },
    { lat: 24.658561448164175, lng: 46.70498035819615 },
    { lat: 24.65929938773564, lng: 46.70457436486933 },
    { lat: 24.667670373157907, lng: 46.70092954457492 },
    { lat: 24.669014926603396, lng: 46.699486050334755 },
    { lat: 24.67205664658886, lng: 46.69612838353166 },
    { lat: 24.67731878586572, lng: 46.693425968407624 },
    { lat: 24.6813028294294, lng: 46.69138536911412 },
    { lat: 24.686965464677996, lng: 46.6886278024901 },
    { lat: 24.694582055053232, lng: 46.68465690648125 },
    { lat: 24.700193981611047, lng: 46.681844188548176 },
    { lat: 24.709287772251976, lng: 46.67726662790325 },
    { lat: 24.718055261092427, lng: 46.672882097008255 },
    { lat: 24.75965592666366, lng: 46.65199691081369 },
    { lat: 24.759439804803417, lng: 46.6515121132278 },
    { lat: 24.759310608505302, lng: 46.65106339986962 },
    { lat: 24.759241041212242, lng: 46.65073507302216 },
    { lat: 24.759072091909694, lng: 46.65026447120749 },
    { lat: 24.75862487205862, lng: 46.6495859290561 },
    { lat: 24.758714316157636, lng: 46.649159104154414 },
    { lat: 24.758903142377402, lng: 46.648907386904696 },
    { lat: 24.759002524483044, lng: 46.64857906005725 },
    { lat: 24.759022538432905, lng: 46.648383313386965 },
    { lat: 24.759478113384013, lng: 46.6481106542837 },
    { lat: 24.767757401987375, lng: 46.64375901456677 },
    { lat: 24.771047282116932, lng: 46.642184260804534 },
    { lat: 24.77355682129197, lng: 46.64114148202263 },
    { lat: 24.774324380850747, lng: 46.64129334303399 },
    { lat: 24.778068621905362, lng: 46.642701171260896 },
    { lat: 24.786265039649688, lng: 46.638528655594435 },
    { lat: 24.79505320203689, lng: 46.634067857075564 },
    { lat: 24.806628158472545, lng: 46.627963453717484 },
    { lat: 24.82965425737327, lng: 46.61645899830947 },
  ];
  const LanePath = new google.maps.Polyline({
    path: lanePathCoordinates,
    geodesic: true,
    strokeColor: "#2db5e4",
    strokeOpacity: 1.0,
    strokeWeight: 8,
  });

  LanePath.setMap(map);

//------------------------------------------------------------------
//purple line
var jslocations =[
  {lat:24.701386355433627, lng:46.829881768713584 },
  {lat:24.747361796216303, lng:46.797889373643635},
  {lat:24.77660830265986, lng:46.77744458960821},
  {lat:24.793214958157993, lng:46.765599804146134},
  {lat:24.786713414385222, lng:46.730128243579685},
  {lat:24.807277811187728, lng:46.71105588351672},
  {lat:24.800191798824756, lng:46.69383440815601},
  {lat:24.786279,lng: 46.660531},
  {lat:24.7673995, lng:46.643198},






];
var labels=['2A1','2A2','2A3','2B1','2B2','2B4','2C1','2C2','2C3','2D2','2E1','2E2','2F1','2G1']


// offset to postion the lables
var labelOrigin=[
new google.maps.Point(10, 0),new google.maps.Point(12, -10),
new google.maps.Point(-20, 10),new google.maps.Point(12, -5),
new google.maps.Point(-10, 12),new google.maps.Point(-10, -23),
new google.maps.Point(-10, 10),new google.maps.Point(-28, -5),
new google.maps.Point(10, 0)]

drawRoute(jslocations,labels,labelOrigin,"purple","#991a7e",map);
//----------------------
}
export { initMap };

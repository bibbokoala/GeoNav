function initMap() {

  var infowindow = new google.maps.InfoWindow();
  var lat = localStorage.getItem("latitudine");
  var lon = localStorage.getItem("longitudine");
  var centerMap = new google.maps.LatLng(lat, lon);
  var zoom = 17;
  if (localStorage.getItem("range")!=null)
  {
    var distanza = localStorage.getItem("range");
    switch (true) {
      case (distanza < 200):
        zoom=18;
        break;
      case (distanza > 200 && distanza < 500):
        zoom=17;
        break;
      case (distanza > 500 && distanza < 800):
        zoom=16;
        break;
      case (distanza > 800 && distanza < 1500):
        zoom=15;
        break;
      case (distanza > 1500 && distanza <= 2200):
        zoom=14;
        break;
      case (distanza > 2200 && distanza <= 3000):
        zoom=13;
        break;
      default:
        zoom=17;
        break;
    }
  }
  console.log("distanza: " + distanza + " - zoom: "+zoom);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: centerMap
  });

  function content(poiType, poiName, address,  lat, lon, distance, url1, url2, url3){
    var poi_images = ["", "ppu.png", "apparato.png", "bts.png", "armadio.png", "terra.png", "aps.png", "sede.png", "distributore.png", "sito.png", "palo.png"]; 
    var image="";
      if (url1.length<3)
        image = '<img src="./pics/nia.png" border=0 width=50% />';
      else
        image = '<img src="'+url1+'" border=0 width=50% />';
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">' + poiName + '</h4>'+
      '<div id="bodyContent">'+
      '<img src="pics/'+poi_images[poiType]+'" /><br>' +
      '<p style="color: #000;" >'+
      '<b>' + poiName + '</b><br>' +
      'indirizzo: ' + address + '<br>' +
      'latitudine: ' + lat + ' - longitudine: ' + lon + ' - distanza: ' + distance + '<br>' +
      '<u>Immagini allegate:</u><br>' +
      image + '<br>' +
      //'url1: ' + url1 + '<br>' +
      //'url2: ' + url2 + '<br>' +
      //'url3: ' + url3 + '<br>' +
      '</p>'+
        '    <button onclick="NavigaVerso('+lat+', '+lon+')" class="btn btn-default btn-lg bottone" >'+
        '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
        '    &nbsp;&nbsp;Naviga Verso'+
        '    </button>'+
      '</div>'+
      '</div>';
      return(contentString);
  }

  function marker(icon, title, point, content){
    var marker = new google.maps.Marker({
      position: point,
      map: map,
      icon: 'pics/' + icon,
      title: title
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(content);
      infowindow.open(map, this);
    });
  }

//ciclo  su lista per visualizzare tutti i punti sulla mappa con i relativi contenuti...
  //VISUALIZZA LA LISTA PRECEDENTEMENTE SALVATA dalle pagine: ric_elemento e ric_indirizzo
  var lista = localStorage.getItem("lista");
  var arr = JSON.parse(lista);
  var i;
  var poi_images = ["", "ppu.png", "apparato.png", "bts.png", "armadio.png", "terra.png", "aps.png", "sede.png", "distributore.png", "sito.png", "palo.png"]; 
  for(i = 0; i < arr.length; i++) {
    console.log(i + "" + arr[i].poiName);
    // tolta la vitgola ai metri...
    var metri = arr[i].distance.split(".")[0]+" mt";
    //var contenuto = content(arr[i].poiType, arr[i].poiName, arr[i].address, arr[i].latitude, arr[i].longitude, arr[i].distance, arr[i].url1, arr[i].url2, arr[i].url3)
    var contenuto = content(arr[i].poiType, arr[i].poiName, arr[i].address, arr[i].latitude, arr[i].longitude, metri, arr[i].url1, arr[i].url2, arr[i].url3);
    var LatLng = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
    marker(poi_images[arr[i].poiType], arr[i].poiName, LatLng, contenuto);
  }

}

function initMap() {

  var infowindow = new google.maps.InfoWindow();
  var lat = localStorage.getItem("latitudine");
  var lon = localStorage.getItem("longitudine");
  var centerMap = new google.maps.LatLng(lat, lon);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: centerMap
  });

  function content(poiType, poiName, address,  lat, lon, distance, url1, url2, url3){
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + poiName + '</h1>'+
      '<div id="bodyContent">'+
      '<p><b>' + poiName + '</b><br>' +
      'Tipo: ' + poiType + '<br>' +
      'indirizzo: ' + address + '<br>' +
      'latitudine: ' + lat + '<br>' +
      'longitudine: ' + lon + '<br>' +
      'distanza: ' + distance + '<br>' +
      'url1: ' + url1 + '<br>' +
      'url2: ' + url2 + '<br>' +
      'url3: ' + url3 + '<br>' +
      '</p>'+
        '<a class="btn btn-default btn-sm pull-left" data-toggle="modal" data-target="#myModal" >'+
        '    <span class="glyphicon glyphicon-info-sign pull-left" aria-hidden="true"></span>'+
        '    &nbsp;&nbsp;Info'+
        '    </a>'+
        '    <button onclick="NavigaVerso('+lat+', '+lon+')" class="btn btn-default btn-sm pull-right" >'+
        '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
        '    &nbsp;&nbsp;Naviga'+
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
    var contenuto = content(arr[i].poiType, arr[i].poiName, arr[i].address, arr[i].latitude, arr[i].longitude, arr[i].distance, arr[i].url1, arr[i].url2, arr[i].url3)
    var LatLng = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
    marker(poi_images[arr[i].poiType], arr[i].poiName, LatLng, contenuto);
  }

}

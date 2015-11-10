function initMap() {
  var point = {lat: 41.854880, lng: 12.458359};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: point
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">APPARATO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Apparato 123456xy</b> ' +
      '&egrave; un apparecchio macchinoso, complesso o grandioso oppure un insieme di soggetti singoli quali macchine, organi, persone o idee, che insieme concorrono ad ottenere un unico scopo.</p>'+
      'Immagine Allegata:<br>'+
      '<img src="pics/apparato.jpg" alt="..." class="img-thumbnail">'+
      '<p>Attribution: Uluru, <a href="https://it.wikipedia.org/wiki/Apparato">'+
      'https://it.wikipedia.org/wiki/Apparato</a> '+
      '(Ultima visita 22 giugno 2015).</p>'+
        '<a class="btn btn-default btn-sm pull-left" data-toggle="modal" data-target="#myModal" >'+
        '    <span class="glyphicon glyphicon-info-sign pull-left" aria-hidden="true"></span>'+
        '    &nbsp;&nbsp;Info'+
        '    </a>'+
        '    <a class="btn btn-default btn-sm pull-right" >'+
        '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
        '    &nbsp;&nbsp;Naviga'+
        '    </a>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: point,
    map: map,
    icon: 'pics/apparato.png',
    title: 'Apparato'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  console.log("initMap");
}

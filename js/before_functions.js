  //TESTATA MENU
  var testata   = '<img src="pics/geonav.png" height="56px" align="left" id="logo_small" />';
  var contenuto = '<a id="imp_indirizzo_b" class="btn btn-default btn-lg bottone">'+
                  '<span class="glyphicon glyphicon-save pull-left" aria-hidden="true"></span>'+
                  '&nbsp;&nbsp;&nbsp;&nbsp;IMPOSTA INDIRIZZO</a>'+
                  '<a id="cerca_poi_b" class="btn btn-default btn-lg bottone">'+
                  '<span class="glyphicon glyphicon-search pull-left" aria-hidden="true"></span>'+
                  '&nbsp;&nbsp;&nbsp;&nbsp;CERCA ELEMETO DI RETE</a>';

  //TESTATA Imposta Indirizzo
  var t_indirizzo='<img src="pics/geonav.png" height="56px" align="left" id="logo_small" />';
  // COSTRUISCE LA PAGINA Imposta Indirizzo
  var c_indirizzo='<center>'+
                  '<form id="impostaAjaxForm" > '+
                  '    <label for="city"><b>Citt&agrave;</b></label> '+
                  '    <input type="text" name="citta" id="city"  class="form-control-custom" required=true placeholder="Citt&agrave;" /><br> '+
                  '    <label for="address"><b>Indirizzo</b></label> '+
                  '    <input type="text" name="indirizzo" id="address" class="form-control-custom" required=true placeholder="Indirizzo" /><br> '+
                  '    <label for="cap"><b>CAP</b></label> '+
                  '    <input type="text" name="cap" id="cap" class="form-control-custom" required=true placeholder="CAP" /><br> '+
                  '  <div id="result"></div>  '+
                  '<button id="imposta" type="button" class="btn btn-default btn-lg bottone" > '+
                  '<span class="glyphicon glyphicon-save pull-left" aria-hidden="true"></span>Imposta Indirizzo '+
                  '</button>'+
                  '</form>'+
                  '<br>';

  //TESTATA Ricerca / Visualizza POI
  var t_cerca_poi='<img src="pics/geonav.png" height="56px" align="left" id="logo_small" />';
  // COSTRUISCE LA PAGINA Cerca e Visualizza POI
  var c_cerca_poi='<center>'+
                  '<form id="cercaAjaxForm">'+
                  '  <label id="apparato" class="checkbox form-control-custom text-left"><input type="checkbox" name="apparato" onchange="statecheck(\'apparato\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apparato<img src="pics/apparato.png" class="pull-right" /></label>'+
                  '  <label id="aps" class="checkbox form-control-custom text-left"><input type="checkbox" name="aps" onchange="statecheck(\'aps\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;APS<img src="pics/aps.png" class="pull-right" /></label>'+
                  '  <label id="armadio" class="checkbox form-control-custom text-left"><input type="checkbox" name="armadio" onchange="statecheck(\'armadio\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Armadio<img src="pics/armadio.png" class="pull-right" /></label>'+

                  '  <label id="bts" class="checkbox form-control-custom text-left"><input type="checkbox" name="bts" onchange="statecheck(\'bts\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTS<img src="pics/bts.png" class="pull-right" /></label>'+
                  '  <label id="distributore" class="checkbox form-control-custom text-left"><input type="checkbox" name="distributore" onchange="statecheck(\'distributore\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Distributore<img src="pics/distributore.png" class="pull-right" /></label>'+
                  '  <label id="ppu" class="checkbox form-control-custom text-left"><input type="checkbox" name="ppu" onchange="statecheck(\'ppu\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PPU<img src="pics/ppu.png" class="pull-right" /></label>'+

                  '  <label id="sede" class="checkbox form-control-custom text-left"><input type="checkbox" name="sede" onchange="statecheck(\'sede\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sede<img src="pics/sede.png" class="pull-right" /></label>'+
                  '  <label id="sito" class="checkbox form-control-custom text-left"><input type="checkbox" name="sito" onchange="statecheck(\'sito\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sito<img src="pics/sito.png" class="pull-right" /></label>'+
                  '  <label id="terra" class="checkbox form-control-custom text-left"><input type="checkbox" name="terra" onchange="statecheck(\'terra\')" style="margin-left:1px;margin-top:5px;" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terra<img src="pics/terra.png" class="pull-right" /></label>'+

                  '<input type="text" name="poi_vicino" id="poi_vicino" class="form-control-custom" required=true placeholder="POI vicino a indirizzo..." /><br>'+
                  '  <div id="result"></div>  '+
                  '<button id="poi_lista" type="button" class="btn btn-default btn-lg bottone" > '+
                  '<span class="glyphicon glyphicon-list pull-left" aria-hidden="true"></span>Visualizza su Lista '+
                  '</button>'+
                  '<br>'+
                  '<button id="poi_mappa" type="button" class="btn btn-default btn-lg bottone" > '+
                  '<span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>Visualizza su Mappa '+
                  '</button>'+
                  '</form>'+
                  '<br>';
  
  //TESTATA Lista POI
  var t_lista_poi = t_cerca_poi;
  var c_lista_poi = '<center><h2>Lista POI</h2>'+
                    '<ul class="list-group">'+
                    '  <li style="text-align:center;" class="list-group-item list-group-item-default">'+
                    '    <a class="btn btn-default btn-sm pull-left" data-toggle="modal" data-target="#myModal" >'+
                    '    <span class="glyphicon glyphicon-info-sign pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Info'+
                    '    </a>'+
                    '    POI 1 '+
                    '    <a class="btn btn-default btn-sm pull-right" >'+
                    '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Naviga'+
                    '    </a>'+
                    '  </li>'+
                    '  <li style="text-align:center;" class="list-group-item list-group-item-default">'+
                    '    <a class="btn btn-default btn-sm pull-left" data-toggle="modal" data-target="#myModal" >'+
                    '    <span class="glyphicon glyphicon-info-sign pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Info'+
                    '    </a>'+
                    '    POI 2 '+
                    '    <a class="btn btn-default btn-sm pull-right" >'+
                    '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Naviga'+
                    '    </a>'+
                    '  </li>'+
                    '  <li style="text-align:center;" class="list-group-item list-group-item-default">'+
                    '    <a class="btn btn-default btn-sm pull-left" data-toggle="modal" data-target="#myModal" >'+
                    '    <span class="glyphicon glyphicon-info-sign pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Info'+
                    '    </a>'+
                    '    POI 3 '+
                    '    <a class="btn btn-default btn-sm pull-right" >'+
                    '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Naviga'+
                    '    </a>'+
                    '  </li>'+
                    '  <li style="text-align:center;" class="list-group-item list-group-item-default">'+
                    '    <a class="btn btn-default btn-sm pull-left" data-toggle="modal" data-target="#myModal" >'+
                    '    <span class="glyphicon glyphicon-info-sign pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Info'+
                    '    </a>'+
                    '    POI 4 '+
                    '    <a class="btn btn-default btn-sm pull-right" >'+
                    '    <span class="glyphicon glyphicon-map-marker pull-left" aria-hidden="true"></span>'+
                    '    &nbsp;&nbsp;Naviga'+
                    '    </a>'+
                    '  </li>'+
                    '</ul></center>';

  //TESTATA Mappa POI
  var t_mappa_poi = t_cerca_poi;
  var c_mappa_poi = '<div id="map"></div>';
  /*
  var c_mappa_poi = '<center>'+
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.25709261835!2d12.395911931490556!3d41.9102414882659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRoma!5e0!3m2!1sit!2sit!4v1445435750243" width="100%" height="100%" frameborder="0" %style="border:0" ></iframe>'+
                    '</center>';
  */
  function onSuccess(data, status)
  {
    localStorage.setItem("matricola", data.matricola);
    localStorage.setItem("password", data.password);
    localStorage.setItem("login", "ok");
    //Surace ha richiesto che dopo il login si vada al menu...
    localStorage.setItem("link", "menu");
    //richiesta di Maurizio dopo il login vai du pagina ricerca_poi...
    //localStorage.setItem("link", "poi");
    window.location.reload();
  }
  function onError(data, status)
  {
    var htmlString = "<p>ERRORE Login!</p>";
    localStorage.setItem("link", "menu");
    localStorage.setItem("login", "NOK!");
    document.getElementById("result").innerHTML = htmlString;
  }   

  function onSuccessImposta(data, status, jqXHR)
  {
    console.log("Success!");
    console.log(JSON.stringify(data));
    localStorage.setItem("link", "indirizzo");
    document.getElementById("result").innerHTML = "Indirizzo impostato con successo!";
  }
  function onErrorImposta(data, status)
  {
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(status));
    localStorage.setItem("link", "indirizzo");
    document.getElementById("result").innerHTML = "ERRORE Indirizzo NON impostato!";
  }

  $(document).ready(function() {

    $('#btn_exit').click(function() {
      if (confirm("Chiudere l'applicazione?")) {
        navigator.app.exitApp();
      }
    });

    var login = localStorage.getItem("login");
    console.log("login: "+login);

    var link = localStorage.getItem("link");
    console.log("link: "+link);

    var view = localStorage.getItem("view");
    console.log("view: "+view);

    if ( (login=="ok") && (link=="menu") ) 
    {
      $('#testata').html(testata);
      $('#contenuto').html(contenuto);
      localStorage.setItem("link", "menu");
      $('#my_footer').show();
    }
    else
      $('#my_footer').hide();

    var matricola = localStorage.getItem("matricola");
    console.log("matricola: "+matricola);

    var password = localStorage.getItem("password");
    console.log("password: "+password);

    if (link == "indirizzo")
    {
      document.getElementById("testata").innerHTML = t_indirizzo;
      document.getElementById("contenuto").innerHTML = c_indirizzo;
      //alert(c_indirizzo);
    }

    if (link == "poi")
    {
      document.getElementById("testata").innerHTML = t_cerca_poi;
      document.getElementById("contenuto").innerHTML = c_cerca_poi;
      if (view == "lista")
      {
        var lista = localStorage.getItem("lista");
        console.log("lista ul: "+lista);
        document.getElementById("testata").innerHTML = t_lista_poi;
        document.getElementById("contenuto").innerHTML = c_lista_poi;
      }
      if (view == "mappa")
      {
        var lista = localStorage.getItem("lista");
        console.log("lista ul: "+lista);
        document.getElementById("testata").innerHTML = t_mappa_poi;
        document.getElementById("contenuto").innerHTML = c_mappa_poi;
        //view: mappa  cambiare il max-width di fluido in 100%
        $('#fluido').css("max-width", "");
        console.log("c_mappa_poi: " + c_mappa_poi);
      }
    }
      
    $('#home').click(function() {
      localStorage.setItem("link", "menu");
      window.location.href = 'index.html';
    });
      
    $('#logo_small, #logo_big, #link_home').click(function() {
      localStorage.setItem("link", "menu");
      window.location.href = 'index.html';
    });

    $("#btn_logout, #btn_logout_f").click(function(){
      //alert("btn_logout");
      localStorage.clear();
      console.log("btn_logout: "+localStorage.getItem("login"));
      window.location.href = 'index.html';
      window.location.reload();
    });

    $("#poi_lista").click(function(){
      var formData = $("#cercaAjaxForm").serialize();
      console.log(formData);
      //alert("poi_lista: "+formData);
      localStorage.setItem("view", "lista");
      window.location.href = 'index.html';
    });

    $("#poi_mappa").click(function(){
      var formData = $("#cercaAjaxForm").serialize();
      console.log(formData);
      //alert("poi_mappa: "+formData);
      localStorage.setItem("view", "mappa");
      window.location.href = 'index.html';
    });

    $("#btn_login").click(function(){
      console.log(callAjaxForm);
      var formData = $("#callAjaxForm").serialize();
      console.log(formData);
      $.ajax({
        type: "POST",
        url: "http://service.cloudmup.com/GOALocale/geonavdemo.php", //change with send.php...
        cache: false,
        dataType: "jsonp",
        data: formData,
        success: onSuccess,
        error: onError
      });
      //return false;
    });
      
    $('#imp_indirizzo, #imp_indirizzo_b').click(function() {
      localStorage.setItem("link", "indirizzo");
      window.location.reload();
    });
      
    $('#cerca_poi, #cerca_poi_b').click(function() {
      localStorage.setItem("link", "poi");
      localStorage.setItem("view", null);
      window.location.reload();
    });

    $("#imposta").click(function(){
      console.log(impostaAjaxForm);
      var formData = $("#impostaAjaxForm").serialize();
      console.log(formData);
      var URL="http://service.cloudmup.com/GOALocale/geonavdemoprova.php";
      $.ajax({
        type: "GET",
        url: URL,
        cache: true,
        dataType: "jsonp",
        contentType: "application/json",
        data: formData,
        success: onSuccessImposta,
        error: onErrorImposta
      }); 
      //return false;
    });

    function renderList(response) {
      var arr = JSON.parse(response);
      var i;
      var lista = '<ul data-role="listview" data-divider-theme="b" data-inset="true">\n';
      for(i = 0; i < arr.length; i++) {
        lista += '<li><a class="ui-icon-arrow-r ui-btn-icon-right" data-icon="arrow-r" href="#' + arr[i].id + '" data-rel="popup" >\n' + 
        arr[i].id +' '+
        arr[i].lat +' '+
        arr[i].lon +
        '</a></li>\n';
        lista += '<div data-role="popup" id="' + arr[i].id + '" data-theme="a">Latitudine: ' + arr[i].lat + ' - Longitudine: ' + arr[i].lon + '</div>';
      }
      lista += '</ul>\n';
      alert(lista);
      document.getElementById("result").innerHTML = lista;
      localStorage.setItem("link", "poi");
      localStorage.setItem("view", "lista");
      localStorage.setItem("lista", lista);
    }

    $("#btn_cerca").click(function(){
      var xmlhttp = new XMLHttpRequest();
      var url="http://service.cloudmup.com/GOALocale/geonavdemolistapoi.php";

      xmlhttp.onreadystatechange=function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              renderList(xmlhttp.responseText);
          }
      }
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    });

  });  
  
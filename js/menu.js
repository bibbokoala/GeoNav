  console.log("ELEMENTI DI NAVIGAZIONE:");
  console.log("matricola: "+localStorage.getItem("matricola"));
  console.log("password: "+localStorage.getItem("password"));
  console.log("auth: "+localStorage.getItem("auth"));
  console.log("token: "+localStorage.getItem("token"));
  console.log("login: "+localStorage.getItem("login"));
  console.log("link: "+localStorage.getItem("link"));
  console.log("lista: "+localStorage.getItem("lista"));  

  $(document).ready(function() {

    /* leggo la versione del SOFTWARE:
    $.get("config.xml", function(data){
      var version = $(data).find('widget').attr('version');
      localStorage.setItem("version",version);
    });
    */
    localStorage.setItem("version","2.2.1");

    $("#link_home").click(function(){
      //alert("link_home");
      localStorage.setItem("link","home");
      window.location.href = 'menu.html';
    });

    $("#link_indirizzo").click(function(){
      //alert("link_indirizzo");
      localStorage.setItem("link","indirizzo");
      window.location.href = 'ric_indirizzo.html';
    });

    $("#link_elemento").click(function(){
      //alert("link_elemento");
      localStorage.setItem("link","elemento");
      window.location.href = 'ric_elemento.html';
    });
    $("#btn_logout, #btn_logout_f").click(function(){
      //alert("btn_logout");
      localStorage.clear();
      console.log("btn_logout: "+localStorage.getItem("login"));
      window.location.href = 'index.html';
    });

    $('#btn_exit').click(function() {
      if (confirm("Chiudere l'applicazione?")) {
        navigator.app.exitApp();
      }
    });

    if (localStorage.getItem("auth") != null) {
      var auth=localStorage.getItem("auth");
      if (auth.localeCompare("KO")==0)
      {
        var htmlString = "<p>ERRORE Login!</p>";
        document.getElementById("result").innerHTML = htmlString;
      }
    }

    if (localStorage.getItem("matricola") == null) {
       console.log("matricola is null! BACK TO INDEX!!!");
       window.location.href = 'index.html';
       //document.location.reload(true);
    }

    //RISOLUZIONE DELLO SCHERMO!
    //window.screen.availHeight
    //window.screen.availWidth

    /* DIMENSIONI FINESTRA BROWSER
    $(window).resize(function() {
       var w = $(window).width();
       var h = $(window).height();
       var string ="resolution :"+ w +" - " + h;
       console.log(string);
    }).resize();
    */

    //var hm = window.screen.availHeight - 500;
    //var hm = $(window).height() - 370 ;
    var hm = window.innerHeight -270;
    console.log("footer_menu - hm: " +hm);
    var padding_top = hm + "px";
    $( "#footer_menu" ).css( "padding-top", padding_top );

  });  
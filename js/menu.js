  console.log("ELEMENTI DI NAVIGAZIONE:");
  //console.log("matricola: "+localStorage.getItem("matricola"));
  //console.log("password: "+localStorage.getItem("password"));
  console.log("auth: "+localStorage.getItem("auth"));
  console.log("token: "+localStorage.getItem("token"));
  console.log("login: "+localStorage.getItem("login"));
  console.log("link: "+localStorage.getItem("link"));
  console.log("lista: "+localStorage.getItem("lista"));
  

  $(document).ready(function() {

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
    

  });  
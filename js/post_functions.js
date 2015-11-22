    function password_in_chiaro(checkbox)
    {
        if (checkbox.checked)
        {
            //DEBUG alert("checked");
            var password = document.getElementById("password");
            password.type="text";
        }
        else
        {
            //DEBUG alert("NOT checked");
            var password = document.getElementById("password");
            password.type="password";
        }
    }

    function statecheck(layer) {
       var myLayer = document.getElementById(layer);
       var input = myLayer.childNodes[0];
       if(input.checked == true){
          myLayer.style.backgroundColor = "#bff0a1";
          if (layer =="chiaro")
          {
             var password = document.getElementById("password");
             password.type="text";
          }
       } 
       else {
          myLayer.style.backgroundColor = "#fff";
          if (layer =="chiaro")
          {
             var password = document.getElementById("password");
             password.type="password";
          }
       }
    }


  	//Validación de todos los campos cuándo están vaciós
    var inputs = document.getElementsByClassName("form-control");
    var validacion = function (e){
      if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.style.display ="block";
      this.nextElementSibling.innerText="Este campo es obligatorio";
      }
      else {
      this.nextElementSibling.style.display ="none";
      this.nextElementSibling.innerText="";
      }
      //Validacion de los nombres y apellidos, la primera letra filtre con máyusucla
      var arrDato=this.value.split(" ");
      var datoConMayuscula = "";
      for(var i=0; i<arrDato.length; i++){
        datoConMayuscula += arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase() + " ";
      }
      this.value=datoConMayuscula;
   }
   for(var i=0; i<inputs.length; i++){
   inputs[i].onblur=validacion;
   }

  //Validacion de solo permitir letras en los inputs de nombre y apellido
  var nombre = document.getElementById("name");
  var apellido = document.getElementById("lastname");
  var soloLetras = function (e) {
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if( (codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)){
       this.nextElementSibling.style.display ="none";
       return true;
    }
    // de lo contrario que aparezca una alerta
    else{
      this.nextElementSibling.style.display ="block";
      this.nextElementSibling.innerText="Error, sólo colocar letras de la A-Z";
      return false;
    }
  }
  nombre.onkeypress = soloLetras;
  apellido.onkeypress = soloLetras;

  //Validación de correo electronico, solo se acepta si tiene la sintaxis correcta
  var email = document.getElementById("input-email").value;
  function ValidarCorreo(){
    if(email == email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/)){
      this.style.display ="none";
      this.nextElementSibling.innerText="";
      return true;
    }
    else {
      this.nextElementSibling.style.display ="block";
      this.nextElementSibling.innerText="Ingresar un email válido";
      return false;
    }
  }

  //Validación de contraseña, de minimo 6 caracteres
  var contraseña = document.getElementById("input-password");
  var cantidadCaracteres = function (e) {
    var codigoTecla = e.keyCode;
    //de lo contrario que aparezca una alerta
    if (this.value.length==6 && (this.value !="123456" && this.value !="098754")){
      this.nextElementSibling.style.display ="none";
      return true;
    }
    else {
      this.nextElementSibling.style.display ="block";
      this.nextElementSibling.innerText="Ingrese una contraseña válida, de 6 caracteres";
      return false;
    }
  }
  contraseña.onblur = cantidadCaracteres;

  //Validación del selector de bicicletas, debe elegir una opcion de forma obligatoria
  var select = document.getElementById("select");
  var validarSelect = function (e){
    if(this.value =="0"){
      this.nextElementSibling.style.display ="block";
      this.nextElementSibling.innerText="Debe seleccionar una opción";
    }
    else {
      //de lo contrario, que aparezca una alerta
      this.nextElementSibling.style.display ="none";
      this.nextElementSibling.innerText="";
    }
  }
  select.onblur = validarSelect;

//Funcion de boton al momento de validar datos
  var boton = document.getElementById("aceptar");
  aceptar.addEventListener('click',function(e) {
    e.preventDefault();

    var nombre     = document.getElementById("name");
    var apellido   = document.getElementById("lastname");
    var email      = document.getElementById("input-email");
    var contraseña = document.getElementById("input-password");
    var select     = document.getElementById("select");

    if(nombre.value.length!=0 && apellido.value.length!=0 && email.value.length!=0 && contraseña.value.length!=0){
      window.location="new.html"
    }
    else{
      var alertaPrin = document.getElementById("alerta-principal");
      alertaPrin.innerText="Los 5 primeros datos son obligatorios";
    }
  });

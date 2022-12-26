function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("imaDer").style.display = "none";
    document.getElementById("textoDer1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("textoDer2").innerHTML = txtcifrado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imaDer").style.display = "none";
    document.getElementById("textoDer1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("textoDer2").innerHTML = txtcifrado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function copy() {
    var contenido = document.querySelector("#textoDer2");
    contenido.select();
    document.execCommand('copy');
    alert("Copiado!");
  }
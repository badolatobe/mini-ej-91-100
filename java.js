//91
var btnA=document.getElementById("btn1");
btnA.addEventListener("click", function(){
    alert("q hace' click?");
});

//92
var linkA=document.getElementById("link1");
linkA.addEventListener("click", function(asd){
    asd.preventDefault();
    console.log("Hiciste click en el enlace roto");
})

//93
var btnB=document.getElementById("btn2");
btnB.addEventListener("click", function(asd){
    asd=document.getElementById("parrafo1").innerHTML="Este es un texto coherente."
})

//94
var txtinputA=document.getElementById("txtimput1");
txtinputA.addEventListener("keyup", function(asd){
    if (asd.key === "Enter"){
        console.log("Texto ingresado es: "+txtinputA.value);
    }
})

//95
var colorRandom = generarColorAleatorio();
function generarColorAleatorio() {
    var letrasHex = '0123456789ABCDEF';
    var color = '#';
  
    for (var i = 0; i < 6; i++) {
      color += letrasHex[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
var colorBlanco= generarColorBlanco();
function generarColorBlanco() {
    var color= "#FFFFFF";
    return color;
}
var cuerpoDoc=document.getElementById("cuerpo");

var btnC=document.getElementById("btn3");
btnC.addEventListener("click", function(asd){
    asd=cuerpoDoc.style.backgroundColor=colorRandom;
})
var btnD=document.getElementById("btn4");
btnD.addEventListener("click", function(asd){
    asd=cuerpoDoc.style.backgroundColor=colorBlanco;
})

//96
var imgA=document.getElementById("img1");
imgA.addEventListener("mouseover", function(){
    alert("Es una rueda");
    console.log("pasaste por la rueda");
})

//97

//Para un color especifico
var colorFondoLista= generarColorLista();
function generarColorLista() {
    var color= "#7CFC00";
    return color;
}

//Reciclar código que nos genera color random
var listaA=document.getElementById("li1");
var listaB=document.getElementById("li2");
var listaC=document.getElementById("li3");
var listaD=document.getElementById("li4");
listaA.addEventListener("click", function(asd){    
    asd=listaA.style.backgroundColor=colorRandom;
})
listaB.addEventListener("click", function(asd){    
    asd=listaB.style.backgroundColor=colorRandom;
})
listaC.addEventListener("click", function(asd){    
    asd=listaC.style.backgroundColor=colorRandom;
})
listaD.addEventListener("click", function(asd){    
    asd=listaD.style.backgroundColor=colorRandom;
})

//98
var inputB=document.getElementById("input2");
var btnF=document.getElementById("btn5");
var parrafoB=document.getElementById("parrafo2");
var parrafoC=document.getElementById("parrafo3");

btnF.addEventListener("click", function(asd){
    asd.preventDefault();
    parrafoB.innerHTML="Formulario cargado exitosamente";
    let i=inputB.value;
    parrafoC.innerHTML="Nombre Completo es: "+i;
})

//99
var btnG=document.getElementById("btn6");
var imgB=document.getElementById("rueda2");

btnG.addEventListener("click", function(){
   if (imgB.style.display==="block") {
    imgB.style.display="none"; 
   }
   else {
   imgB.style.display="block";
   }  
})

//100
var btnH=document.getElementById("btn7")
btnH.addEventListener("click", function(func){
    func=window.open("http://www.google.com", "_blank");
})

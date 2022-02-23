//sorteo una palabra de mi Array
function sortearPalabra(palabras) {

    var indice = Math.floor(Math.random()*(palabras.length));
    var opcion = palabras[indice];
    return opcion;
    
}

//crear las lineas
function lineasPalabras(opArray){

    for (var i = 1; i <= opArray.length ; i++){
        pincel.fillStyle = "Black";
        pincel.font = "30pt Verdana";
        pincel.fillText("_", (300 + (50 * i)) , 700);
    }
}

function escribirLetra (letraIngresada, i){
    i =i+1
    pincel.fillStyle = "Black";
    pincel.font = "30pt Verdana";
    pincel.fillText(letraIngresada, (300 + (50 * i)) , 700);

}

function escribirLetraIncorrecta (letraIngresada, i){
    i =i+1
    pincel.fillStyle = "Black";
    pincel.font = "30pt Verdana";
    pincel.fillText(letraIngresada, (900 + (40 * i)) , 300);

}

function horca1 (intentos){
    var pantalla = document.getElementById("canvas");
    var imagen = document.getElementById(intentosImg(intentos));
    imagen.onload = function(){
    lapiz = pantalla.getContext("2d");
    lapiz.drawImage(imagen, -100 , 0);
    }
    return letrasIncorrectas.length;
}
//Modifica la imagen dependiendo los intentos

function intentosImg(intentos){
    if (intentos==0){
        var x = "horca";
    }else if (intentos == 1){
        x = "horca5";
    }else if (intentos == 2){
        x = "horca4";
    }else if (intentos == 3){
        x = "horca3";
    }else if (intentos == 4){
        x = "horca2";
    }else if (intentos == 5){
        x = "horca1";
    }
    else if (intentos == 6){
        x = "fin";
    }
    return x;
}


function tomarPalabra(){
    document.addEventListener("keydown", function(event){
        var letraIngresada = event.key.toUpperCase();
        return letraIngresada;
    });
    return letraIngresada;
}



//Selecciono la etiqueta canvas
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
//defino el array con las palabras 
var palabras = ["ALURA" , "ORACLE" , "ORTOPEDIA" , "FUTBOL" , "MISTERIO" , "HELICOPTERO" , "HELADERA" , "ESQUEMA" ];

//llamo a la funcion para sortear la palabra del array
var op = sortearPalabra(palabras);

// creo un array con las letras de la palabra seleccionada
var opArray = op.split("");
console.log(opArray);
lineasPalabras(opArray);
var acierto = false;
var intentos = 0;
var letrasIncorrectas = [];
var letrasCorrectas= [];
var letrasSeleccionadas=[];
var letraIngresada = "";


   
    document.addEventListener("keydown", function(event){
        letraIngresada = event.key.toUpperCase();
    });
 
for (var i = 0 ; intento<6 ; i++){
    chequear(opArray,letraIngresada,intentos,letrasIncorrectas);
    
}



function chequear (opArray,letraIngresada,intentos,letrasIncorrectas){
    for (var i = 0 ; i<opArray.length ; i++){
        if (opArray[i]==letraIngresada){
            escribirLetra(letraIngresada,i);
        }else{
            if (letrasIncorrectas.includes(letraIngresada)){

            }else{
                escribirLetraIncorrecta(letraIngresada, i );
                letrasIncorrectas.push(letraIngresada);
                intentos++;
            }
        }
    }
    return intentos;
}

horca1(letrasIncorrectas.length)
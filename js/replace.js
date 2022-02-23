function sortearPalabra(palabras) {
    var indice = Math.floor(Math.random()*(palabras.length));
    var opcion = palabras[indice];
    return opcion;
}

function dibujarLineas(i){   
    for(var p=0;p<i;p++){
            pincel.fillStyle = "Black";
            pincel.font = "30pt Verdana";
            pincel.fillText("_", (700 + (40 * p)) , 700);    
        }     
}

function dibujarLetrasCorrectas(i,a){   
    pincel.fillStyle = "Black";
    pincel.font = "30pt Verdana";
    pincel.fillText(a, (700 + (40 * i)) , 700);         
}

function dibujarLetrasIncorrectas(i,a){   
    pincel.fillStyle = "Black";
    pincel.font = "30pt Verdana";
    pincel.fillText(a, (700 + (40 * i)) , 300);         
}

function intentosImg(intentos){
    if ((intentos==0) || (intentos > 6)){
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

function horca1 (intentos){
    var pantalla = document.getElementById("canvas");
    var imagen = document.getElementById(intentosImg(intentos));
    imagen.onload = function(){
    lapiz = pantalla.getContext("2d");
    lapiz.drawImage(imagen, -50 , 0);
    }
}


var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var palabras = ["ALURA" , "ORACLE" , "ORTOPEDIA" , "FUTBOL" , "MISTERIO" , "HELICOPTERO" , "HELADERA" , "ESQUEMA" ];
var op = sortearPalabra(palabras);
var opArray = op.split("");
console.log(opArray);
var letrasIncorrectas = [];
var letrasCorrectas= [];
var espacioLetras=[];
var letraIngresada = "";
var lg = "_";
var intentos = 0;
dibujarLineas(opArray.length);


document.addEventListener("keydown", function(event){
    letraIngresada = event.key.toUpperCase()

    for (var i = 0 ; i < opArray.length ; i++){
        
        
        
        if(opArray.includes(letraIngresada)){    
                if(opArray[i] == letraIngresada){
                    dibujarLetrasCorrectas(i,letraIngresada);
                    if(!letrasCorrectas.includes(letraIngresada)){
                        
                        letrasCorrectas.push(letraIngresada);
                    }
                
            }
        }else if(letrasIncorrectas.includes(letraIngresada)){

            }else{
               
                
                letrasIncorrectas.push(letraIngresada);
                dibujarLetrasIncorrectas(i,letrasIncorrectas);

                
            }
            
        }  
        intentos = letrasIncorrectas.length;
        intentosImg(intentos);
        horca1(intentos);
        
        
});

console.log(espacioLetras)


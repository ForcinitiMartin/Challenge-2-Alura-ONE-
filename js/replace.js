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

function dibujarLetrasCorrectas(i,a,){   
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
    
    if (intentos==0){
         dibujo_ini();
    }else if (intentos == 1){
        dibujo_1();
    }else if (intentos == 2){
        dibujo_2();
    }else if (intentos == 3){
        dibujo_3();
    }else if (intentos == 4){
        dibujo_4();
    }else if (intentos == 5){
        dibujo_5();
    }
    else if (intentos == 6){
        dibujo_fin();
    }
    
}

function dibujo_ini(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_pos_ini.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
        }
    }

    function dibujo_1(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_pos_1.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
        }
    }

    function dibujo_2(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_pos_2.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
        }
    }

    function dibujo_3(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_pos_3.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
        }
    }

    function dibujo_4(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_pos_4.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
        }
    }

    function dibujo_5(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_pos_5.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
        }
    }

    function dibujo_fin(){
        var micanvas = document.getElementById("canvas");
        var ctx = micanvas.getContext("2d");
        var img = new Image();
        img.src = "img/ahorcado_0.png";
        img.onload = function(){
            ctx.drawImage(img, 10, 0);
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
const cheq = new Set(opArray);
let resultado = [...cheq];

   dibujo_ini(); 
    document.addEventListener("keydown", function(event){
    letraIngresada = event.key.toUpperCase()

    
    for (var i = 0 ; i < opArray.length ; i++){
        
        
        
        if(opArray.includes(letraIngresada)){    
                if(opArray[i] == letraIngresada){
                    
                    dibujarLetrasCorrectas(i,letraIngresada);
                    
                    if(!letrasCorrectas.includes(letraIngresada)){
                        
                        letrasCorrectas.push(letraIngresada);
                        if(letrasCorrectas.length == resultado.length){
                            alert("Felicidades, Gano el Juego");
                        }
                        
                    }
                
            }
        }else if(letrasIncorrectas.includes(letraIngresada)){

            }else{
               
                
                letrasIncorrectas.push(letraIngresada);
                dibujarLetrasIncorrectas(i,letrasIncorrectas);
                if(intentos<5){

                }else{
                    alert("Fin del juego");
                }
                
            }
            
        }  
        intentos = letrasIncorrectas.length;
        intentosImg(intentos);
       
        
        
        
});


console.log(espacioLetras)


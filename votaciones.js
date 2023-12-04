universidades = prompt("DIGITA EL NUMERO DE UNIVERSIDADES");

numero = 0
var arreglo = [];
var contador = 0;
var aceptar = 0;
var rechazar = 0;
var blanco = 0;
var nulo = 0;
while(numero != universidades){
    numero+=1;
    Name = prompt("Digite el nombre de la universidad").toUpperCase()
    var votos = prompt("Digita el voto \n(A) Aceptar\n(R) Rechazar\n(N) Nulo\n(B) Blanco\n(X) Guardar los votos").toUpperCase();
    if (votos == "A" || votos == "R" || votos == "N" || votos == "B"){
        arreglo.push([Name,votos])
    }
    else{
        alert ("Error en los datos ingresados");
    }
    while(votos != "X"){
        votos = prompt("Digita el voto \n(A) Aceptar\n(R) Rechazar\n(N) Nulo\n(B) Blanco\n(X) Guardar los votos").toUpperCase();
        if (votos == "A" || votos == "R" || votos == "N" || votos == "B"){
            arreglo[contador].push(votos)
        }
        else if(votos == "X") {
            alert("Gracias por votar");
            votos = "X"
            break;
        }
        else{
            alert("Votos no validos");
            break;
        }
    }
    contador+=1
}


arreglo.forEach(element => {
    element.forEach(voto =>{
        if(voto != "A" && voto != "R" && voto != "N" && voto != "B"){
            console.log("Universidad: "+voto);
        }
        else{
            if(voto == "A"){
                aceptar +=1;
            }
            else if(voto == "R"){
                rechazar +=1;
            }
            else if(voto == "N"){
                nulo +=1;
            }
            else if(voto == "B"){
                blanco +=1;
            }
            console.log("voto = "+voto);
        }
    })
    console.log(`${element[0]}: ${aceptar} aceptan, ${rechazar} rechazan, ${blanco} blancos, ${nulo} nulos`);
    aceptar = 0, rechazar = 0, blanco = 0, nulo =0
});
console.log(arreglo);
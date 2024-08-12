const Pitido = prompt("emite pitido su pc si/no");
const DiscoDuro = prompt("El disco duro gira si/no");

if (Pitido == "si" && DiscoDuro == "si"){ 
    console.log("Póngase en contacto con el técnico apoyo.")
}
else if (Pitido == "si" && DiscoDuro == "no"){
    console.log("Verificar contactos de la unidad")
}
else if (Pitido == "no" && DiscoDuro == "si"){
    console.log("Compruebe las conexiones de altavoces")  
}
else if (Pitido == "no" && DiscoDuro == "no"){
    console.log("Traiga la computadora para repararla en la central.")
}
else{
    console.log("respuesta no valida")
}
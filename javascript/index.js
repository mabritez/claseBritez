let bienvenido = alert("bienvenido a dulcemente")

let nombreDeUsiario = prompt("ingrese su ususario");

while(nombreDeUsiario != "matias"){
    alert("usuario incorrecto");
    nombreDeUsiario= prompt("debe ingresar su nombre de usuario");
}

let tortas = prompt("indique cuantas porciones va a querer");
if((tortas >= 2) && ( tortas <=3)){
    alert("tiene una infusion sin cargo");
    let infusion=prompt("elija te o cafe");
    
}else if((tortas >= 4) && ( tortas <=6)){
    alert("tiene dos infusiones sin cargo");
    let infusion=prompt("elija te o cafe");
    infusion= alert("usted eligio:"+ infusion);
    infusion= alert("muchas gracias por su pedido");
    
}else{
    alert("muchas gracias por su pedido");
}

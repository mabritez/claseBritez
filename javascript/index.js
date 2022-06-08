
const brownie= 300
const cheesecake = 350
const appleCrumble = 300
const tarta = 350

let precioTortas = 0
let total= 0

let tortaElegida;
let Pedido ='';


function operacion(valor1, valor2, operacion) {
    switch (operacion){
            case "1":
                return valor1 + valor2;
                break;
            case "2":
                return valor1 - valor2;
                break;
            case "3":
                return valor1 * valor2;
                break;
            case "4":
                return valor1 / valor2;
                break;
            default:
            return 0;
                break;

        }
}

function cantidad(texto) {
    let valor = prompt(texto);
    while (isNaN(parseInt(valor)) ) {
        valor = prompt(texto);
    }
    return valor;
}
let bienvenido = alert("bienvenido a dulcemente")

let nombreDeUsiario = prompt("ingrese su ususario");

while(nombreDeUsiario != "matias"){
    alert("usuario incorrecto");
    nombreDeUsiario= prompt("debe ingresar su nombre de usuario");
}

let porciones = cantidad("cuantas porciones quiere?")

if (porciones>0) 
    {
    for (i=1;i <=porciones ;i++ )
       { 
        tortaElegida = cantidad("por favor elija su porcion :"+ i + " \n 1-brownie $"+ brownie + " \n 2. cheesecake $"+ cheesecake+ "\n 3. apple crumble $" + appleCrumble + "\n 4.tarta de frutos rojos $" + tarta );

         while ((tortaElegida != 1) && (tortaElegida >4))
             {tortaElegida = cantidad("esta opcion no esta disponible, elegi nuevamente tu porcion N°:"+ i + " \n 1-brownie $"+ brownie + " \n 2. cheesecake $"+ cheesecake+ "\n 3. apple crumble $" + appleCrumble + "\n 4.tarta de frutos rojos $" + tarta);}
         
         if (tortaElegida==1) 
             { 
                precioTortas=operacion(precioTortas,brownie,"1") ;
                Pedido = operacion(Pedido,"brownie: $"+ brownie + " \n","1") ;
            }else if(tortaElegida==2 ){
                precioTortas=operacion(precioTortas,cheesecake,"1") ;
                Pedido = operacion(Pedido,"cheesecake: $"+ cheesecake + " \n","1") ;
            }else if(tortaElegida==3){
                precioTortas=operacion(precioTortas,appleCrumble,"1") ;
                Pedido = operacion(Pedido,"apple crumble: $"+ appleCrumble + " \n","1") ;
            }else if(tortaElegida==4){
                precioTortas=operacion(precioTortas,tarta,"1") ;
                Pedido = operacion(Pedido,"tarta de frutos rojos: $"+ tarta + " \n","1") ;
            }else
                alert("muchas gracias por realizar su pedido")
               
        }

    }
    
    alert(Pedido + "\n\n                   El total de su pedido es: " + precioTortas );
    

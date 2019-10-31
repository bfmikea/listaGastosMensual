//Variables 
const presupuestoUsuario = prompt('Cual es tu presupuesto mensual?');
let cantidadPresupuesto;
console.log(presupuestoUsuario);

//Clases 
//Class Presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    //Metodo para ir restando del presupuesto actual
    presupuestoRestante( cantidad = 0){
        return this.restante -= Number(cantidad);

    }
}

//Clase interfaz maneja todo lo relacionado al HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        //Obtengo los elementos donde voy a insertar presupuesto y restante
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar al HTML el presupuesto y el restante
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
}

//Event listeners
document.addEventListener('DOMContentLoaded', function(){
    //Compruebo que se inserte algun valor que sea distinto de null y ""
    if(presupuestoUsuario === null || presupuestoUsuario === '' ){
        //Mientras que sea igual a null y "" recargo la ventana
        windows.location.reload();
    }else{
        //Instanciar un presupuesto. Creamos una instancia de la clase Presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //Instanciar la clase de Interfaz
        let ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto)

        
    }    
    
})

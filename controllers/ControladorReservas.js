import { ServicioReservas } from "../services/ServicioReservas.js";
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js";

//para reservar exista habitacion

export class ControladorReservas{

    constructor(){}

    async registrandoReserva(peticion,respuesta){

        let datosReserva=peticion.body

        let servicioReserva=new ServicioReservas()
	    let servicioHabitaciones = new ServicioHabitaciones()

        try{
		// Validacion que la habitacion existe para poder hacer la reserva.
		
	    let habitacion = await servicioHabitaciones.buscarHabitacion(datosReserva.idHabitacionReserva);


        console.log('Info habitacion:', habitacion);//traemos la info de la habitacion, guardamos habitacion y se pregunta, sí existe entra a recibir los datos para obtener la fecha y calcular cuantos días se quedo.

      // Guardar la reserva en la base de datos
           

      if (await servicioReservas.activo(datosReserva.idHabitacion) == null) { //verificamos y confirmamos los datos de la habitacion y en caso contrario que no existan  // if(habitacion){

        //definimos las peticiones para con ellas tener las respuestas
        //en este caso iniciamos con las fechas de reserva se validen las fechas y estas no queden menor a la fecha final

        let fechaInicio = datosReserva.fechaInicio
        let fechaFin = datosReserva.fechaFinal
        let diferencia = new Date(fechaFin) - new Date(fechaInicio) //como pasar una resta de fechas a dias en js


        if (fechadias >= 0) { // si esto es inferior si la fecha da menos dias hacemos lo siguiente: 

          let fechadias = diferencia / (1000 * 60 * 60 * 24) ///obtenemos la diferencia en dias

          let costo = habitacion.precioNoche * fechadias //que por los dias calcule el costo por noche

          datosReserva.costo = costo;

          console.log("El precio de la habitacion según la cantidad de personas es de " + datosReserva.costoReserva);//llamemos el precio de la habitacion

          await servicioReservas.registrarReserva(datosReserva)
          respuesta.status(200).json({
            "mensaje": "Se ha registrado los datos exitosamente"
          })
        } else {
          respuesta.status(400).json({
            mensaje: "Fecha invalida, No tenemos maquina de tiempo para volver al pasado :("
          })
        }
      } else {
        respuesta.status(400).json({
          "mensaje": "No podemos reservar una habitación que no existe"
        })
      }
      /*respuesta.status(200).json({
        inicio: fechaInicio, 
        final: fechaFin,
        mensaje: costo,
      })*/

    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Fallamos en la reserva " + errorPeticion
      })
    }

  }

  async buscarReserva(peticion, respuesta) {
    let idReserva = peticion.params.idreserva //params es de express, 
    let servicioReserva = new ServicioReservas()
    // console.log("La habitacion a buscar es: "+idReserva) para probar por consola
    try {
      respuesta.status(200).json({
        mensaje: "Success search the reserve",
        "reserva": await servicioReserva.buscarReserva(idReserva)
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async buscarReservaciones(peticion, respuesta) {
    let servicioReserva = new ServicioReservas()
    try {
      respuesta.status(200).json({
        mensaje: "Success search the reserves",
        "reservaciones": await servicioReserva.buscarTodasReservas()
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async editarReserva(peticion, respuesta) {
    let idReserva = peticion.params.idreserva
    let datosReserva = peticion.body
    let servicioReserva = new ServicioReservas()
    try {
      await servicioReserva.editarReserva(idReserva, datosReserva)
      respuesta.status(200).json({
        mensaje: "Success editing the reserve",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async eliminarreserva(peticion, respuesta) {
    let idReserva = peticion.params.idreserva
    let datosReserva = peticion.body
    let servicioReserva = new ServicioReservas()
    try {
      await servicioReserva.eliminarreserva(idReserva, datosReserva)
      respuesta.status(200).json({
        mensaje: "Success delete the reserve",
      });
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }

  }


}

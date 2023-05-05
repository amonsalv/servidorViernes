import { ServicioReservas } from "../services/ServicioReservas.js";
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js";

//para reservar exista habitacion
//que por los dias calcule el costo por noche
//que se validen las fechas y estas no queden menor a la fecha final

export class ControladorReservas {
  constructor() {}

  
  async registrarReserva(peticion, respuesta) {
    const servicioHabitaciones = new ServicioHabitaciones();
    const servicioReservas = new ServicioReservas();

    let datosReserva=peticion.body

    let habitacion=await servicioHabitaciones.buscarHabitacion(datosReserva.idHabitacion)
    if(habitacion!=null){
     
      let fechaInicio=datosReserva.fechaInicio
      let fechaFin=datosReserva.fechaFinal
      let diferencia=  new Date(fechaFin) - new Date(fechaInicio) //como pasar una resta de fechas a dias en js
      let fechadias= diferencia /  (1000 * 60 * 60 * 24)
      
      let costo=habitacion.precioNoche*fechadias

      respuesta.status(200).json({
        inicio:fechaInicio,
        final:fechaFin,
        mensaje: costo,
        
      })

    }
    else{
      respuesta.status(200).json({
        mensaje: "Habitacion NO existe"
      })

    }

    // Guardar la reserva en la base de datos
    datosReserva.costo= costo;
    await servicioReservas.registrarReserva(datosReserva);

    //verificar la reserva
    if(await servicioReservas.activo(datosReserva.idHabitacion) == null){

    }else{
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
    }

  }

  async buscarReserva(peticion, respuesta) {
    let idReserva=peticion.params.idreserva //params es de express, 
    let servicioReserva= new ServicioReservas()
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
    let servicioReserva= new ServicioReservas()
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
    let idReserva=peticion.params.idreserva
    let datosReserva=peticion.body
    let servicioReserva= new ServicioReservas()
    try {
      await servicioReserva.editarReserva(idReserva,datosReserva)
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

  async eliminarreserva(peticion, respuesta){
    let idReserva=peticion.params.idreserva
    let datosReserva=peticion.body
    let servicioReserva= new ServicioReservas()
    try {
      await servicioReserva.eliminarreserva(idReserva,datosReserva)
      respuesta.status(200).json({
        mensaje: "Success delete the reserve",
      });      
    }catch(errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }

  }


}

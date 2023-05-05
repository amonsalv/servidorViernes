import { ServicioReservas } from "../services/ServicioReservas.js";
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js";

//para reservar exista habitacion
//que por los dias calcule el costo por noche
//que se validen las fechas y estas no queden menor a la fecha final

export class ControladorReservas {
  constructor() {}

  
  async reservarHabitacion(datosReserva, numDias) {
    const servicioHabitaciones = new ServicioHabitaciones();
    const servicioReservas = new ServicioReservas();
  
    // Verificar que la habitación esté disponible
    const habitacionDisponible = await servicioHabitaciones.verificarDisponibilidad(datosReserva.idHabitacion, datosReserva.fechaInicio, datosReserva.fechaFin);
    if (!habitacionDisponible) {
      throw new Error("La habitación no está disponible en esas fechas");
    }
  
    // Calcular el costo total de la reserva
    const costoNoche = await servicioHabitaciones.obtenerCostoNoche(datosReserva.idHabitacion);
    const costoTotal = costoNoche * numDias;
  
    // Guardar la reserva en la base de datos
    datosReserva.costoTotal = costoTotal;
    await servicioReservas.registrarReserva(datosReserva);
  }

  async registrarReserva(peticion, respuesta) {
    //van a llegar los datos de la habitacion, y revise el dato de la peticion
    let datosReserva=peticion.body
    let servicioReserva=new ServicioReservas()
    //console.log(datosReserva)


    try {
      await servicioReserva.registrarReserva(datosReserva)
       respuesta.status(200).json({
        mensaje: "Success reserving the data",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
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

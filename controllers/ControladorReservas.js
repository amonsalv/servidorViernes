import { ServicioReservas } from "../services/ServicioReservas.js";

export class ControladorReservas {
  constructor() {}

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


}

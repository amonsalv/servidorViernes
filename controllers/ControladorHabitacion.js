//Estas mayusculas del proyecto es por que son clases
// tenemos que hacer 4 peticiones distintas, osea cuantos metodos distintos
import { ServicioHabitaciones } from "../services/ServicioHabitaciones.js";
export class ControladorHabitacion {

  constructor() {}

  async registrarHabitacion(peticion, respuesta) {//van a llegar los datos de la habitacion, y revise el dato de la peticion

    let datosHabitacion=peticion.body
    let servicioHabitacion=ServicioHabitaciones()
    
    try {
      await servicioHabitacion.registrarHabitacion(datosHabitacion)
      respuesta.status(200).json({
        "mensaje": "Success adding the data",
      }); //dentro del objeto ponemos nuestros atributos //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  async buscarHabitacion(peticion, respuesta) {
    let idHabitacion=peticion.params.idhabitacion //params es de express, 
    let servicioHabitacion= new ServicioHabitaciones()
   // console.log("La habitacion a buscar es: "+idHabitacion) para probar por consola
    try {
      respuesta.status(200).json({
        "mensaje": "Success search the room"+idHabitacion,
        "habitacion": await servicioHabitacion.buscarHabitacion(idHabitacion)
      }); //dentro del objeto ponemos nuestros atributos //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }; //Buscamos el id de habitacion

  async buscarabitaciones(peticion,respuesta) {
    let servicioHabitacion=new ServicioHabitaciones()
    try {
      respuesta.status(200).json({
        "mensaje": "Success search the room",
        "habitacion": await servicioHabitacion.buscarHabitaciones(idHabitacion)
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  } // no se necesita por que busca todas las habitaciones, pero debe de haber una peticion y respuesta de esto

  async editandoHabitacion(peticion, respuesta) {
    let idHabitacion=peticion.params.idhabitacion
    let datosHabitacion=peticion.body
    let servicioHabitacion= new ServicioHabitaciones()
    try {
      await servicioHabitacion.editarHabitacion(idHabitacion)
      respuesta.status(200).json({
        "mensaje": "Success editing the room",         
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  } //
}

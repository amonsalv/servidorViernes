//Estas mayusculas del proyecto es por que son clases
// tenemos que hacer 4 peticiones distintas, osea cuantos metodos distintos
export class ControladorHabitacion {
  constructor() {}

  registrarHabitacion(peticion, respuesta) {//van a llegar los datos de la habitacion, y revise el dato de la peticion

    let datosHabitacion=peticion.body
    console.log(datosHabitacion)
    
    try {
      respuesta.status(200).json({
        "mensaje": "Success adding the data",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  buscarHabitacion(peticion, respuesta) {
    let idHabitacion=peticion.params.idhabitacion //params es de express, 
   // console.log("La habitacion a buscar es: "+idHabitacion) para probar por consola
    try {
      respuesta.status(200).json({
        "mensaje": "Success search the room",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  } //Buscamos el id de habitacion

  buscarabitaciones(peticion, respuesta) {
    try {
      respuesta.status(200).json({
        "mensaje": "Success search the room",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        "mensaje": "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  } // no se necesita por que busca todas las habitaciones, pero debe de haber una peticion y respuesta de esto

  editandoHabitacion(peticion, respuesta) {
    try {
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

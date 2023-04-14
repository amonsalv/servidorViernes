export class ControladorReservas {
  constructor() {}

  registrarReserva(peticion, respuesta) {
    //van a llegar los datos de la habitacion, y revise el dato de la peticion
    try {
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

  buscarReserva(peticion, respuesta) {
    let idReserva=peticion.params.idreserva //params es de express, 
    // console.log("La habitacion a buscar es: "+idReserva) para probar por consola
    try {
      respuesta.status(200).json({
        mensaje: "Success search the reserve",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  buscarReservaciones(peticion, respuesta) {
    try {
      respuesta.status(200).json({
        mensaje: "Success search the reserves",
      }); //dentro del objeto ponemos nuestros atributos
      //el try es por que funciono
    } catch (errorPeticion) {
      respuesta.status(400).json({
        mensaje: "Failed " + errorPeticion,
      });
      //cuando no funciono, error humano
    }
  }

  editarReserva(peticion, respuesta) {
    let idReserva=peticion.params.idreserva
    let datosReserva=peticion.body
    try {
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

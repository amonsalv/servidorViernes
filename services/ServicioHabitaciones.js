import { modeloHabitacion } from "../models/modeloHabitacion.js";
export class ServicioHabitaciones{

    constructor(){}

    async resgistrar(datosHabitacion){

        let habitacionNueva=new modeloHabitacion(datos) //debo asegurarme de que cumplan el modelo de datos de habitacion
        return await habitacionNueva.save() //nos salve los datos

    } 
    async buscarTodasHabitaciones(){
        let habitacionesConsultadas=await modeloHabitacion.find() //el controlador responda con los datos que encontro
        return habitacionesConsultadas
    }
    async buscarHabitaciones(idHabitacion){
        let habitacionesConsultada=await modeloHabitacion.findById(idHabitacion) //el controlador responda con los datos que encontro
        return habitacionesConsultada}
    async editarHabitacion(idHabitacion,datosHabitacion){
        return await modeloHabitacion.findByIdAndUpdate(idHabitacion,datosHabitacion) //operacion de escritura
    }

}
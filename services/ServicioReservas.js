import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReservas{

    constructor(){}

    async registrarReserva(datosReserva){
        let nuevareserva= new modeloReserva(datosReserva)
        return await nuevareserva.save()
    }

    async buscarTodasReservas(){
        let reservasConsultadas=await modeloReserva.find()
        return reservasConsultadas
    }

    async buscarReserva(idReserva){
        let reservasConsultada= await modeloReserva.findById(idReserva)
        return reservasConsultada
    }

    async editarReserva(idReserva,datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }

    async eliminarreserva(idReserva,datosReserva){
        return await modeloReserva.findByIdAndDelete(idReserva,datosReserva)
    }

    async activo(id){
        return await modeloReserva.find({"estado":1,"idHabitacion":id})
    }
}

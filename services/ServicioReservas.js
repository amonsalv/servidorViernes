import { modeloReserva } from "../models/modeloReserva.js";
export class ServicioReservas{

    constructor(){}

    async registrarReserva(datosReserva){
        let nuevareserva= new modeloReserv(datosReserva)
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

    
}

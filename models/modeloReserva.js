import mongoose from 'mongoose';

const Schema = mongoose.Schema; //voy a definir un esquema de datos

//Tarea: hacer nombre de la persona, apellido, telefono, fecha inicio, fecha final, numero de personas, id de habitacion de reserva

//construimos el esquema personalizando la informacion
const Reserva=new Schema ({
    nombre: {
        type:String,
        required:true
    }, //otro objeto para poner el tipo de dato
    apellido: {
        type:String,
        required:true
    },
    numeroTel:{
        type:Number,
        required:true
    },
    fechaInicio: {
        type:Date,
        required:true
    },
    fechaFinal: {
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    idHabitacion:{
        type:String,
        required:true
    },
    costo:{
        type:String,
        required:false
    },
    estado:{
        type:Number,
        default:0
    }
    
})

export const modeloReserva=mongoose.model('reserva',Reserva)

//otra tarea, traer fotos para la habitacion: mismotamaño 2 para cada habitacion, 5 habitaciones
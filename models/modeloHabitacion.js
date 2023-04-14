import mongoose from 'mongoose';

const Schema = mongoose.Schema; //voy a definir un esquema de datos

//construimos el esquema personalizando la informacion
const Habitacion=new Schema ({
    nombre: {
        type:String,
        required:true
    }, //otro objeto para poner el tipo de dato
    foto:{
        type:[String],
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precioNoche:{
        type:Number,
        required:true
    },
    cantMaxima:{
        type:Number,
        required:true
    }
}) //

export const modeloHabitacion=mongoose.model('habitacion',Habitacion)
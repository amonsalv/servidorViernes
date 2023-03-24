import express from 'express'
import {rutas} from './routes/rutas.js'

export class API{
    constructor(){
        this.app = express() //app es express
        this.routingRequests()
    }

    serverAwakeing(){
        this.app.listen(3000,()=>console.log("Servidor encendido...")) //variable de entorno
    }
    routingRequests(){
        this.app.use('/',rutas)
    }
    connectDB(){}

}

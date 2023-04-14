import express from "express";
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'//traemos el controlador de habitacion y llamamos el constructor
import { ControladorReservas } from '../controllers/ControladorReservas.js'//traemos el controlador de reservas y llamamos el constructor

let controladorHabitacion = new ControladorHabitacion()
let controladorReservas = new ControladorReservas()

//para separar las rutas de la logica de negocio
//Utilizare un metodo especial de express

//tarea de hacer las reservas

export let rutas = express.Router();

rutas.post("/registrarhabitacion",controladorHabitacion.registrarHabitacion) //debemos de llamar el controlador para que procese esa informacion
rutas.get("/buscarhabitaciones",controladorHabitacion.buscarabitaciones)
rutas.get("/buscarhabitacion/:idhabitacion",controladorHabitacion.buscarHabitacion) //para buscar la habitacion tenemos que mandar el dato, el id va a hacer una variable que va a cambiar
rutas.put("/actualizarhabitacion/:idhabitaciones",controladorHabitacion.editandoHabitacion) //recomendacion tener esto en minusculas


//Tarea cree un nuevo controlador, llamado controlador de reservas
//agregamos los faltantes, reservar habitacion 
rutas.post("/registrarreserva",controladorReservas.registrarReserva)
rutas.get("/buscarreserva/:idreserva",controladorReservas.buscarReserva)
rutas.get("/buscarresevaciones",controladorReservas.buscarReservaciones)
rutas.put("/editarresevaciones",controladorReservas.editarReserva)
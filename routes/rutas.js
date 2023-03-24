import express from "express";

//para separar las rutas de la logica de negocio
//Utilizare un metodo especial de express

export let rutas = express.Router();


rutas.post("/registrarhabitacion", function (req, res) {
  res.send("we are checking the room");
});

rutas.get("/buscarhabitaciones", function (req, res) {
  res.send("we are looking for all rooms");
});

rutas.get("/buscarhabitacion", function (req, res) {
  res.send("we are looking for 1 room");
});

rutas.put("/actualizarhabitacion", function (req, res) {
  res.send("we are updating 1 room");
});

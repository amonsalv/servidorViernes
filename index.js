//Listado de los servicios
app.post('/registrarhabitacion', function (req, res) {
    res.send('we are checking the room')
  })
  
  app.get('/buscarhabitaciones', function (req, res) {
      res.send('we are looking for all rooms')
  })
  
  app.get('/buscarhabitacion', function (req, res) {
      res.send('we are looking for 1 room')
  })
  
  app.put('/actualizarhabitacion', function (req, res) {
      res.send('we are updating 1 room')
  })
  
  app.listen(3000,function(){
      console.log("Server on...")
  })
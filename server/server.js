    const express = require('express');
    const path = require('path');
    const app = express();
    const sensor = require('node-dht-sensor');

    app.get('/temperature', function (req, res) {
      sensor.read(11, 17, function (err, temperature, 
    humidity) {
        if (!err) {
          console.log(temperature)
          res.send('<strong>' + temperature.toFixed(1) + '</strong>' + '°C');
        }
      });
    });

    app.get('/humidity', function (req, res) {
      sensor.read(11, 17, function (err, temperature, 
    humidity) {
        if (!err) {
          res.send(humidity.toFixed(1) + '%');

        }
      });
    });

    app.get('/public', function (req, res) {
      res.sendFile(path.join(__dirname, 'index.html'))
    })

    app.listen(3000, function(){
      console.log('Server listening on port 3000');
    });



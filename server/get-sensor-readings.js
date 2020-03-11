var sensor = require('node-dht-sensor')

/*
We abstract away the functionality to read sensor information inside the getSensorReadings function.
This function is also asynchronous. It accepts a callback function as an argument.
*/
const getSensorReadings = (callback) => {
  sensor.read(11, 17, function (err, temperature, humidity) {
    callback(null, temperature, humidity)
  });
};


module.exports = getSensorReadings

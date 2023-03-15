const fs = require('fs');

// Paso 1: leer el archivo input.json
const data = JSON.parse(fs.readFileSync('input.json'));

// Paso 2: agrupar las ciudades por su clima similar
const weatherGroups = {};

data.cities.forEach(city => {
  const weather = city.weather;
  if (!weatherGroups[weather]) {
    weatherGroups[weather] = [];
  }
  weatherGroups[weather].push(city);
});

// Paso 3: crear una lista de objetos para el resultado final
const output = [];

Object.keys(weatherGroups).forEach(weather => {
  output.push({
    weather: weather,
    cities: weatherGroups[weather]
  });
});

// Paso 4: escribir el resultado en el archivo output.json
fs.writeFileSync('output.json', JSON.stringify(output, null, 2));
console.log('¡Proceso completado!');


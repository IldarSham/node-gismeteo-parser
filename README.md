# node-gismeteo-parser
Simple node.js library for gismeteo weather

## Installation
```cmd
npm i node-gismeteo-parser
```

## Usage

```js
const GismeteoParser = require('node-gismeteo-parser');
const gismeteo = new GismeteoParser();

gismeteo.getWeather('/weather-ufa-4588').then(r => {
  // returns an object with information about the weather
});
```

Property | Description
--- | --- 
temp | Temperature (°C)
feels_like | Perceived temperature (°C)
sunrise | Sunrise time
sunset | Sunset time
condition | Weather condition
wind.speed | Wind speed (m/s)
wind.direction | Wind direction
pressure | Pressure (mm Hg) 
humidity | Humidity
gm_activity | Geomagnetic activity (points)
temp_water | Water temperature (°C)

### City search
```js
gismeteo.searchCity('Ufa').then(r => {
  // returns an object with information about the city
  let url = r.items[0].url; 
  gismeteo.getWeather(url).then(r => {
    // returns an object with information about the weather
  });
});
```

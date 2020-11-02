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

gismeteo.getWeather('weather-ufa-4588').then(r => {
  // returns an object with information about the weather
});
```

Property | Description
--- | --- 
Test | Test

### Text length limit 
City search

```js
gismeteo.searchCity('Уфа').then(r => {
  // returns an object with information about the city
});
```

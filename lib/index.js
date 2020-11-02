const request = require('./request');

const now = require('./parse/now');

const periods = ['now'];

class GismeteoParser {
  async searchCity(name) {
    return await request(`/q/search/${name}/`);
  }

  async getWeather(city_url, period = 'now') {
    if (!periods.includes(period)) {
      throw new Error(`unknown period: ${period}`);
    } 

    let url = `${city_url}${period}/`;

    let r = await request(url);

    let obj = {};

    if (period == 'now') {
      let result = r.match(now);

      obj.temp = result[1].replace(/&minus;/, '-') + (result[2] ? '.' + result[2] : '') + ' °C';
      obj.feels_like = result[3].replace(/&minus;/, '-') + ' °C';
      obj.sunrise = result[4];
      obj.sunset = result[5];
      obj.condition = result[6];
      obj.wind = {
        speed: result[7] + " м/c",
        direction: result[8]
      };
      obj.pressure = result[9] + ' мм рт. ст.';
      obj.humidity = result[10] + '%';
      obj.gm_activity = result[11] + '/9 баллов';
      obj.temp_water = result[12].replace(/,/, '.') + ' °C';
    }

    return obj; 
  }
}

module.exports = GismeteoParser;
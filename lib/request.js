const needle = require('needle');

const host = 'https://www.gismeteo.ru';

module.exports = async (path) => {
  const options = {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.284 (Edition Yx 05)' }
  }

  const uri = host + path
  const r = await needle(encodeURI(uri), options);

  if (r.statusCode === 200 && r.body) {
    return r.body;
  } else {
    throw new Error("request error: " + r.statusCode);
  }
}
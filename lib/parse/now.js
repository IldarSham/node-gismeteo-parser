const regexp = `\
js_value tab-weather__value_l">\\s+(.+?)(?:\\s|<span class="tab-weather__value_m">,(\\d+)</span>)\
.+?\
feel-value"><span class="unit unit_temperature_c">\\s+(.+?)\\s\
.+?\
nowastro__time">(.+?)</div>\
.+?\
nowastro__time">(.+?)</div>\
.+?\
tip _top _center">(.+?)</span>\
.+?\
unit_wind_m_s"><div class="nowinfo__value">\\s+(.+?)\\s.+?<br>\\s+(.+?)\\s\
.+?\
pressure_mm_hg_atm"><div class="nowinfo__value">(\\d+)</div>\
.+?\
value">(\\d+)</div><div class="nowinfo__measure">%</div>\
.+?\
nowinfo__value">(\\d)</div>\
.+?\
nowinfo__value">(.+?)</div>\
`;

const flags = 's';

module.exports = new RegExp(regexp, flags);
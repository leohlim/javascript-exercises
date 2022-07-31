const ftoc = function(fahrenheit) {

  // °C = ([°F] − 32) × 5⁄9

  let ftocelsius = Math.round(((fahrenheit - 32) * 5/9) * 10)/ 10;
  return ftocelsius;

};

const ctof = function(celsius) {
  // F = [°C] × (9⁄5) + 32 
let ctofahrenheit = Math.round(((celsius) * (9/5) + 32) * 10) / 10;
return ctofahrenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

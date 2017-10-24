var temperature = 20;
var itsRaining = false;
var minutes;
var TempNorm = 20;
if(itsRaining || temperature > 35 || temperature < 0) {
  minutes = 0;
  console.log("Прогулка не может состояться")
}
else if(temperature <= 20) {
  minutes = temperature;
  console.log('Прогулка составит ' + minutes + ' минут')
}
else if(temperature > 20) {
  minutes = TempNorm - (temperature - TempNorm);
  console.log('Прогулка составит ' + minutes + ' минут')
}
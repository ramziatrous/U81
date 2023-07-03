

const axios = require ('axios');
const apikey = 'e90eb26ee4fc91193ecd9a042e920a53';
const stadt = process.argv[2];

const apiurl = `http://api.openweathermap.org/data/2.5/forecast?q=${stadt}&appid=${apikey}`

axios.get(apiurl)
.then(response => {
    const weatherData = response.data;
    const temperature = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;
    console.log('Aktuelles Wetter in ${stadt}:');
    console.log('Temperatur ${temperature}°C');
    console.log('Wetterberschreibung${WetherDescription}:');
})
.catch(error => {
    console.log('Fehler beim Abrufen der Wetterdaten  ' , error.message);
});
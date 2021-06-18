import { viewWeather } from './ViewWeather.js';

const KEY_1 = '5a';
const KEY_2 = 45869;
const KEY_3 = 687534;
const KEY_4 = 'dd0e6fbf210e812854b3c91c';

export class GetApi{
    getFromApi(city){     
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${KEY_1 + (KEY_2+KEY_3).toString() + KEY_4}`;
        fetch(url)
            .then(e => e.json())
            .then(info => {
                return viewWeather.createElements(
                    {
                        name: info.name,
                        ont: '1.5rem',
                        description: info.weather[0].description,
                        iconUrl: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,    
                        temp: info.main.temp,
                        tempFeelsLike: info.main.feels_like,
                        tempMin: info.main.temp_min,
                        tempMax: info.main.temp_max,
                        pressure: info.main.pressure,
                        humidity: info.main.humidity,
                        windSpeed: info.wind.speed
                    } 
                ) 
            })
            .catch(err =>{
                return viewWeather.createElements(
                    {
                        name: `Twoja przeglądarka blokuje dostęp do zasobów ze strony: "https://openweathermap.org"`,
                        font: '0.8rem',
                        description: 0,
                        iconUrl: null,    
                        temp: 0,
                        tempFeelsLike: 0,
                        tempMin: 0,
                        tempMax: 0,
                        pressure: 0,
                        humidity: 0,
                        windSpeed: 0
                    } 
                ) 
            })
    }
}

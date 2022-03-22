import { viewWeather } from './ViewWeather.js';
import { loader } from './Loader.js';

const KEY_1 = '5a';
const KEY_2 = 45869;
const KEY_3 = 687534;
const KEY_4 = 'dd0e6fbf210e812854b3c91c';

export class GetApi{
    getFromApi(city){   
        loader.startLoader();  
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${KEY_1 + (KEY_2+KEY_3).toString() + KEY_4}`;
        fetch(url)
            .then(e => e.json())
            .then(info => {
                loader.stopLoader();
                return viewWeather.createElements(
                    {
                        name: info.name,
                        font: '1.5rem',
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
                );
            })
            .catch(err =>{
                loader.stopLoader();
                return viewWeather.createElements(
                    {
                        name: `Twoja przeglądarka blokuje dostęp do zasobów ze strony: "https://openweathermap.org"`,
                        font: '0.8rem',
                    } 
                ) 
            })
    }
}

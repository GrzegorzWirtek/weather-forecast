import { countryMap } from "./CountryMap.js";

const KEY_1 = '5a';
const KEY_2 = 45869;
const KEY_3 = 687534;
const KEY_4 = 'dd0e6fbf210e812854b3c91c';

export class GetMapApi{
    getFromApiToMap(city){   
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${KEY_1 + (KEY_2+KEY_3).toString() + KEY_4}`;
        fetch(url)
            .then(e => e.json())
            .then(info => {
                return countryMap.viewMap(
                    {
                        cityWithoutSigns: city,
                        iconUrl: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,    
                        temp: info.main.temp
                    }
                );
            })
            // .catch(err =>{
            //     return viewWeather.createElements(
            //         {
            //             name: `Twoja przeglądarka blokuje dostęp do zasobów ze strony: "https://openweathermap.org"`,
            //             font: '0.8rem',
            //         } 
            //     ) 
            // })
    }
}
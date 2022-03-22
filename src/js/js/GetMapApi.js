import { countryMap } from './CountryMap.js';

const KEY = process.env.OPENWEATHER_KEY;

export class GetMapApi {
	getFromApiToMap(city) {
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=${KEY}`;

		fetch(url)
			.then((e) => e.json())
			.then((info) => {
				return countryMap.viewMap({
					cityWithoutSigns: city,
					iconUrl: `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`,
					temp: info.main.temp,
				});
			});
	}
}

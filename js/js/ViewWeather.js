import { getByClass } from "./GetByClass.js";

const FORECAST__ARTICLE__CLASS = '.forecast__article';
const CITY_CLASS = '.forecast__city-name';
const DESCRIPTION_CLASS = '.forecast__main-section-description';
const MAIN_TEMP_CLASS = '.forecast__main-section-temp-span';
const ICON_CLASS = '.forecast__main-section-icon';
const FEEL_TEMP_CLASS = '.forecast__temp-section-span--feel';
const MIN_TEMP_CLASS = '.forecast__temp-section-span--min';
const MAX_TEMP_CLASS = '.forecast__temp-section-span--max';
const PRESSURE_CLASS = '.forecast__params-section-right-pressure-p';
const WIND_CLASS = '.forecast__params-section-right-wind-p';
const HUMIDITY_CLASS = '.forecast__params-section-right-humidity-p';

class ViewWeather{
    constructor(){
        this.forecastArticle = document.querySelector(FORECAST__ARTICLE__CLASS);
        this.city = getByClass.getElement(CITY_CLASS);
        this.description = getByClass.getElement(DESCRIPTION_CLASS);
        this.temp = getByClass.getElement(MAIN_TEMP_CLASS);
        this.icon = getByClass.getElement(ICON_CLASS);
        this.feelTemp = getByClass.getElement(FEEL_TEMP_CLASS);
        this.minTemp = getByClass.getElement(MIN_TEMP_CLASS);
        this.maxTemp = getByClass.getElement(MAX_TEMP_CLASS);
        this.pressure = getByClass.getElement(PRESSURE_CLASS);
        this.wind = getByClass.getElement(WIND_CLASS);
        this.humidity = getByClass.getElement(HUMIDITY_CLASS);
    }
    createElements(info){
        this.city.textContent = info.name;
        this.city.style.fontSize = info.font;
        this.description.textContent = info.description.charAt(0).toUpperCase() + info.description.slice(1);
        this.temp.textContent = info.temp.toFixed();
        this.icon.style.backgroundImage = `url(${info.iconUrl})`;
        this.feelTemp.textContent = info.tempFeelsLike.toFixed();
        this.minTemp.textContent = info.tempMin.toFixed();
        this.maxTemp.textContent = info.tempMax.toFixed();
        this.pressure.textContent = `${info.pressure} hPa`;
        this.wind.textContent = `${((info.windSpeed)*60*60/1000).toFixed(1)} km/h`;
        this.humidity.textContent = `${info.humidity}%`;
    }
}

export const viewWeather = new ViewWeather();
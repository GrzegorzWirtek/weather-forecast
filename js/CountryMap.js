import { GetMapApi } from './GetMapApi.js'

const CITIES_ON_MAP = [
    'warszawa',
    'lodz'
];

const CITIES_TEMP = document.querySelectorAll('.forecast__map-temp-span');
const CITIES_ICON = document.querySelectorAll('.forecast__map-icon');

class CountryMap{
    getApiToMap(){
        const getMapApi = new GetMapApi();
        CITIES_ON_MAP.forEach(city => getMapApi.getFromApiToMap(city));  
    }
    viewMap(data){ 
       CITIES_TEMP.forEach((element, index)=>{
           if(element.classList.contains(`temp-${data.cityWithoutSigns}`)){
               element.textContent = data.temp.toFixed(1);
               CITIES_ICON[index].style.backgroundImage = `url(${data.iconUrl})`;         
           }
       })
       
        
    }
}

export const countryMap = new CountryMap();
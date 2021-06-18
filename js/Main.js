import { GetApi } from './GetApi.js'
import { CITIES } from './Cities.js'

const INPUT_CLASS = '.forecast__search-input';
const PROPOSITIONS_CLASS = '.forecast__search-propositions';
const PROPOSITIONS_ITEM =  'forecast__search-propositions-item';

class Main{
    constructor(){
        this.getInformation();
        this.propositions = document.querySelector(PROPOSITIONS_CLASS);
        this.input = document.querySelector(INPUT_CLASS);
        
        this.input.addEventListener('input', (e)=> this.searchCity(e));
        this.input.addEventListener('click', ()=> this.selectInputValue());
    }

    getInformation(city = "warszawa"){
        this.getApi = new GetApi();
        this.getApi.getFromApi(city);
    }

    searchCity(e){  
        let value = e.target.value.toLowerCase();
        let cities = CITIES;
        cities = cities.filter((city)=>city.toLowerCase().startsWith(value));      
        if(cities.length > 5){      
            cities = cities.slice(0, 5);
        }

        if(e.target.value !== ''){
            this.showPropositions(cities)
        }else{
            this.hidePropositions();
        }
    }

    showPropositions(cities){
        if(cities.length > 0){
            this.propositions.innerHTML = '';
            this.propositions.style.display = 'block';
            cities.forEach(city => {
                let p = document.createElement('p');
                p.classList.add(PROPOSITIONS_ITEM);
                p.textContent = city;
                this.propositions.appendChild(p);
                p.addEventListener('click', ()=> this.choseCity(city));
            })
        }
    }

    hidePropositions(){
        this.propositions.style.display = 'none';
        this.propositions.innerHTML = '';
    }

    selectInputValue(){
        this.input.select();
    }

    choseCity(city){
        this.propositions.style.display = 'none';
        this.propositions.innerHTML = '';
        this.input.value = city;
        this.getInformation(city);
    }
}

export const main = new Main();
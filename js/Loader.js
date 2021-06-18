import { getByClass } from "./GetByClass.js";

const FORECAST__CLASS = '.forecast';
const LOADER__WRAPPER__CLASS = '.loader';
const LOADER__CLASS = '.loader__element';

class Loader{
    constructor(){
        this.forecast = getByClass.getElement(FORECAST__CLASS);
        this.loaderWrapper = getByClass.getElement(LOADER__WRAPPER__CLASS);
        this.loader = getByClass.getElement(LOADER__CLASS);  
    }

    startLoader(){
        this.forecast.style.filter = 'blur(2px)';
        this.loaderWrapper.style.display = 'block';
        this.loader.style.animationPlayState = 'running';
    }

    stopLoader(){
         this.forecast.style.filter = 'none';
         this.loaderWrapper.style.display = 'none';
         this.loader.style.animationPlayState = 'paused';
    }
}

export const loader = new Loader();
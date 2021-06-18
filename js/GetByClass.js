class GetByClass{
    getElement(selector){
        let element = document.querySelector(selector);
        return element;
    }
}

export const getByClass = new GetByClass();
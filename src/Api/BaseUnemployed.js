export class BaseUnemployed{
// private
    #unemployed
//public
    constructor(unemployed = []){
        this.#unemployed = unemployed;
    }
    addItem(newItem){
        this.#unemployed = [...this.#unemployed, newItem];
        return this.#unemployed;
    }
    removeItem(id){
        this.#unemployed = this.#unemployed.filter((element)=> element.id !== id);
        return this.#unemployed;
    }
    get unemployed(){
        return this.#unemployed;
    }
}
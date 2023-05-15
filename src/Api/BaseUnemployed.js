export class BaseUnemployed{
// private
    #unemployed

    constructor(unemployed = []){
        this.#unemployed = unemployed;
    }
    addItem(item){
        this.#unemployed.push(item);
    }
    removeItem(id){
        this.#unemployed = this.#unemployed.filter((element)=> element.id !== id);
    }
    get unemployed(){
        return this.#unemployed;
    }

}
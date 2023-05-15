export class BaseUnemployed{
// private
    #unemployed

    constructor(unemployed = []){
        this.#unemployed = unemployed;
    }
    addItem(item){
        this.#unemployed.push(item);
        return this.#unemployed;
    }
    removeItem(id){
        this.#unemployed = this.#unemployed.filter((element)=> element.id !== id);
        console.log(this.#unemployed);
        return this.#unemployed;
    }
    get unemployed(){
        return this.#unemployed;
    }

}
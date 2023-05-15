export class BaseJob{
// private
    #jobs;

    constructor(jobs = []){
        this.#jobs = jobs;
    }
    addItem(newItem){
        this.#jobs.push(newItem);
    }
    removeItem(id){
        this.#jobs = this.#jobs.filter((job)=> job.id !== id);
    }
    get jobs(){
        return this.#jobs;
    }
}
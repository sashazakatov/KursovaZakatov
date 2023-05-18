export class BaseJob{
// private
    #jobs;

    constructor(jobs = []){
        this.#jobs = jobs;
    }
    addItem(newItem){
        this.#jobs = [...this.#jobs, newItem];
        return this.#jobs;
    }
    removeItem(id){
        this.#jobs = this.#jobs.filter((job) => job.id !== id);
        return this.#jobs;
    }
    get jobs(){
        return this.#jobs;
    }
}
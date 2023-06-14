export class BaseJob{
// private
    #jobs;

//public
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
    getJobById(id){
        return this.#jobs.find((job) => id === job.id);
    }
    get jobs(){
        return this.#jobs;
    }
}
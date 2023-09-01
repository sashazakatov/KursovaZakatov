import { nanoid } from 'nanoid'

export class Job{
// private
    #id
    #title;
    #description;
    #salary;
    #employer;
//public
    constructor({ title, description, salary, employer }){
        this.#id = nanoid();
        this.#title = title;
        this.#description = description;
        this.#salary = salary;
        this.#employer = employer; 
    }
    get id(){
        return this.#id;
    }
    set title(newTitle){
        this.#title = newTitle;
    }
    get title(){
        return this.#title;
    }
    set description(newDescription){
        this.#description = newDescription;
    }
    get description(){
        return this.#description;
    }
    set salary(newSalary){
        this.#salary = newSalary;
    }
    get salary(){
        return this.#salary;
    }
    set employer(newEmployer){
        this.#employer = newEmployer;
    }
    get employer(){
        return this.#employer;
    }
    getInfo(){
        return{
            id: this.#id,
            title: this.#title,
            description: this.#description,
            salary: this.#salary,
            employer: this.#employer,
        }
    }
}
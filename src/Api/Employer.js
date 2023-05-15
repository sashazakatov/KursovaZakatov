import { nanoid } from 'nanoid'

export class Employer{
// private
    #id;
    #companyName;
    #address;
    #phoneNumder;
    #email;

    constructor({companyName, address, phoneNumder, email}){
        this.#id = nanoid();
        this.#companyName = companyName;
        this.#address = address;
        this.#phoneNumder = phoneNumder;
        this.#email = email;
    }

    get id(){
        return this.#id;
    }
    set companyName(newCompanyName){
        this.#companyName = newCompanyName;
    }
    get companyName(){
        return this.#companyName;
    }
    set address(newAddress){
        this.#address = newAddress;
    }
    get address(){
        return this.#address;
    }
    set phoneNumder(newPhoneNumder){
        this.#phoneNumder = newPhoneNumder;
    }
    get phoneNumder(){
        return this.#phoneNumder;
    }
    set email(newEmail){
        this.#email = newEmail;
    }
    get email(){
        return this.#email;
    }

    getInfo(){
        return{
            id: this.#id,
            companyName: this.#companyName,
            address: this.#address,
            phoneNumder: this.#phoneNumder,
            email: this.#email,
        }
    }

}

// export class Job{
// // private
//     #id
//     #title;
//     #description;
//     #salary;
//     #employer;

//     constructor({ title, description, salary, employer }){
//         this.#id = nanoid();
//         this.#title = title;
//         this.#description = description;
//         this.#salary = salary;
//         this.#employer = employer; 
//     }

//     get id(){
//         return this.#id;
//     }
//     set title(newTitle){
//         this.#title = newTitle;
//     }
//     get title(){
//         return this.#title;
//     }
//     set description(newDescription){
//         this.#description = newDescription;
//     }
//     get description(){
//         return this.#description;
//     }
//     set salary(newSalary){
//         this.#salary = newSalary;
//     }
//     get salary(){
//         return this.#salary;
//     }
//     set employer(newEmployer){
//         this.#employer = newEmployer;
//     }
//     get employer(){
//         return this.#employer;
//     }

//     getInfo(){
//         return{
//             id: this.#id,
//             title: this.#title,
//             description: this.#description,
//             saLary: this.#saLary,
//             employer: this.#employer,
//         }
//     }
// }

// export class BaseJob{
// // private
//     #jobs;

//     constructor(jobs = []){
//         this.#jobs = jobs;
//     }
//     addItem(newItem){
//         this.#jobs.push(newItem);
//     }
//     removeItem(id){
//         this.#jobs = this.#jobs.filter((job)=> job.id !== id);
//     }
//     get jobs(){
//         return this.#jobs;
//     }
// }

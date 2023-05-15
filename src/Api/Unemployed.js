import { Person } from './Person'

export class Unemployed extends Person{
// private
    #profession;
    #education;
    #reasonsForDismissal;

    constructor({
        name, 
        age, 
        sity, 
        phoneNumder, 
        email, 
        profession, 
        education, 
        reasonsForDismissal}){
            super({ name, age, sity, phoneNumder, email });
            this.#profession = profession;
            this.#education = education;
            this.#reasonsForDismissal = reasonsForDismissal;
    }

    getInfo(){
        return{
            id: this.id,
            name: this.name, 
            age: this.age, 
            sity: this.sity, 
            phoneNumder: this.phoneNumder, 
            email: this.email, 
            profession: this.#profession, 
            education: this.#education, 
            reasonsForDismissal: this.#reasonsForDismissal, 
        }
    }
}
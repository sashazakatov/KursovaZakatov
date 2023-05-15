import { nanoid } from 'nanoid'

export class Person{
// private
    #name;
    #age;
    #sity;
    #phoneNumder;
    #email;
    #id;

    constructor({name, age, sity, phoneNumder, email}){
        this.#id = nanoid();
        this.#name = name;
        this.#age = age;
        this.#sity = sity;
        this.#phoneNumder = phoneNumder;
        this.#email = email;
    }

    get id(){
        return this.#id;
    }
    set name(newName){
        this.#name = newName;
    }
    get name(){
        return this.#name;
    }
    set age(newAge){
        this.#age = newAge;
    }
    get age(){
        return this.#age;
    }
    set sity(newSity){
        this.#sity = newSity;
    }
    get sity(){
        return this.#sity;
    }
    set phoneNumder(newPhoneNumder){
        this.#phoneNumder = newPhoneNumder;
    }
    get phoneNumder(){
        return this.#phoneNumder;
    }

    getInfo(){
        return {
            id: this.#id,
            name: this.#name,
            age: this.#age,
            sity: this.#sity,
            phoneNumder: this.#phoneNumder,
            email: this.#email,
        }
    }
}

// export class Unemployed extends Person{
// // private
//     #profession;
//     #education;
//     #reasonsForDismissal;

//     constructor({
//         name, 
//         age, 
//         sity, 
//         phoneNumder, 
//         email, 
//         profession, 
//         education, 
//         reasonsForDismissal}){
//             super({ name, age, sity, phoneNumder, email });
//             this.__profession = profession;
//             this.__education = education;
//             this.__reasonsForDismissal = reasonsForDismissal;
//     }

//     getInfo(){
//         return{
//             id: this.id,
//             name: this.name, 
//             age: this.age, 
//             sity: this.sity, 
//             phoneNumder: this.phoneNumder, 
//             email: this.email, 
//             profession: this.#profession, 
//             education: this.#education, 
//             reasonsForDismissal: this.#reasonsForDismissal, 
//         }
//     }
// }

// export class BaseUnemployed{
// // private
//     #unemployed

//     constructor(unemployed = []){
//         this.#unemployed = unemployed;
//     }
//     addItem(item){
//         this.#unemployed.push(item);
//     }
//     removeItem(id){
//         this.#unemployed = this.#unemployed.filter((element)=> element.id !== id);
//     }
//     get unemployed(){
//         return this.#unemployed;
//     }

// }
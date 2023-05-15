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
    set email(newEmail){
        this.#email = newEmail;
    }
    get email(){
        return this.#email;
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
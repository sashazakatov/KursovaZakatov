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
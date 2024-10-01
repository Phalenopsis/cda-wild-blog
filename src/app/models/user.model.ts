import { Adress } from "./adress.class"

export class User {
    username: string;
    email: string;
    password: string;
    adress: Adress;

    constructor() {
        this.username = "";
        this.email = "";
        this.password = ""
        this.adress = new Adress();
    }
}
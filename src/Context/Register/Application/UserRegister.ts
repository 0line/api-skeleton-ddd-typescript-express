import { User } from "../../../../src/Context/Register/Domain/User";
import { UserRepository } from "../../../../src/Context/Register/Domain/UserRepository";

export class UserRegister {
    constructor(private repository: UserRepository){}

    async run(id:string, email:string, password:string){
        const user = new User({id,email,password});

        return this.repository.save(user);
    }
}
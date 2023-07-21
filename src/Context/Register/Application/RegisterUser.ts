import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class RegisterUser {
    constructor(private repository: UserRepository){}

    async run (id: string, email:string, password: string) {
        const user  = new User({id,email,password});
        
        return this.repository.save(user);
    }

}
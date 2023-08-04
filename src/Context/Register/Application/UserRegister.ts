import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository"; 
export class UserRegister implements UserRepository{
   
    async save(user: User): Promise<void> {
        
    }
}
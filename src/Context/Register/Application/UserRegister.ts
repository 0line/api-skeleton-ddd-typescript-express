import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository"; 
import { UserRegisterRequest } from './UserRegisterRequest';
export class UserRegister {
    
    constructor(private readonly userRepository: UserRepository){}

    async run(request: UserRegisterRequest){
        const user = new User({id: request.id ,email: request.email,password: request.password});

        return this.userRepository.save(user);
    }
}
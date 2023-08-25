import { UserUuid } from "../../Shared/Users/UserUuid";
import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository"; 
import { UserRegisterRequest } from './UserRegisterRequest';
export class UserRegister {

    private readonly userRepository: UserRepository;
    
    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    async run(request: UserRegisterRequest){
        const user = new User({ id: new UserUuid(request.id), email: request.email, 
                            password: request.password, confirmPassword: request.confirmPassword });

        return this.userRepository.save(user);
    }
}
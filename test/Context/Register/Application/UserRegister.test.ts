import { UserRegister } from "../../../../src/Context/Register/Application/UserRegister";
import { User } from "../../../../src/Context/Register/Domain/User";
import { UserUuid } from "../../../../src/Context/Shared/Users/UserUuid";
import { UserRegisterMoock } from "../__mocks__/UserRegisterMoock";

describe('UserRegister', () => {
    let repository:UserRegisterMoock;
    
    beforeEach(() => {
        repository = new UserRegisterMoock();
    });
    
    it('shoult create a valid course', async () => {
        const creator = new UserRegister(repository);
        const id = new UserUuid('0766c602-d4d4-48b6-9d50-d3253123275e');
        const email = 'mail@mail.com';
        const password = 'password123';
        const confirmPassword = 'password123';
        const expectedCourse = new User({ id, email, password, confirmPassword });

        await creator.run({id: id.value, email, password, confirmPassword});

        repository .saveHaveBeenCalledWith(expectedCourse);
    });
});
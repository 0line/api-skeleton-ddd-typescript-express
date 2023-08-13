import { UserRegister } from "../../../../src/Context/Register/Application/UserRegister";
import { User } from "../../../../src/Context/Register/Domain/User";
import { Uuid } from "../../../../src/Context/Shared/Domain/Value-Object/Uuid";
import { UserRegisterMoock } from "../__mocks__/UserRegisterMoock";

describe('UserRegister', () => {
    let repository:UserRegisterMoock;
    
    beforeEach(() => {
        repository = new UserRegisterMoock();
    });
    
    it('shoult create a valid course', async () => {
        const creator = new UserRegister(repository);
        const id = new Uuid('0766c602-d4d4-48b6-9d50-d3253123275e');
        const email = 'mail@mail.com';
        const password = 'password';
        const expectedCourse = new User({ id, email, password });

        await creator.run({id: id.value, email, password});

        repository .saveHaveBeenCalledWith(expectedCourse);
    });
});
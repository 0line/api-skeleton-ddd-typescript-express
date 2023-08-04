import { User } from "../../../../src/Context/Register/Domain/User";
import { UserRegisterMoock } from "../__mocks__/UserRegisterMoock";

describe('UserRegister', () => {
   
    it('shoult create a valid course', async () => {
        const creator = new UserRegisterMoock()
        const id = 'id';
        const email = 'mail@mail.com';
        const password = 'password';
        const expectedCourse = new User({ id, email, password });

        await creator.save({id, email, password});

        creator.saveHaveBeenCalledWith(expectedCourse);
    });
});
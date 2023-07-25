import { UserRegister } from "../../../../src/Context/Register/Application/UserRegister";
import { User } from "../../../../src/Context/Register/Domain/User";
import { UserRepositoryMoock } from "../__mocks__/UserRepositoryMoock";

describe('UserRegister', () => {
    let repository: UserRepositoryMoock;

    beforeEach(() => {
        repository = new UserRepositoryMoock();
    });

    it('shoult create a valid course', async () => {
        const creator = new UserRegister(repository);
        const id = 'id';
        const email = 'mail@mail.com';
        const password = 'password';
        const expectedCourse = new User({ id, email, password });

        await creator.run(id, email, password);

        repository.saveHaveBeenCalledWith(expectedCourse);
    });
});
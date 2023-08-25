import { FileUserRepository } from '../../../../../src/Context/Register/Infraestructure/Persistense/FileUserRepository';
import { User } from '../../../../../src/Context/Register/Domain/User';
import { UserUuid } from '../../../../../src/Context/Shared/Users/UserUuid';

describe('FileUserRepository', ()=>{
    it('should save a user', async ()=>{
        const expectedUser = new User({id: new UserUuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a'), 
                                    email: 'email@email.com', password: 'password', confirmPassword: 'password'});
        const repository = new FileUserRepository();

        await repository.save(expectedUser);

        const user = await repository.search("ef8ac118-8d7f-49cc-abec-78e0d05af80a");
        expect(user).toEqual(expectedUser);

    });
});
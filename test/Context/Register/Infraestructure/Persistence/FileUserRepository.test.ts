import { FileUserRepository } from '../../../../../src/Context/Register/Infraestructure/Persistense/FileUserRepository';
import { User } from '../../../../../src/Context/Register/Domain/User';
import { UserUuid } from '../../../../../src/Context/Shared/Users/UserUuid';

describe('FileUserRepository', ()=>{
    it('should save a user', async ()=>{
        const expectedUser = new User({id: new UserUuid('0766c602-d4d4-48b6-9d50-d3253123275e'), 
                                    email: 'email@email.com', password: 'password123', confirmPassword: 'password123'});
        const repository = new FileUserRepository();

        await repository.save(expectedUser);

        const user = await repository.search("0766c602-d4d4-48b6-9d50-d3253123275e");
        expect(user).toEqual(expectedUser);

    });
});
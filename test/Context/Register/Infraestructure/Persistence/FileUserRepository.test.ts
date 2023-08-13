import { Uuid } from './../../../../../src/Context/Shared/Domain/Value-Object/Uuid';
import { FileUserRepository } from '../../../../../src/Context/Register/Infraestructure/Persistense/FileUserRepository';
import { User } from '../../../../../src/Context/Register/Domain/User';

describe('FileUserRepository', ()=>{
    it('should save a user', async ()=>{
        const expectedUser = new User({id: new Uuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a'), email: 'email@email.com', password: 'password'});
        const repository = new FileUserRepository();

        await repository.save(expectedUser);

        const user = await repository.search("ef8ac118-8d7f-49cc-abec-78e0d05af80a");
        expect(user).toEqual(expectedUser);

    });
});
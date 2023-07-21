import { FileUserRepository } from '../../../../../src/Context/Register/Infraestructure/Persistense/FileUserRepository';
import { User } from "../../../../../src/Context/Register/Domain/User";

describe('FileUserRepository', ()=>{
    it('should save a user', async ()=>{
        const expectedUser = new User({id:'id', email: 'email@email.com', password: 'password'});
        const repository = new FileUserRepository();

        await repository.save(expectedUser);

        const user = await repository.search("id");
        expect(user).toEqual(expectedUser);

    });
});
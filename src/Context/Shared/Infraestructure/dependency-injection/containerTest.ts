import container from './container';
import { FileUserRepository } from '../../../Register/Infraestructure/Persistense/FileUserRepository';
import { asClass } from 'awilix';

export const containerTest = container.createScope();
containerTest.register({
    userRepository: asClass(FileUserRepository).classic()
})

export default containerTest;

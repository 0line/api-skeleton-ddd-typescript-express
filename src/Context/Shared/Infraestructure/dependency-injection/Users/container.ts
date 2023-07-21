import { createContainer, asClass } from 'awilix';
import RegisterPutController from '../../../../Register/Infraestructure/Controllers/RegisterPutController';

const usersContainer = createContainer();
usersContainer.register({
  registerPutController: asClass(RegisterPutController).classic()
});

export default usersContainer;

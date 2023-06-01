import { createContainer, asClass } from 'awilix';
import RegisterPutController from '../../../../Guest/Infraestructure/Register/Controllers/RegisterController';

const usersContainer = createContainer();
usersContainer.register({
  registerPutController: asClass(RegisterPutController).classic()
});

export default usersContainer;

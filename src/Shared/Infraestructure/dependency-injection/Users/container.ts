
import { createContainer, asClass } from 'awilix';
import RegisterPutController from '../../../../Context/Register/Infraestructure/Controllers/RegisterPutController';
import { UserRegister } from '../../../../Context/Register/Application/UserRegister';

const usersContainer = createContainer();
usersContainer.register({
  registerPutController: asClass(RegisterPutController).classic(),
  userRegister: asClass(UserRegister).classic(),
});

export default usersContainer;

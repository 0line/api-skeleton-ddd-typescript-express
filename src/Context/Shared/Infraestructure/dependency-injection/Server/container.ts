import { createContainer, asClass } from 'awilix';
import StatusGetController from '../../../../Server/Infraestructure/Controllers/StatusController';

const serverContainer = createContainer();
serverContainer.register({
  statusGetController: asClass(StatusGetController).classic()
});

export default serverContainer;

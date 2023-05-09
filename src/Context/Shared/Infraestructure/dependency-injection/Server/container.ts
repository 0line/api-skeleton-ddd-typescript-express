import { createContainer, asClass  } from 'awilix'
import StatusGetController from '../../../../Server/Infraestructure/Controllers/StatusController';

export const serverContainer = createContainer();
serverContainer.register({
  statusGetController: asClass(StatusGetController).classic()
});


module.exports = serverContainer;
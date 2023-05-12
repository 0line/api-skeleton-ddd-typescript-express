import { createContainer } from 'awilix'
import serverContainer from './Server/container';

const container = createContainer();
container.register(serverContainer.registrations);
export  default container;
import { createContainer } from 'awilix';
import serverContainer from './Server/container';
import usersContainer from './Users/container';

const container = createContainer();
container.register(serverContainer.registrations);
container.register(usersContainer.registrations);
export default container;

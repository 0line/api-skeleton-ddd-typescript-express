import { createContainer   } from 'awilix'
import {serverContainer} from './Server/container';

export const container = createContainer();
container.build(serverContainer);

module.exports = container;
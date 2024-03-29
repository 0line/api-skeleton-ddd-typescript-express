import { Request, Response, Router } from 'express';
import StatusGetController from '../../../Context/Server/Infraestructure/Controllers/StatusController';
import containerTest from '../dependency-injection/containerTest';

export const register = (router: Router) => {
  const controller: StatusGetController = containerTest.resolve('statusGetController') as StatusGetController;
  router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};

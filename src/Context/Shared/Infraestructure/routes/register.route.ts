import { Request, Response, Router } from 'express';
import RegisterPutController from '../../../Guest/Infraestructure/Register/Controllers/RegisterController';
import containerTest from '../dependency-injection/containerTest';

export const register = (router: Router) => {
  const controller: RegisterPutController = containerTest.resolve('registerPutController') as RegisterPutController;
  router.put('/users/:id', (req: Request, res: Response) => controller.run(req, res));
};

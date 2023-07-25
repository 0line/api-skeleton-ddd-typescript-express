import { Request, Response, Router } from 'express';
import RegisterPutController from '../../../Register/Infraestructure/Controllers/RegisterPutController';
import containerTest from '../dependency-injection/containerTest';
import { body } from 'express-validator';
import { validateSchema } from '.';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString().isUUID(),
    body('email').exists().isEmail(),
    body('password').exists().isAlphanumeric()
  ];
  const controller: RegisterPutController = containerTest.resolve('registerPutController') as RegisterPutController;
  router.put('/users/:id',reqSchema, validateSchema, (req: Request, res: Response) => controller.run(req, res));
};

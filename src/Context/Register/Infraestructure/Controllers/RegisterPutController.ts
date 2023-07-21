import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../../../Shared/Infraestructure/Controllers/Controller';

export default class RegisterPutController implements Controller {
  run(req: Request, res: Response): void {
    res.status(httpStatus.CREATED).send();
  }
}

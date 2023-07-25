import { UserRegister } from './../../Application/UserRegister';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../../../Shared/Infraestructure/Controllers/Controller';

export default class RegisterPutController implements Controller {

  constructor(private userRegister: UserRegister){}

  async  run(req: Request, res: Response) :Promise<void> {
    const {id, email, password} = req.body;

    await this.userRegister.save({id, email, password});

    res.status(httpStatus.CREATED).send();
  }
}

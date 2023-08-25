import { RegisterPutRequest } from './RegisterPutRequest';
import { UserRegister } from './../../Application/UserRegister';
import { Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../../../../Shared/Infraestructure/Controllers/Controller';

export default class RegisterPutController implements Controller {

  constructor(private userRegister: UserRegister){}

  async run(req: RegisterPutRequest, res: Response) :Promise<void> {
    const {id, email, password, confirmPassword} = req.body;

    await this.userRegister.run({id, email, password, confirmPassword});

    res.status(httpStatus.CREATED).send();
  }
}

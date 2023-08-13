import { Uuid } from "../../Shared/Domain/Value-Object/Uuid";

export class User {
    readonly id: Uuid;
    readonly email: string;
    readonly password: string;
  
    constructor(params: { id: Uuid, email: string, password: string }) {
      this.id = params.id;
      this.email = params.email;
      this.password = params.password;
    }
  }
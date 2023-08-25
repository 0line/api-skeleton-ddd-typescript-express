import { UserUuid } from "../../Shared/Users/UserUuid";

export class User {
    readonly id: UserUuid;
    readonly email: string;
    readonly password: string;
    readonly confirmPassword: string;
  
    constructor(params: { id: UserUuid, email: string, password: string, confirmPassword: string }) {
      this.id = params.id;
      this.email = params.email;
      this.password = params.password;
      this.confirmPassword = params.confirmPassword;
    }
  }
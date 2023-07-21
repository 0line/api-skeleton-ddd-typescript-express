export class User {
    readonly id: string;
    readonly email: string;
    readonly password: string;
  
    constructor(params: { id: string, email: string, password: string }) {
      this.id = params.id;
      this.email = params.email;
      this.password = params.password;
    }
  }
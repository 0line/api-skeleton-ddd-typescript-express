import { StringValueObject } from "../../../Shared/Domain/Value-Object/StringValueObject";
import { UserEmailInvalid } from "./UserEmailInvalid";

export class UsersEmail extends StringValueObject {
    constructor(value: string) {
      super(value);
      this.ensureLengthIsLessThan30Characters(value);
    }
  
    private ensureLengthIsLessThan30Characters(value: string): void {
      let validateEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*{2,0}|\[[\t -Z^-~]*])");
      if (!validateEmail.test(value)) {
        throw new UserEmailInvalid(`The Email <${value}> is invalid`);
      }
    } 
}
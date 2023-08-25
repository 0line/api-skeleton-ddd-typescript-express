
export class Passwords{
    readonly password: string;
    readonly confirmPassword: string;

    constructor(password: string, confirmPassword: string) {
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    async isEqual():Promise<boolean>{
        return this.password === this.confirmPassword;
    }

    async encrypPassword(value: string) {
        return value;
    }

    async decrypPassword(value: string) {
        return value;
    }

}
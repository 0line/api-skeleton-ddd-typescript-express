import { User } from "../../../../src/Context/Register/Domain/User";
import { UserRepository } from "../../../../src/Context/Register/Domain/UserRepository";

export class UserRepositoryMoock implements UserRepository {
    private saveMock: jest.Mock;
    
    constructor() {
        this.saveMock = jest.fn();
    }

    async save(user: User): Promise<void> {
        this.saveMock(user);
    }

    saveHaveBeenCalledWith(expected:User) :void {
        expect(this.saveMock).toHaveBeenCalledWith(expected)
    }
}
import { deserialize, serialize } from 'bson';
import { User } from "../../Domain/User";
import { UserRepository } from "../../Domain/UserRepository";
import  fs from 'fs';

export class FileUserRepository implements UserRepository{
    private FILE_PATH = `${__dirname}/users`;

    async save(user: User): Promise<void> {
        try {
            let path = this.filePath(user.id);
            if (fs.existsSync(path)) {
                this.deleteFile(path);
                fs.promises.writeFile(path, serialize(user));
            } else {
                fs.promises.writeFile(path, serialize(user));
            }
        } catch (error) {
            console.log(error);
        }
    }

    async search(userId: string): Promise<User> {
        const userData = await fs.promises.readFile(this.filePath(userId));
        const { id, email, password } = deserialize(userData);
        return new User({ id, email, password });
    }

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }

    deleteFile(urlFile:string) {
        fs.unlink(urlFile, (err: any) => {
            if (err) {
                throw err;
            }
        });
    }
}
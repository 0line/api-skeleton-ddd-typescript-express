import { Server } from './server';
import 'dotenv/config';
export class UsersApp {
  server?: Server;

  async start(): Promise<void> {
    const port = process.env.PORT ?? '5000';
    this.server = new Server(port);

    return this.server.listen();
  }

  get httpServer(): Server['httpServer'] | undefined {
    return this.server?.getHTTPServer();
  }

  async stop(): Promise<void> {
    return this.server?.stop();
  }
}

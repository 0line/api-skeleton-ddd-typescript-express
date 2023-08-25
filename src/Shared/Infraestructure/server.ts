import bodyParser from 'body-parser';
import compress from 'compression';
import errorHandler from 'errorhandler';
import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import { registerRoutes } from './routes';
import cors from 'cors';
import dotenv from 'dotenv';

export class Server {
  private readonly express: express.Express;
  private readonly port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    dotenv.config({ path: '.env', encoding: 'latin1', debug: true, override: false });
    this.port = port;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    const router = Router();
    router.use(cors());
    router.use(errorHandler());
    const prefix = process.env.PREFIX_API_V1 ?? '/api/v1';
    this.express.use(prefix, router);
    registerRoutes(router);
    router.use((err: Error, req: Request, res: Response, next: Function) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      const env = this.express.get('env') as string;
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Api Users is running at http://localhost:${this.port} in ${env} mode`);
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            reject(error);

            return;
          }

          resolve();
        });
      }

      resolve();
    });
  }
}

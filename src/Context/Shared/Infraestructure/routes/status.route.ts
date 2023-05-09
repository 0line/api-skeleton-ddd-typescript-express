import { Request, Response, Router} from "express";
import StatusGetController from "../../../Server/Infraestructure/Controllers/StatusController";
import containerDev from "../dependency-injection/containerDev";

export const register = (router: Router): void => {
  router.get("/status", (req: Request, res: Response) => {
    const controller : StatusGetController = containerDev.resolve('statusGetController');
    controller.run(req, res);
  });
};

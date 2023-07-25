
import { Router } from 'express';
import { globSync } from 'glob';
import { validationResult, ValidationError } from 'express-validator';
import httpStatus from 'http-status';
import { Request, Response } from 'express';

export function registerRoutes(router: Router) {
  const routes = globSync(__dirname + '/**/*.route.*');
  routes.forEach(route => register(route, router));
}

function register(routePath: string, router: Router) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const { register } = require(routePath) as { register: (router: Router) => void };
  register(router);
}

export function validateSchema(req: Request, res: Response, next: Function) {
  const validationErrors = validationResult(req);
  if(validationErrors.isEmpty()) {
    return next();
  }
  const errors = validationErrors.array().map((err: ValidationError) => {
    return ({ [err.type]: err.msg });
  });

  return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    errors
  });
}
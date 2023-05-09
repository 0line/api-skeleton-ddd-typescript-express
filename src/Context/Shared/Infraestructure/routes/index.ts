import {  Router } from 'express';
import { glob } from 'glob';

export async function registerRoutes(router: Router): Promise<void> {
	const routes = await glob(
		'**/*.route.*', 
		{ 
			ignore: 'node_modules/**',
			root: `${__dirname}`,
			absolute: true 
		}
	);
	routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
	const { register } = require(routePath) as { register: (router: Router) => void };
	register(router);
}

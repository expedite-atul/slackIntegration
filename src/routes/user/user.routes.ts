/**
 * @file user.v1.routes
 * @description defines routing for v1 user routes
 * @author Desk Now Dev Team
*/

import { celebrate, Joi } from "celebrate";
import { Router, Request, Response, NextFunction } from "express";
import BaseRoute from "@baseRoute";
import { HomeController } from "@controllers";

class V1HomeRouteClass extends BaseRoute {

    public path: string;

    constructor(path: string) {
        super();
        this.path = path;
        this.initRoutes();
    }

    get instance(): Router {
        return this.router;
    }

    initRoutes() {
        this.router.get('/getCityListing',
            celebrate({
                params: {
                    resetPasswordToken: Joi.number().required(),
                }
            }),
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    await HomeController.fethcHome(req, res, next);
                } catch (error) {
                    console.error(`we have an error ==> ${error}`);
                    throw error;
                }
            }
        );
    }
}

export default new V1HomeRouteClass('/');
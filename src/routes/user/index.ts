/**
 * @file routes/index
 * @description exposes routing paths
 * @author Desk Now Dev Team
*/

import { Router } from "express";
import userRoutes from "./user.routes";
import BaseRoute from "@baseRoute";

class Routes extends BaseRoute {
    public path = '/api';
    constructor() {
        super();
        this.init();
    }
    get instance(): Router {
        return this.router;
    }

    private init() {
        this.router.use(userRoutes.path, userRoutes.instance);
    }
}

export default new Routes();
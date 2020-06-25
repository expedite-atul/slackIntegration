import { Router } from "express";
import userRoutes from "./user/index";
import BaseRoute from "./base.routes";

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
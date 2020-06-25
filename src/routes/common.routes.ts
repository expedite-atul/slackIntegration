import { Router } from "express";
import BaseRoute from "@baseRoute";

class CommonRouteClass extends BaseRoute {

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
    }
}

export default new CommonRouteClass('/');
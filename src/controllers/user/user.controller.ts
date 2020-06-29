import { Request, Response, NextFunction } from "express";
import BaseClass from "@baseController";
import { ApiPath, ApiOperationGet } from "swagger-express-ts";

@ApiPath({
    path: "/api/v1/home",
    name: "Home Basic Module",
    security: { apiKeyHeader: [] },
})
class HomeClass extends BaseClass {
    constructor() {
        super();
    }

    @ApiOperationGet({
        description: "GET HOME",
        path: '/',
        responses: {
            200: {
                description: "Success",
                type: "String",
            }
        },
    })
    async fethcHome(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            return `hello`;
        } catch (error) {
            console.error(`we have an error ==> ${error}`);
            throw error;
        }
    }

}

export const HomeController = new HomeClass();
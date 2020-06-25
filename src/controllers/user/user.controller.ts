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
        } catch (err) {
            next(err);
        }
    }

    // @ApiOperationPost({
    //     description: "User Social Login",
    //     path: '/socialLogin',
    //     parameters: {

    //         body: {
    //             description: 'Body social login',
    //             required: true,
    //             model: 'ReqUserSocialLogin'
    //         }
    //     },
    //     responses: {
    //         200: {
    //             description: "Success",
    //             type: "String",
    //         }
    //     },
    // })
    // async userSocialLogin(req: Request, res: Response, next: NextFunction) {
    //     try {

    //         }

    //     } catch (err) {
    //         next(err);
    //     }
    // }

}

export const HomeController = new HomeClass();
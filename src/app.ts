import 'module-alias/register';
import cors from "cors";
import helmet from "helmet";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "@routes";
import { mongoConnection } from "@services";
import * as swagger from "swagger-express-ts";
import "reflect-metadata";
import { SwaggerDefinitionConstant } from "swagger-express-ts";
import * as swaggermodel from "./swaggermodels/";
export { swaggermodel };
import * as commonRoutes from "./routes/common.routes";

class Application {

    private app: express.Application;
    constructor() {
        this.app = express();
        this.init();
    }

    get instance(): express.Application {
        return this.app;
    }

    async init() {
        await mongoConnection.connectDatabase('mongodb+srv://atul:hcp5YrYHaAWJML2@cluster0-ypwlq.mongodb.net/sample_cities?retryWrites=true&w=majority');
        this.useMiddlewares();
        this.useRoutes();
    }

    useMiddlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        let options = {
            dotfiles: "ignore",
            etag: true,
            extensions: ["htm", "html"],
            index: false,
            maxAge: "7d",
            redirect: false,
            setHeaders: function (res: any, path: any, stat: any) {

                res.set("x-timestamp", Date.now());
            }
        };
        this.app.use(express.static(`${process.cwd()}/public`, options));
        this.app.set('views', express.static(process.cwd() + '/views'))
        this.app.set('view engine', 'hbs')
        this.app.use('/api-docs/swagger', express.static('swagger'));
        this.app.use('/api-docs/swagger/assets', express.static('node_modules/swagger-ui-dist'));
        this.app.use(swagger.express(
            {
                definition: {
                    info: {
                        title: "Desk Now",
                        version: "1.0",
                    },
                    securityDefinitions: {
                        apiKeyHeader: {
                            type: SwaggerDefinitionConstant.Security.Type.API_KEY,
                            in: SwaggerDefinitionConstant.Security.In.HEADER,
                            name: "Authorization"
                        }
                    },
                    schemes: ['http', 'https']
                }
            }
        ));
    }

    useRoutes() {
        this.app.use(commonRoutes.default.path, commonRoutes.default.instance)
        this.app.use(routes.path, routes.instance);
    }
}

export default new Application();
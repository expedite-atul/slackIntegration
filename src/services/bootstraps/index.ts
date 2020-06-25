
import 'module-alias/register';
import { mongoConnection } from "../database";

mongoConnection.connectDatabase(process.env.DB_URI as string);
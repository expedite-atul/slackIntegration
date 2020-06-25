import mongoose from "mongoose";

class Mongo {
    constructor() { }
    /**
     * @description connects to the mongo database
     * @param uri - the new version of mongodb connection string
     */
    async connectDatabase(uri: string) {
        try {
            await mongoose.connect(uri,
                {
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    poolSize: 5
                });
            console.log(`SUCCESS: database connected to => ${uri}`);
            if (process.env.NODE_ENV !== 'prod') mongoose.set('debug', true);
        } catch (error) {
            console.error(`Error in connecting to mongo ==> ${error}`);
            process.exit(500);
        }
    }
}
export const mongoConnection = new Mongo();
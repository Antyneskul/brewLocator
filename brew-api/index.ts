import * as createError from 'http-errors';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { Router } from 'express';

import { applyRoutes } from './src/routes';
import { IError } from './src/interfaces/error';

const init = async () => {
    await mongoose.connect('mongodb://mongodb/brew', {
        promiseLibrary: global.Promise as PromiseConstructor,
        useNewUrlParser: true
    });

    const app = express();
    const router = Router();

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.set('x-powered-by', false);
    app.use(cors());
    app.use(helmet());
    app.use('/api', router);

    applyRoutes(router);

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        next(createError(404));
    });

    app.use((err: IError, req: express.Request, res: express.Response) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.render('error');
    });

    return app;
};

export default init;

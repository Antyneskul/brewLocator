import * as express from 'express';
import applyBreweriesRouter from './breweries';
import applyRegionsRouter from './regions';


const applyRoutes = (router: express.Router) => {
    applyBreweriesRouter(router);
    applyRegionsRouter(router);
};


export { applyRoutes };

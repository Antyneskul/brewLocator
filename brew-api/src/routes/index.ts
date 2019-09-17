import * as express from 'express';
import applyBreweriesRouter from '../components/breweries/breweries.router';
import applyRegionsRouter from '../components/regions/regions.router';


const applyRoutes = (router: express.Router) => {
    applyBreweriesRouter(router);
    applyRegionsRouter(router);
};


export { applyRoutes };

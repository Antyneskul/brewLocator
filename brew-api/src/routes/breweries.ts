import * as express from 'express';
import { getBreweries, getBrewery } from '../controllers/breweries';

const applyBreweriesRouter = (router: express.Router) => {
    router.get('/breweries', getBreweries);
    router.get('/breweries/:name', getBrewery);
};

export default applyBreweriesRouter;

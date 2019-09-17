import * as express from 'express';
import { getAllRegions, getRegionByName } from '../controllers/regions';

const applyRegionsRouter = (router: express.Router) => {
    router.get('/regions', getAllRegions);
    router.get('/regions/:name', getRegionByName);
};

export default applyRegionsRouter;

import * as express from 'express';
import { Region } from './region.model';

interface IRegionsParams {
    name?: string
}


const getAllRegions = async (req: express.Request, res: express.Response) => {
    try {
        const regions = await Region.find() || [];
        res.send({
            data: regions,
            success: true
        });
    } catch (error) {
        res.status(400).json({
            error,
            success: false
        });
    }
};

const getRegionByName = async (req: express.Request, res: express.Response) => {
    try {
        const {name} = req.params as IRegionsParams;
        res.send({
            data: await Region.findOne({name}),
            success: true
        });
    } catch (error) {
        res.status(400).json({
            error,
            success: false
        });
    }
};


export { getAllRegions, getRegionByName };

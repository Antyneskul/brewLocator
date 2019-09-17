import * as express from 'express';
import { Brewery } from '../db/models/brewery';

interface IBreweriesParams {
    name?: string;
}

const getBreweries = async (req: express.Request, res: express.Response) => {
    try {
        res.send({
            data: await Brewery.find({...req.query}),
            success: true
        });
    } catch (error) {
        res.status(400).send({
            error,
            success: false
        });
    }
};

const getBrewery = async (req: express.Request, res: express.Response) => {
    try {
        const {name} = req.params as IBreweriesParams;
        res.send({
            data: await Brewery.findOne({name}),
            success: true
        })
    } catch (error) {
        res.status(400).send({
            error,
            success: false
        });
    }
};

export { getBreweries, getBrewery };

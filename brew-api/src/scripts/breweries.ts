import getBreweries from '../scraper/www.germanbreweries.com';
import { Brewery } from '../db/models/brewery';
import { IBrewery } from '../interfaces/brewery';

const debug = require('debug')('brew-api:breweries');

const setBreweries = async () => {
    try {
        const breweries = await Brewery.find();

        if (!breweries.length) {
            return await Brewery.insertMany(await getBreweries()) as unknown as IBrewery[];
        }

        return null;
    } catch (e) {
        debug(`setBreweries fails with: ${e}`);
    }
};

export default setBreweries;

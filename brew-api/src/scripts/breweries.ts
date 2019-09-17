import getBreweries from '../components/scraper/www.germanbreweries.com';
import { Brewery } from '../components/breweries/brewery.model';
import { IBrewery } from '../components/breweries/brewery.interface';


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

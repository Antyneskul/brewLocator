import { getUniqArray } from '../helpers/arrays';
import { IRegion } from '../components/regions/region.interface';
import { IBrewery } from '../components/breweries/brewery.interface';
import { Region } from '../components/regions/region.model';

const debug = require('debug')('brew-api:regions');

const getRegions = (breweries: IBrewery[] = []) => {
    if (!breweries.length) {
        return null;
    }

    const regions = getUniqArray(breweries.map(({region}) => region));

    return regions.map(region => ({
        name: region,
        places: getUniqArray(breweries
            .filter(brewery => brewery.region === region)
            .map(({place}) => place))
    })) as IRegion[];
};

const setRegions = async (breweries: IRegion[] = []) => {
    try {
        return await Region.insertMany(breweries);
    } catch (e) {
        debug(`setBreweries fails with: ${e}`);
    }
};

export { getRegions, setRegions };

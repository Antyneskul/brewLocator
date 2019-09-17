import * as mongoose from 'mongoose';
import setBreweries from './breweries';
import { getRegions, setRegions } from './regions';

(async () => {
    await mongoose.connect('mongodb://mongodb/brew', {
        promiseLibrary: global.Promise as PromiseConstructor,
        useNewUrlParser: true
    });

    const breweries = await setBreweries();

    if (breweries) {
        const regions = getRegions(breweries);
        await setRegions(regions);
    }

    await mongoose.connection.close();
})();

import { getRegions } from '../../src/scripts/regions';
import * as breweries from '../mocks/breweries.json';

describe('SetRegions', () => {
    test('should return null if no arguments', () => {
        expect(getRegions()).toBeNull()
    });

    test('should return return array of regions', async () => {
        expect(getRegions(breweries)).toEqual([
                {
                    region: 'BADEN-WÜRTTEMBERG',
                    places: ['Aalen', 'Abtsgmünd']
                },
                {
                    region: 'BAYERN',
                    places: ['Fürth', 'Furth im Wald', 'Garitz', 'Gars am Inn']
                },
                {
                    region: 'THÜRINGEN',
                    places: ['Weimar', 'Weißensee', 'Worbis']
                }
            ]
        );
    });
});


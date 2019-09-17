import { getRegions } from '../../src/scripts/regions';
import * as breweries from '../mocks/breweries.json';

describe('SetRegions', () => {
    test('should return null if no arguments', () => {
        expect(getRegions()).toBeNull()
    });

    test('should return return array of regions', async () => {
        expect(getRegions(breweries)).toEqual([
                {
                    name: 'BADEN-WÜRTTEMBERG',
                    places: ['Aalen', 'Abtsgmünd']
                },
                {
                    name: 'BAYERN',
                    places: ['Fürth', 'Furth im Wald', 'Garitz', 'Gars am Inn']
                },
                {
                    name: 'THÜRINGEN',
                    places: ['Weimar', 'Weißensee', 'Worbis']
                }
            ]
        );
    });
});


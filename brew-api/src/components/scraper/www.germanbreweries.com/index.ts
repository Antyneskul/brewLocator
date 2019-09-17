import * as cheerio from 'cheerio';
import * as decoder from 'iconv-lite';
import request from '../../../helpers/await-request';
import { IBrewery } from '../../interfaces/brewery';

const getBreweries = async () => {
    const url = 'http://www.germanbreweries.com/all_breweries.htm';
    const regions = [
        'BADEN-WÜRTTEMBERG',
        'BAYERN',
        'BERLIN',
        'BRANDENBURG',
        'BREMEN',
        'HAMBURG',
        'HESSEN',
        'MECKLENBURG-VORPOMMERN',
        'NIEDERSACHSEN',
        'NORDRHEIN-WESTFALEN',
        'RHEINLAND-PFALZ',
        'SAARLAND',
        'SACHSEN',
        'SACHSEN-ANHALT',
        'SCHLESWIG-HOLSTEIN',
        'THÜRINGEN'
    ];

    try {
        const res = await request({
            uri: url,
            encoding: null,
            headers: {
                "Accept": "text, text/plain, text/xml",
                "Accept-Encoding": "UTF-8",
                'Content-Type': "text/plain; charset=utf-8;"
            }
        });

        let result: any = [];
        const places: any = [];
        const breweries: Array<IBrewery> = [];
        const clearText = (text: string) => text.replace(/[\t\n]/g, ' ').replace(/(\s+|map|tap.*)/g, ' ').trim();
        const getAddressFromHref = (href: string) => href.replace('http:\/\/www.goyellow.de\/map\/', '').replace(/[-\/]/g, ' ');
        const $ = cheerio.load(decoder.decode(new Buffer(res as any), "ISO-8859-1"), {decodeEntities: false});

        regions.forEach(region => {
            $(`p:contains(${region.split(/(\s|-)/)[0]}) + table tr`)
                .each((i, tr) => {
                    $(tr)
                        .find('td:nth-child(odd)')
                        .each((i, td) => {
                            const place = clearText($(td).text());
                            places.push({
                                region,
                                place
                            });
                        });

                    $(tr)
                        .find('td:nth-child(even)')
                        .each((_, td) => {
                            const name = clearText($(td).text());
                            const data: IBrewery = {name};

                            $(td)
                                .find('a')
                                .each((_, a) => {
                                    const href = $(a).attr('href');
                                    if (href.includes('goyellow')) {
                                        data.address = getAddressFromHref(href);
                                    } else {
                                        data.url = href;
                                    }
                                });

                            breweries.push(data);
                        });

                });
        });

        places.forEach((place: IBrewery, index: number) => {
            result.push({...place, ...breweries[index]});
        });

        let even = result.filter((el: IBrewery, index: number) => index % 2 === 0);
        let odd = result.filter((el: IBrewery, index: number) => index % 2 !== 0);

        let lastEven = 0;
        let lastOdd = 0;

        even.forEach((el: IBrewery, index: number) => {
            if (!el.place) {
                el.place = even[lastEven].place;
            } else {
                lastEven = index;
            }
        });

        odd.forEach((el: IBrewery, index: number) => {
            if (!el.place) {
                el.place = odd[lastOdd].place;
            } else {
                lastOdd = index;
            }
        });

        even = even.filter(({place}: any) => Boolean(place));
        odd = odd.filter(({place}: any) => Boolean(place));

        result = [...even, ...odd]
            .sort((a, b) => a.region - b.region)
            .filter(({name, place}) => !['PLACE', 'DISTRICT'].includes(place) || name !== 'BREWERY');

        return result;
    } catch (err) {
        console.error(err)
    }
};

export default getBreweries;

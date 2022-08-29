import provinces from './data/provinces.json';
import cities    from './data/cities.json';
import zipcodes  from './data/zipcodes.json';

export default {
    search(code) {
        if(zipcodes[code]) {
            const zip = zipcodes[code];
            const provinceID = zip[0];
            const cityID     = zip[1];

            const province = provinces[provinceID];
            const city     = cities[provinceID][cityID];
            return {
                province,
                city   : city[0],
                zipCode: city[1]
            }
        }
        else
            return false;
    }
}

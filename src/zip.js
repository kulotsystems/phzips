import provinces from './data/provinces.json';
import cities    from './data/cities.json';
import zipcodes  from './data/zipcodes.json';

export default {
    search(code) {
        if(zipcodes[code]) {
            const zip = zipcodes[code];
            const provinceID = zip[0];
            const cityID     = zip[1];
            return {
                province: provinces[provinceID],
                city    : cities[provinceID][cityID]
            }
        }
        else
            return false;
    }
}

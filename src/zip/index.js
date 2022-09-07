import metroManila           from './data/metro-manila.json';
import metroManila_locations from './data/metro-manila_locations.json';
import metroManila_zipcodes  from './data/metro-manila_zipcodes.json'
import provinces             from './data/provinces.json';
import province_locations    from './data/province_locations.json';
import province_zipcodes     from './data/province_zipcodes.json'

const find = (code, inProvince) => {
    let areas     = metroManila;
    let locations = metroManila_locations;
    let zipcodes  = metroManila_zipcodes;
    if(inProvince) {
        areas = provinces;
        locations = province_locations;
        zipcodes  = province_zipcodes;
    }

    if(zipcodes[code] && code !== '') {
        const zip        = zipcodes[code];
        const areaID     = zip[0];
        const category   = zip[1];
        const locationID = zip[2];

        const area     = areas[areaID];
        const location = locations[areaID][category][locationID];

        const data = {
            type: inProvince ? 'Province' : 'Metro Manila',
            area,
            location: location[0],
            zipCode : location[1],
            tag     : location[2] ? location[2] : null
        };

        return data;
    }
    return false;
};

export default {

    search(code) {
        code = code.trim();
        const foundInMetroManila = find(code, false);
        if(foundInMetroManila)
            return foundInMetroManila;
        else
            return find(code, true);
    }

}

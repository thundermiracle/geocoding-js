import dms2deg from './dms2deg';

const dmsLatitudeReg = /([0-9]{1,2})[:|°]([0-9]{1,2})[:|'|′]?([0-9]{1,2}(?:\.[0-9]+){0,1})?["|″]([N|S])/;
const dmsLongitudeReg = /([0-9]{1,3})[:|°]([0-9]{1,2})[:|'|′]?([0-9]{1,2}(?:\.[0-9]+){0,1})?["|″]([E|W])/;

/**
 * get latitude&longtitude array from dms latlng string
 *
 * '35°39'31.3"N+139°44'40.3"E' -> [35.658694, 139.744528]
 *
 * returns null if no matches found
 *
 * @param {*string} latlngStr
 */
export default function getLatLngByDMSStr(latlngStr) {
  if (!latlngStr) {
    return null;
  }

  if (dmsLatitudeReg.test(latlngStr) && dmsLongitudeReg.test(latlngStr)) {
    const [dmsLatitude] = latlngStr.match(dmsLatitudeReg);
    const [dmsLongitude] = latlngStr.match(dmsLongitudeReg);

    return [dms2deg(dmsLatitude), dms2deg(dmsLongitude)];
  }

  return null;
}

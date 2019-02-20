import config from '../config';

export function checkExpiryDate(microsec) {
    if (!microsec) return false;

    const secPassed = (Date.now() - microsec) / 1000;
    const result    = (secPassed - config.settings.expiry) > 0 ? false : true;

    return result;
}

export function objectToParams(object) {
    let str = "",
        key;

    for (key in object) {
        if (str !== "") {
            str += "&";
        }

        // if array
        if ((typeof object[key]) === 'object' && object[key].length) {
            object[key].forEach(item => {
                str += key + "=" + encodeURIComponent(item);
            });
        } else {
            str += key + "=" + encodeURIComponent(object[key]);
        }
    }

    return str;
}

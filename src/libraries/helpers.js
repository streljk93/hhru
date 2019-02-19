import config from '../config';

export function checkExpiryDate(microsec) {
    if (!microsec) return false;

    const secPassed = (Date.now() - microsec) / 1000;
    const result    = (secPassed - config.settings.expiry) > 0 ? false : true;

    return result;
}

export function getSignList () {
    return ['<', '<=', '=', '>=', '>'];
}
// libraries
import axios from 'axios';

// config
const config = {
    api: 'https://api.hh.ru/',
    credentials: {},
};

axios.defaults.baseURL = config.api;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default config;
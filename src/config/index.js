import production from './production';
import development from './development';

const env = { production, development };

export default env[process.env.NODE_ENV];
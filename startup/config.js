const dotenv =  require('dotenv');
const assert =  require('assert');
dotenv.config();

const {PORT , HOST , HOST_URL} = process.env;


assert(PORT, 'port is required');
assert(HOST, 'host is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL
}
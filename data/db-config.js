// s3
const knex = require('knex');

// s4
const config = require('../knexfile.js')

// s5
module.exports = knex(config.development)
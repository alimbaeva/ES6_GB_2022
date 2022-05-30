// const lib = require('./commonjs-modul');
const lib = require('imports-loader?define=>false!./umd-modul')

console.log(lib);
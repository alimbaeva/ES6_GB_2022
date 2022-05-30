/*
commonJS - стиль написание модулей, использует метод require для импорта зависимостей и module.exports для экспорта.
 В основном такой стиль написания распространен в экосистеме Node.js
*/

//library.js
const lodash = require('lodash');
const moment = require('moment');

// public methods
const sortByDate = function(date, order) {};
const groupByDate = function(date) {};

module.export = {
    sortByDate,
    groupByDate,
}
// (function(root, factory){
//     if(typeof define === 'function' && define.amd){
//         // AMD Register as an anonymous modul.
//         define('umd_modul', ['lodash', 'moment', factory]);
//     } else if (typeof module === 'object' && module.exports){
//         // Node.Does not work with strict CommonJS , but
//         // only CommonJS = like environments that support module.exports,
//         // like Node.
//         module.exports = factory(require('lodash'), require('moment'));
//     } else {
//         // Global variables
//         root.myLibrary = factory(root.lodash, root.moment);
//     }
// })(typeof self !== 'undefined' ? self: this/ function(_, moment){
//     function sortByDate(date, order){};
//     function groupByDate(date){};
//     return {
//         sortByDate,
//         groupByDate,
//     }
// })










(function(root, factory){
    if(typeof define === 'function' && define.amd){
        // AMD Register as an anonymous modul.
        define('umd_modul', ['lodash', 'moment', factory]);
    } else if (typeof module === 'object' && module.exports){
        console.log('===COMMONJS===')
        // Node.Does not work with strict CommonJS , but
        // only CommonJS = like environments that support module.exports,
        // like Node.
        module.exports = factory(require('../../assets/libs/lodash'), require('../../assets/libs/moment'));
    } else {
        console.log('===GLOBALE===');
        // Global variables
        root.myLibrary = factory(root._, root.moment);
    }
})(typeof self !== 'undefined' ? self: this/ function(_, moment){
    console.log(momment(new Date()).format('LLL'));
    console.log(_.fill([0,0,0]), 'fillter');
    function sortByDate(date, order){};
    function groupByDate(date){};
    return {
        sortByDate,
        groupByDate,
    }
})
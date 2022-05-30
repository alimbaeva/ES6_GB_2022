/*
AMD ( Asynchronous Modul Definition) самая первая система организации модулей для JS
для использования требует require.js на клиенте

Основной цель - обеспечение работы с зависимостями, котрые могут загружаться асинхронно.
*/ 

define('amd_modul', ['lodash', 'moment'], function(_, moment){
    console.log(moment(new Date()).format('LLL'));
    console.log(_.fill([0,0,0], 'filter'));
    function sortByDate(date, order){

    };
    function groutDate(date){};
    return{
        sortByDate,
        groutDate,
    }
});
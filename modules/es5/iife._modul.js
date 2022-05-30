/**
 * IIFE (IMMEDIATLY INVOKED EXPRESSION)- это функция которая вызывается сразу после объявления.
 * - инкапсилирует логику внутри функции
 * - не засоряет глобальную область видимости
 * - не предоставляет возможностей работы с каким - либо зависимостями
 */

(function() {
    function createWidget() {console.log('start')}

    //  do what you want

    createWidget();
} )();

console.log(window.createWidget);
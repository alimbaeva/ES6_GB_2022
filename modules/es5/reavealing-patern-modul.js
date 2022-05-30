/*
данный патерн аналогичен IIFE, исключение
- функция возвращает значения и присваевает его какой либо переменной.
- патерн дает возможность  предоставить свое публичное API
- но не дает возможность управлять зависимостями
*/ 

const library = (function(){
    const privateVar = 'private';
    const publicVar = 'public';

    return {
        publicVar,
        getPrivate(){
            return privateVar
        },
        getInfo(){
            console.log('I\'m ordinary library v1.0');
        }
    }
})();
library.getInfo(); // I\'m ordinary library v1.0
console.log(library);
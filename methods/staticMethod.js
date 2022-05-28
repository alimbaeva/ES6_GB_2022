
Array.from('Hello'); // ['H','e','l','l','o']  (A)
/**
 * Array.from может принимать функцию для мапинга вторым аргументом,
 * в данном случае мы создадим массив с текстовыми значениями всех спанов на странице  (B)
 */

 Array.from(document.getElementsByTagName('span'), span => span.textContent);

 Array.of(1,2,'a', {x:1}); // [1,2,'a', {x:1}]


 /**
  * Array.from/ Array.of позволяют сщздовать экземпляры конкретного наследованного класса (С)
  */

 class CustomArray extends Array{}
 console.log(CustomArray.from('I am CustomArray instans') instanceof CustomArray); // true
 console.log(CustomArray.of(1,2,3) instanceof CustomArray); // true
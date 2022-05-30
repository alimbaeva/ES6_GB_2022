/*Итерируемый объект должен реализовать метод Symbol.iterator возврощающий итератор */
// interface Iterable{
//     [Symbol.iterator]() : Iterator;
// }
// interface Iterator{
//     next() : IteratorResult; // метод который возврошает следующий элемент итерируемого объекта
// }
// interface IteratorResult{
//     value: any; // текущее значение
//     done: booling;  // закончен ли перебор
// }
//  - String
//  - Array
//  - Map, Set

const stringIterator = 'hi'[Symbol.iterator](); // (A)
console.log(stringIterator.next()); // {value: 'h', done: false}
console.log(stringIterator.next()); // {value: 'i', done: false}
console.log(stringIterator.next()); // {value: undefinded, done: true}


const mapIterator = new Map().set(1, 'hello')[Symbol.iterator](); // (B)
console.log(mapIterator.next()); // {value: [1, hello], done: false}
console.log(mapIterator.next()); // {value: undefinded, done: true}




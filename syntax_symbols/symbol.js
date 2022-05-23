let sym = Symbol();
console.log(typeof sym);

// Фабричную функцию нельзя использовать как конструктор
// sym = new Symbol(); // TypeError : Symbol is not a constructor

// Каждый Symbol уникален
sym = Symbol('optional string');
console.log(sym === Symbol('optional string')); //false
console.log(Symbol() === Symbol()); //false
console.log(sym === sym); //true


console.group('Конфликт имен');
const publicApiSymbol = Symbol('KEY');
const publicApiKey = 'KEY';
const library = {
    [publicApiSymbol]: 'es6',
    [publicApiKey]: 'es5',
}

// Символы предотвращают случайное либо намеренное переопределение данных
library['KEY'] = 'changed';
library[Symbol('KEY')] = 'changed';
console.log(library[publicApiSymbol]);
console.log(library[publicApiKey]);
console.groupEnd();


console.group('Приватность данных');
const library2 = (function (value) {
    const private = Symbol('private');
    return {
        [private]: value,
        getValue() {
            return this[private];
        },
    };
})(2);
library2.getValue();
console.log(Reflect.ownKeys(library2));
console.groupEnd();


console.group('Приобразованние  данных');
const sym3 = Symbol('conversion');
console.log(Boolean(sym3));
console.log(!sym3);

console.log('Привидение к number явно/неявно приведет к TypeError');
try {
    +sym3; // TypeError : cennot convert a Symbol value to a number
} catch (error) {
    console.log(error);
}

try {
    Number(sym3); // TypeError : cennot convert a Symbol value to a number

} catch (error) {
    console.log(error);
}


console.log('Приведение к строке разрешено только в явном виде');
try {
    `${sym3}`; // TypeError : cannot convert a Symbol to a string
} catch (error) {
    console.log(error);
}
console.log(String(sym3)); // Symbol(convertion)
console.log(sym3.toString()); //Symbol(convertion)
console.log(Object.prototype.toString.call(null, sym3)); // [Object Symbol]
console.log(typeof Object.prototype.toString.call(null, sym3)); // string
console.groupEnd();


console.group('Приобразованние  в объект');
const toWrap = Symbol();
const wrapper = Object(toWrap);
console.log(typeof wrapper); // object
console.log(wrapper instanceof Symbol); // true
console.log(wrapper === toWrap); // false
console.log(wrapper == toWrap); // true
console.log({ [wrapper]: 1 }[toWrap]); // 1
console.groupEnd();


console.group('Object assign');
const source = { [Symbol()]: true };
const assign = Object.assign({}, source); // {[Symbol()]:true}
console.log(assign);
console.groupEnd();
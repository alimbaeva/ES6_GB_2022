//object.assign

const target = {x:1, z:2};
const sours = {y:4, z:5};
Object.assign(target, sours); // {x:1,y:4, z:5 (overrided)}; (a)

Object.getOwnPropertySymbols(JSON) //[Symbol (Symbol.toStringTag)] (b)

NaN === NaN // false
Object.is(NaN,NaN) // true
[1,2,NaN].find(Object.is.binde(null, NaN)); // 2 (C)

const a = {}, b={};
Object.setPrototypeOf(b,a);
Object.getPrototypeOf(b)===a; // true (d)
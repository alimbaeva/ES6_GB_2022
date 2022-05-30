const map = new Map();
const symbol = Symbol();
map.set(1, '1')
.set({},'object')
.set(symbol, 'symbol')
.get(symbol); // symbol


// Map.keys, values, entreis возврощает итератор
console.log(...map.keys()); // [1,{}, Symbol(unic)]
console.log(...map.values()); // [1,object, symbol]
console.log(...map.entries()); // [[1,'1'],{...}, 'object'], [Symbol(uniq), 'symbol]


console.log(map.has(symbol)); // true
console.log(map.has({})); // false
console.log(map.size); // 3
map.delete(1);
map.get(1); // undefinded
console.log(map.size); // 2
map.clear();
console.log(map.size); // 0
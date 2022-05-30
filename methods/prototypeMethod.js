const target = [1,2,5,4,12,15,18];

const iterator = target.entries(); // Итератор вщзвращает в качестве значачений пару [key(index). value]
console.log('Entries: ', iterator.next()); // {done: false, value:[0,1]}


const valueIterator = target.values(); // Итератор значений
console.log('Values: ', valueIterator.next()); // {done: false, value:1}


const keyIterator = target.keys(); // Итератор ключей
console.log('Keys: ', keyIterator.next()); // {done: false, value:0}



console.log('Find: ', target.find(value=>value === 5 /*, thisArg(optional) */)); // 5

console.log('FindIndex: ', target.findIndex(value=>value === 5 /*, thisArg(optional) */)); // 2

console.log('Fill: ', Array.from({length:5}).fill(1)); // [1,1,1,1,1]

console.log('CopyWithing: ', target.copyWithin(3,1,3)); // [1,2,5,4,12,15,18]
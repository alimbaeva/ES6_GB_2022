console.group('hasInstance');
const ParentForAll = {
    [Symbol.hasInstance](value) {
        return true
    }
};
console.log({} instanceof ParentForAll); // true
console.log(2 instanceof ParentForAll); // true
console.groupEnd();



console.group('toPrimitive');
const course = {
    lessons: ['tick', 'tack'],
    [Symbol.toPrimitive](hint) {  // hint is (number | string | default)
        switch (hint) {
            case 'number':
                return this.lessons.length;
            case 'string':
                return this.lessons.join(' ');
            case 'default':
                return this.lessons.length;
            default:
                throw new Error();
        }
    }
}

// string
console.log(String(course)); // tick tack
// default
console.log(course == 2); // true
console.log(course + 1); // 2+1=3
// number
console.log(course * 3); // 2*3=6
console.groupEnd();


console.group('toStringTag');
function customArray() {
    Array.apply(this);
}
customArray.prototype[Symbol.toStringTag] = 'customArray';
console.log(Object.prototype.toString.call(new customArray())); // "[object customArray]"
console.log(new customArray().toString()); // "[object customArray]"
console.groupEnd();


console.group('unscopables');
const scope = {
    x: 1,
    y: 2
}

with (scope) {
    console.log(`x: ${x}, y: ${y}`);
}

scope[Symbol.unscopables] = {
    x: false,
    y: true,
}

with (scope) {
    console.log(`x: ${x}, y: ${y}`);
}
console.groupEnd();


console.group('isConcatSpreadable');
const sourse = [...'Hello'];
const name = [...'Morti'];

console.log(sourse.concat(name));
name[Symbol.isConcatSpreadable] = false;
console.log(sourse.concat(name));
console.groupEnd();

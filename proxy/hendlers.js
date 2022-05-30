const target = { value: true};
const proxy = new Proxy(target, {
    get(target, key) {
        console.log(`--Access prop: ${key} --`);
        return target[key];
    },
    set(target, keu, value) {
        console.log(`-- Set ${key}: ${value} --`);
        target[key] = value;
        return true;
    },
    has(target, key) {
        if (key in target || key === 'include') {
            return true;
        }
        return false;
    },
    defineProperty(target, key, propertyDescriptor) {
        propertyDescriptor.enumerable = false;
        return Reflect.defineProperty(target, key, propertyDescriptor);
    },
    deleteProperty(target, key){
        if(key !== 'forDelete') {
            return Reflect.deleteProperty(target, key);
        }
        return true;
    },
    preventExtensions(target){
        target.frozen = true;
        Reflect.preventExtensions(target);
        return true;
    }
});



proxy.value; // Access prop: value
proxy.value=false; // Set value: false

console.group('has');
console.log('Include in proxy: ', 'include' in proxy) // true
console.groupEnd();

console.group('defineProperty');
Object.defineProperty(proxy,'defined', {
    configurable: true,
    enumerable: true,
    value: true,
});
console.log(Object.entries(proxy)); //false
console.groupEnd();

console.group('deleteProperty');
proxy.forDelete = true;
console.log('Befor delete', proxy.forDelete);
delete proxy.forDelete; // не удалит свойство
console.log("After delete", proxy.forDelete);
console.groupEnd();


console.group('preventExtensions');
console.log(proxy.frozen);
Object.preventExtensions(proxy);
console.log(proxy.frozen);
console.groupEnd();
function createObservervable(target){
    const listeners = new Map();
    const api = {
        subscribe(key, handle){
            const handlers = listeners.get(key) || [];
            listeners.set(key, [...handlers, handle]);
            return ()=>{
                listeners.set(key, listeners.get(key).filter(cb=> handle !== cb))
            }
        }
    }

    return new Proxy(target, {
        get(target, key){
            if(key in api){
                return api[key];
            }
            return target[key];
        },
        set(target, key, value, receiver){
            if(listeners.has(key)){
                listeners.get(key).forEach(handle=> handle(target[key], value));
            }
            return Reflect.set(target, key, value, receiver);
        },
        deleteProperty(target, key){
            if(listeners.has(key)){
                listeners.delete(key);
            }
            return Reflect.deleteProperty(target, key);
        }
    });
}

console.group('Unsubscribe');
const observable = createObservervable({});
const unsubscribe = observable.subscribe('x', (prev, curr)=> console.log(`Prev value: ${prev}, Curr value: ${curr}`));
observable.x=10;
unsubscribe();
observable.x=20;
console.groupEnd();


console.group('Delete');
observable.subscribe('y', (prev, curr)=> console.log(`Prev value: ${prev}, Curr value: ${curr}`));
observable.y=5;
delete observable.y;
observable.y=10;
console.groupEnd();
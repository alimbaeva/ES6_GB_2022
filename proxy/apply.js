const proxy = new Proxy(Array.prototype.concat, {
    apply(target, thisArg=[1,2], argumetList){
        return Reflect.apply(target, thisArg, argumetList)
        //or
        // return target.apply(this, arguments)
    }
});

//Apply
console.log(proxy([3,4]));
console.log(proxy.call(undefined, 3,4));
console.log(proxy.apply(undefined, [3,4]));
class Range{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    [Symbol.iterator](){
        let current=this.from;
        const to = this.to;
        return {
            next(){
                if (current <= to){
                    return {value: current++, done: false}
                }else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}
console.log(...new Range(10, 20)); // 10 11 12 13 14 15 16 17 18 19 20


class Range2{
    constructor(from, to){
        this.from=from;
        this.to=to;
        this.current=from;
    }
    next(){
        if (this.current <= this.to){
            return { value: this.current++, done: false};
        } else {
            return { value: undefined, done: true};
        }
    }
    [Symbol.iterator](){
        return this;
    }
}

console.log(...new Range2(10, 20)); // 10 11 12 13 14 15 16 17 18 19 20



class Range3{
    constructor(from, to){
        this.from=from;
        this.to=to;
    }
    [Symbol.iterator](){
        const values = [...Array(Math.abs(this.from - this.to)+1).keys()].map(index=> index + this.from);
        return values[Symbol.iterator]();
    }
}

console.log(...new Range3(10, 20)); // 10 11 12 13 14 15 16 17 18 19 20
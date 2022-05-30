// ES6 модули допускают работу с циклическими зависимостями.

// moduleA
import {fromB} from './moduleB';
export const fromA = ()=>{
    console.log('fromA');
    fromB();
};
fromA();

// moduleB
import { fromA } from './moduleA';
export const fromB = ()=>{
    console.log('fromB');
    if(Math.random()> 0.2){
        fromA()
    }
};
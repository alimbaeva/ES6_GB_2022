//modulA
export let counter = 0;
export function add(value){counter += value}

//moduleB
import {counter, add} from 'modulA';

console.log(counter); //0
add2;
console.log(counter); //2

// попытка изменить значения импортированного значения
counter++; //TypeError
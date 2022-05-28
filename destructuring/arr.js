let x, others, y,z;
[x] = [1, 2]; // x= 1 (A)

//пропустить первый элемент (B)
[, x] = [1, 2]; // x = 2

//вложенность (С)
[, [x]] = [1, [2]]; // x = 2

//использование rest при деструктуризации (D)
[x, ...others] = [1,2,3,4]; // x = 1, others = [2,3,4]

//rest не обязательно должен быть переменной, это может быть pattern (E)
[x, ...[,y,z]] = [1,2,3,4]; // x=1, y=3 z=4

//деструктуризация массива работает для всех iterable (F)
[x] = 'hello'; // x = h


//ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ

let x2, y2;
[x2 = 1, y2] = [1]; // x2: 1, y2: 2 (A)
({x2,y2=2} = {x2: 1}); // x2: 1, y2: 2 (B)

({point: { x2, y2=2 }}={}); // Type Error: Cannot destructure property {x} of 'undefinded' or 'null'

try {
    ({
        point: {x2, y2 },
    }={}); // Type Error: Cannot destructure property {x} of 'undefinded' or 'null'
} catch (error){
    console.log(error); // Значения по умолчанию могут вычислятся на лету
}

//  Значения по умолчанию могут вычислятся на лету

const gety = () => 2;
({x2=1, y2= gety()*2}= {}); // x2=1, y2=4
console.log(x2,y2);

// Вы можете ссылаться на предыдущие переменные
({x2=2, y2=x2*x2}= {});  // x2: 2, y2: 4
console.log(x2,y2);
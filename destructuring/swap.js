// нужно поьунять местами значения переменных
let x=1; y=2;

// без деструктизации
let temp =x;
x=y;
y=temp;
console.log(x,y); //2 1

// с деструктуризацией
[x, y]=[y,x];
console.log(x,y); // 1 2
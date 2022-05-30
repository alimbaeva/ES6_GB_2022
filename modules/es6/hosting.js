/*
ES6 ипорты всегда поднимаются вверх файла, и анализируются статически на этапе компиляции, 
а не в момент выполнения кода, поэтому вы не можете импортировать модули внутри условных или любых других конструкциях языка.
 Импорты длжны быть объявлены в наале файла.
*/ 

// module A
fun(); // выполниться без ошибок поэтому функции уже был выполнен
import {fun} from 'moduleB';

// однако
if(someCondition){
    import {fun} from 'moduleB'; // TypeError: нельзя импортировать модули динамически
}
{
    import {fun} from 'moduleB'; // TypeError: также приведет к ощибке
}

//moduleB
export function fun(){console.log('moduleB')}
const {x: pointX}={x:1, y: 2}; // point =1

let title;
({title: title} = {id: 1, title: 'ES6'}); // title = ES6 (A)

// короткая запись (тоже самое что и предыдущуу) (B)
({title} = { id: 1, title: 'ES6'}); // title = ES6

// вложенность (C)
({lesson:{title}}= {lesson: {id:6, title: 'Destructing'} }); // title = 'Destructing'

// sourse = null (D)
({title} = null); //
({length}) = 'aaa'; //3
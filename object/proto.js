{
    //proto
    const ancestor = {getMe: 'wwwwwww!!!!!'};
    const descendent={};

    //  const descendent= Object.create(ancestor);
    descendent.__proto__=ancestor;
    console.log(descendent.getMe); //wwwwwww!!!!!
}


{
    // или в литералах
    const  ancestor = {getMe: 'wwwwwww!!!!!'};
    const descendent={__proto__: ancestor};
    console.log(descendent.getMe); //wwwwwww!!!!!
}

{
    // __proto__ не работает для динамических свойств
    const  ancestor = {getMe: 'wwwwwww!!!!!'};
    const descendent={['__proto__']: ancestor};
    console.log(descendent.getMe); //undefinded
}



{
    // defindProperrty перезатирает поведение свойства __proto__
    const  ancestor = {getMe: 'wwwwwww!!!!!'};
    const descendent={};
    Object.defineProperty(descendent, '__proto__', {value: ancestor})
    console.log(descendent.getMe); //undefinded
}



{
    // при сздании объекта без прототипа у него нет свойство __proto__
    const withoutProto= Object.create(null);
    console.log('__proto__' in withoutProto); // false
    withoutProto.__proto__ = 'just value';
    console.log(withoutProto.__proto__); // just value
}
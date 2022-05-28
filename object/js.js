// Shorthand property names

const x=1;
const y=1;
function foo(){/*body */}
const point = {x, y, foo};
//то же самое что и 
const point2 = {x:x, y:y, foo:foo}




// Shorthand method names

const obj1={
    func(){
        console.log('From method shorthand');
    },
    *generator(){
        yield 1;
    }
}

//эквиволентно следующему
const obj2 = {
    func: function(){
        console.log('From method');
    },
    generator: function*(){
        yield 1;
    }
}





// Computwd property names

const object1={}
object['x' + '_0']=2;
object['dinamic' + '_func'] = function(){/* */}

//es6
const object = {
    ['x' +'_0']:2,
    ['dinamic' + '_func'](){/* */}
}
for (const x of [1,2,3]){
    console.log(x);
    if(x === 2) break;
}

//  можно применять деструктурирование (В)
for(const [index, value] of [1,2,3].entries()){
    console.log(`Index: ${index}, Value: ${value}`);
}

// в качестве итерируемойпеременной мщжет использоваться не только переменная
const obj={};
for(obj.iterate of 'hey'){
    console.log(obj.iterate); // h(1) e(2) y(3)
}
console.log(obj.iterate) // y
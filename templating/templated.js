// Проблема шаблонизации
const independ = (() => `
    You have
    no
    premisson for
    this action
`)();
console.log(independ);
// Решение Проблемы

// quick solution
console.log(independ.replace(/(\n)\s{2,}/g, '$1'));

// escape
console.log(`basic escape \\, \\u0061`);
console.log(`i want escape you \${'some value'}`);

// line terminators always LF: \n
console.log(
    `first
second`=== `first\nsecond`
);
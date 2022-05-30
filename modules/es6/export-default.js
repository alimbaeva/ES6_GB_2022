// экспорт по умолчанию
export default function(){return 'Hello'}

// or
function hello(){return 'Hello'};
export{ hello as default};

// module 2
import Hello from "module1";
Hello();
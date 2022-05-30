//  импортированный экспорт для var? let? const, function , class (A)
export const value = true;
export function func(){/**body */};

// экспортирование всего вместе (B)
export { value , func};

// псевдонимы для экспортов(С)
export { value , func as someName};
export { value , func as default};

// экспорт по умолчанию (D)
export default class Lib{}

// Зуэкспорт (I)
export * from 'module';

//реэкспорт конкретных значений (F)
export { value, func} from 'module';
export { value, func as someName} from 'module';

// реэкспорт значений по умолчанию (J)
export { default} from 'modul';
export { default as someName} from 'module';
export { value, func as default} from 'module';